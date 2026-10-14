import json, math, sys

SRC, OUT = sys.argv[1], sys.argv[2]
SKIP = {'Alaska', 'Hawaii', 'Puerto Rico'}
COLS = 46

data = json.load(open(SRC, encoding='utf-8'))

lat0, lon0 = math.radians(37.5), math.radians(-96.0)
p1, p2 = math.radians(29.5), math.radians(45.5)
n = (math.sin(p1) + math.sin(p2)) / 2
C = math.cos(p1) ** 2 + 2 * n * math.sin(p1)
rho0 = math.sqrt(C - 2 * n * math.sin(lat0)) / n

def project(lon, lat):
    la, lo = math.radians(lat), math.radians(lon)
    rho = math.sqrt(max(C - 2 * n * math.sin(la), 0)) / n
    th = n * (lo - lon0)
    return rho * math.sin(th), rho0 - rho * math.cos(th)

def rings(geom):
    if geom['type'] == 'Polygon':
        return [geom['coordinates'][0]]
    return [poly[0] for poly in geom['coordinates']]

states = []
for f in data['features']:
    name = f['properties']['name']
    if name in SKIP:
        continue
    states.append((name, [[project(x, y) for x, y in r] for r in rings(f['geometry'])]))

xs = [p[0] for _, ps in states for r in ps for p in r]
ys = [p[1] for _, ps in states for r in ps for p in r]
minx, maxx, miny, maxy = min(xs), max(xs), min(ys), max(ys)
step = (maxx - minx) / (COLS - 1)
ROWS = int(round((maxy - miny) / step)) + 1

def inside(px, py, ring):
    hit = False
    j = len(ring) - 1
    for i in range(len(ring)):
        xi, yi = ring[i]
        xj, yj = ring[j]
        if (yi > py) != (yj > py) and px < (xj - xi) * (py - yi) / (yj - yi) + xi:
            hit = not hit
        j = i
    return hit

owner = {}
total = 0
for r in range(ROWS):
    for c in range(COLS):
        px = minx + c * step
        py = maxy - r * step
        for name, polys in states:
            if any(inside(px, py, ring) for ring in polys):
                owner.setdefault(name, []).append((c, r))
                total += 1
                break

pins = {}
for name, pts in owner.items():
    cx = sum(p[0] for p in pts) / len(pts)
    cy = sum(p[1] for p in pts) / len(pts)
    pins[name] = min(pts, key=lambda p: (p[0] - cx) ** 2 + (p[1] - cy) ** 2)

with open(OUT, 'w', encoding='utf-8', newline='') as fh:
    w = lambda line='': print(line, file=fh)
    w('// Generado por scripts/gen_map.py a partir de la geometria real de EE. UU.')
    w('// (proyeccion Albers conica equivalente, paralelos 29.5N/45.5N) rasterizada')
    w('// a una reticula de puntos. Celdas [columna, fila], fila 0 = norte.')
    w('// No editar a mano.')
    w()
    w('export const GRID = { cols: %d, rows: %d }' % (COLS, ROWS))
    w()
    w('// Puntos agrupados por estado, para poder resaltar los de presencia.')
    w('export const DOTS_BY_STATE = {')
    for name in sorted(owner):
        pts = sorted(owner[name], key=lambda p: (p[1], p[0]))
        w("  '%s': [%s]," % (name, ','.join('[%d,%d]' % p for p in pts)))
    w('}')
    w()
    w('// Ancla de cada etiqueta: el punto real mas cercano al centroide del estado.')
    w('export const STATE_POINTS = {')
    for name in sorted(pins):
        w("  '%s': [%d, %d]," % (name, pins[name][0], pins[name][1]))
    w('}')

print('puntos: %d | reticula: %dx%d | estados: %d' % (total, COLS, ROWS, len(owner)))

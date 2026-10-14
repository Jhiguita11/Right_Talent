import { useState } from 'react'
import { useLang } from '../context/LanguageContext.jsx'
import { content } from '../data/content.js'
import { GRID, DOTS_BY_STATE, STATE_POINTS } from '../data/usMap.js'
import { MapPin } from './icons.jsx'

const CELL = 10
const W = GRID.cols * CELL
const H = GRID.rows * CELL
const DOT_R = 3.05
const HIT_R = CELL * 0.72   // área invisible que cierra los huecos entre puntos

// Hawái queda fuera de la proyección continental, así que va como recuadro
// suelto abajo a la izquierda — la convención en cualquier mapa de EE. UU.
const HAWAII_ISLANDS = [[1, 25], [2, 26], [3, 26]]
const HAWAII_POINT = [2, 26]

const center = ([c, r]) => [c * CELL + CELL / 2, r * CELL + CELL / 2]

const place = (cell) => {
  const [x, y] = center(cell)
  return { left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` }
}

export default function WhereWeAre() {
  const { t } = useLang()
  const c = content.where
  const [hovered, setHovered] = useState(null)

  const stops = c.states
    .map((s) => ({ ...s, cell: s.key === 'Hawaii' ? HAWAII_POINT : STATE_POINTS[s.key] }))
    .filter((s) => s.cell)

  const present = new Set(c.states.map((s) => s.key))

  // Cada estado con presencia es una zona sensible: los puntos visibles más un
  // círculo transparente encima, para que el mouse no se caiga por los huecos.
  const stateGroup = (name, cells) => (
    <g
      key={name}
      className={`where__state${hovered === name ? ' is-hot' : ''}`}
      onMouseEnter={() => setHovered(name)}
      onMouseLeave={() => setHovered((h) => (h === name ? null : h))}
    >
      {cells.map((cell) => {
        const [x, y] = center(cell)
        return <circle key={`d${cell[0]}-${cell[1]}`} cx={x} cy={y} r={DOT_R} className="where__dot where__dot--on" />
      })}
      {cells.map((cell) => {
        const [x, y] = center(cell)
        return <circle key={`h${cell[0]}-${cell[1]}`} cx={x} cy={y} r={HIT_R} className="where__hit" />
      })}
    </g>
  )

  return (
    <section className="section where" id="where">
      <div className="container where__grid">
        <div className="where__intro reveal reveal--left">
          <span className="where__badge"><MapPin /></span>
          <span className="eyebrow">{t(c.eyebrow)}</span>
          <h2 className="heading heading--lg">{t(c.title)}</h2>
        </div>

        <div className="where__map reveal reveal--right">
          <div className={`where__canvas${hovered ? ' is-hovering' : ''}`} style={{ aspectRatio: `${W} / ${H}` }}>
            <svg className="where__dots" viewBox={`0 0 ${W} ${H}`} focusable="false">
              {/* Estados sin presencia: sólo silueta, sin interacción. */}
              <g className="where__base" aria-hidden="true">
                {Object.entries(DOTS_BY_STATE)
                  .filter(([name]) => !present.has(name))
                  .map(([name, cells]) =>
                    cells.map((cell) => {
                      const [x, y] = center(cell)
                      return <circle key={`${name}-${cell[0]}-${cell[1]}`} cx={x} cy={y} r={DOT_R} className="where__dot" />
                    }),
                  )}
              </g>

              {Object.entries(DOTS_BY_STATE)
                .filter(([name]) => present.has(name))
                .map(([name, cells]) => stateGroup(name, cells))}

              {present.has('Hawaii') && stateGroup('Hawaii', HAWAII_ISLANDS)}
            </svg>

            {stops.map((s) => (
              <span
                key={s.key}
                className={`where__pin${hovered === s.key ? ' is-hot' : ''}`}
                data-side={s.side || 'right'}
                style={place(s.cell)}
              >
                <span className="where__ping" aria-hidden="true" />
                <span
                  className="where__label"
                  tabIndex={0}
                  onMouseEnter={() => setHovered(s.key)}
                  onMouseLeave={() => setHovered((h) => (h === s.key ? null : h))}
                  onFocus={() => setHovered(s.key)}
                  onBlur={() => setHovered((h) => (h === s.key ? null : h))}
                >
                  {t(s.label)}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

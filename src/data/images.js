// Curated Unsplash hospitality imagery (stable photo IDs).
const u = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  heroBg: u('1582719478250-c89cae4dc85b', 1920),
  handshake: u('1521791136064-7986c2920216'),
  team: u('1556761175-5973dc0f32e7'),
  reception: u('1564501049412-61c2a3083791'),
  lobby: u('1566073771259-6a8506099945', 1100),
  housekeeping: u('1631049307264-da0ec9d70304'),
  cleaning: u('1581578731548-c64695cc6952'),
  pool: u('1571896349842-33c89424de2d', 1200),
  welcome: u('1566073771259-6a8506099945', 1000),
  kids: u('1490725263030-1f0521cec8ec'),
  van: u('1549399542-7e3f8b79c341'),
}

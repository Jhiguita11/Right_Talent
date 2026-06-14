// Curated Unsplash hospitality imagery (stable photo IDs).
const u = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  heroBg: u('1582719478250-c89cae4dc85b', 1920),
  // TODO: client to provide final hotel/resort photos for Leadership & Purpose.
  // Placeholders below are hospitality-themed in the meantime.
  handshake: u('1551882547-ff40c63fe5fa', 1000), // luxury resort at dusk (Leadership)
  team: u('1571896349842-33c89424de2d', 1000), // resort pool
  reception: u('1564501049412-61c2a3083791'),
  lobby: u('1566073771259-6a8506099945', 1100),
  housekeeping: u('1631049307264-da0ec9d70304'),
  cleaning: u('1581578731548-c64695cc6952'),
  pool: u('1571896349842-33c89424de2d', 1200),
  welcome: u('1566073771259-6a8506099945', 1000),
  kids: u('1490725263030-1f0521cec8ec'),
  van: u('1549399542-7e3f8b79c341'),
}

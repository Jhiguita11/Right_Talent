// Curated Unsplash hospitality imagery (stable photo IDs).
import leadershipPhoto from '../assets/2.png' // business handshake (client-provided)
import purposePhoto from '../assets/1.jpeg' // Right Talent branded team (client-provided)

const u = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  heroBg: u('1582719478250-c89cae4dc85b', 1920),
  leadership: leadershipPhoto, // "Who We Are" section
  purpose: purposePhoto, // "Our Human Purpose" section
  solution: u('1571896349842-33c89424de2d', 1000), // resort pool (moved from Purpose)
}

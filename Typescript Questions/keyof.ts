// Keyof Type Operator 
// The keyof operator takes an object type and produces a string or numeric literal union of its keys. The following type P is the same type as type P = "x" | "y":

type Point = { x: number, y: number};
type P = keyof Point;

// keyof types become especially useful when combined with mapped types
// The keyof operator is used for extracting a union representing the keys (also known as "properties") of a type

// Solution 
const casettesByArtist = {
  'Alanis Morissette': 2,
  'Mariah Carey': 8,
  'Nirvana': 3,
  'Oasis': 2,
  'Radiohead': 3,
  'No Doubt': 3,
  'Backstreet Boys': 3,
  'Spice Girls': 2,
  'Green Day': 2,
  'Pearl Jam': 5,
  'Metallica': 5,
  "Guns N' Roses": 2,
  'U2': 3,
  'Aerosmith': 4,
  'R.E.M.': 4,
  'Blur': 3,
  'The Smashing Pumpkins': 5,
  'Britney Spears': 3,
  'Whitney Houston': 3,
};
type Artists = 'Alanis Morissette' | 'Mariah Carey' | 'Nirvana'
  | 'Oasis' | 'Radiohead' | 'No Doubt'| 'Backstreet Boys'
  | 'Spice Girls' | 'Green Day' | 'Pearl Jam'| 'Metallica'
  | 'Guns N\' Roses' | 'U2' | 'Aerosmith' | 'R.E.M.' | 'Blur'
  | 'The Smashing Pumpkins' | 'Britney Spears' | 'Whitney Houston'

  type CasettesByArtist = typeof casettesByArtist;
type Artist = keyof CasettesByArtist;

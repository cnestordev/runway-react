// data types

export const hero = {
  id: Number,
  name: '',
  slug: '',
  powerstats: {
    intelligence: Number,
    strength: Number,
    speed: Number,
    durability: Number,
    power: Number,
    combat: Number,
  },
  appearance: {
    gender: '',
    race: '',
    height: [],
    weight: [],
    eyeColor: '',
    hairColor: '',
  },
  biography: {
    fullName: '',
    alterEgos: '',
    aliases: [],
    placeOfBirth: '',
    firstAppearance: '',
    publisher: '',
    alignment: '',
  },
  work: {
    occupation: '',
    base: '',
  },
  connections: {
    groupAffiliation: '',
    relatives: '',
  },
  images: {
    xs: '',
    sm: '',
    md: '',
    lg: '',
  },
}

export const races = {
  dwarf: {
    name: "Dwarf",
    description:
      "Dwarves are the shortest of the metahuman races, although their torsos and shoulders are wider than their size would indicate. Thus their strength is equal to, and sometimes greater than, the larger races.",
    bonus: "+1 Willpower",
    maxStats: {
      body: 11,
      quickness: 9,
      strength: 12,
      intelligence: 9,
      willpower: 11,
      charisma: 9,
    },
  },
  elf: {
    name: "Elf",
    description:
      "Many people consider elves to be the most fortunate metahumans -- they are more attractive and socially accepted than the other metahuman races. Elves are taller than humans but have a more slender build. Their hair is usually thicker, longer, and more luxurious than average, and their ears come to a point.",
    bonus: "+1 Charisma",
    maxStats: {
      body: 9,
      quickness: 11,
      strength: 9,
      intelligence: 9,
      willpower: 9,
      charisma: 12,
    },
  },
};

export const mc = {
  id: "mc",
  firstName: "Marcus",
  lastName: "Wong",
  streetName: "Nullus",
  portrait: "pc_elfmale_mc_png",
  race: "elf",
  etiquettes: ["Shadowrunner"],
};

export const characters = [mc];

import duncanPortrait from "@/assets/npc_orkmale_wu.png";
import pcPortrait from "@/assets/pc_elfmale.png";

export const races = {
  dwarf: {
    name: "Dwarf",
    description:
      "Dwarves are the shortest of the metahuman races, although their torsos and shoulders are wider than their size would indicate. Thus their strength is equal to, and sometimes greater than, the larger races.",
    bonuses: ["+1 Willpower"],
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
      "Many people consider elves to be the most fortunate metahumans - they are more attractive and socially accepted than the other metahuman races. Elves are taller than humans but have a more slender build. Their hair is usually thicker, longer, and more luxurious than average, and their ears come to a point.",
    bonuses: ["+1 Charisma"],
    maxStats: {
      body: 9,
      quickness: 11,
      strength: 9,
      intelligence: 9,
      willpower: 9,
      charisma: 12,
    },
  },
  human: {
    name: "Human",
    description:
      "Humans were the only race on Earth until the Awakening in 2012. Now they find themselves the definition of average or even normal. They are still the most populous race in world and thus control many of the most powerful, monied, and important positions in society.",
    bonuses: ["+3 Karma Points"],
    maxStats: {
      body: 9,
      quickness: 9,
      strength: 9,
      intelligence: 9,
      willpower: 9,
      charisma: 9,
    },
  },
  ork: {
    name: "Ork",
    description:
      "Orks are the fastest-breeding race and now are second only to humans in world population. Their size leads to an intimidating silhouette and a body that can take more physical damage than the average. Orks have pointed ears and intimidating teeth or tusks.",
    bonuses: ["+1 Body"],
    maxStats: {
      body: 14,
      quickness: 9,
      strength: 12,
      intelligence: 8,
      willpower: 9,
      charisma: 8,
    },
  },
  troll: {
    name: "Troll",
    description:
      "Trolls are the largest metahuman race. Heavy prejudice against them has led people to assume trolls have lowered intelligence but in reality, there is no proof to this. Trolls have pointed ears, intimidating teeth or tusks, and many have horn-like growths that other metahumans do not manifest.",
    bonuses: ["+1 Body", "+1 Strength"],
    maxStats: {
      body: 17,
      quickness: 8,
      strength: 15,
      intelligence: 6,
      willpower: 9,
      charisma: 6,
    },
  },
};

export const pc = {
  id: "pc",
  firstName: "Marcus",
  lastName: "Wong",
  streetName: "Nullus",
  portrait: pcPortrait,
  archetype: "Sniper Rigger",
  race: "elf" as const,
  gender: "Male",
  etiquettes: ["Shadowrunner"],
  description: undefined,
};

export const duncan = {
  id: "duncan",
  firstName: "Duncan",
  lastName: "Wu",
  streetName: "Gun Show",
  portrait: duncanPortrait,
  archetype: "Security Specialist",
  race: "ork" as const,
  gender: "Male",
  etiquettes: undefined,
  description: "blah blah blah",
};

export const characters = [pc, duncan];

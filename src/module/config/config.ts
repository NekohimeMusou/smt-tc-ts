declare global {
  type CharacterClass = keyof typeof characterClasses;
  type ItemType = keyof typeof itemTypes;
}

/**
 * System constants
 */

const characterClasses = {
  fiend: "TYPES.Actor.fiend",
  demon: "TYPES.Actor.demon",
  human: "TYPES.Actor.human",
};

const itemTypes = {
  inventoryItem: "TYPES.Item.inventoryItem",
  weapon: "TYPES.Item.weapon",
  armor: "TYPES.Item.armor",
  magatama: "TYPES.Item.magatama",
  skill: "TYPES.Item.skill",
};

export const SMT = {
  characterClasses,
  itemTypes,
} as const;

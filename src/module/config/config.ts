declare global {
  type CharacterClass = keyof typeof characterClasses;
  type ItemType = keyof typeof itemTypes;
}

/**
 * System constants
 */

const characterClasses = {
  fiend: "TYPES.Actor.fiend",
};

const itemTypes = {
  skill: "TYPES.Item.skill",
  inventoryItem: "TYPES.Item.inventoryItem",
};

export const SMT = {
  characterClasses,
  itemTypes,
} as const;

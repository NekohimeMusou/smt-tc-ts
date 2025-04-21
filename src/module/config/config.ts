declare global {
  type ItemType = keyof typeof itemTypes;
}

/**
 * System constants
 */

const itemTypes = {
  inventoryItem: "TYPES.Item.inventoryItem",
  skill: "TYPES.Item.skill",
};

export const SMT = {
  itemTypes,
} as const;

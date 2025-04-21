declare global {
  type ItemType = keyof typeof itemTypes;
}

/**
 * System constants
 */

const itemTypes = {
  skill: "TYPES.Item.skill",
};

export const SMT = {
  itemTypes,
} as const;

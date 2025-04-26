export {};

import type { SmtItem } from "./documents/item/item";
import type { SkillData } from "./data-models/item/types/skill";
import type { InventoryItemData } from "./data-models/item/types/inventory-item";

/**
 * CONFIG CONSTANTS
 *
 * These are normally defined in ./config/config.ts; they're moved here to slim down the example
 * I tried simplifying it all the way to `type ItemType = "skill";` and it didn't seem to make a difference,
 */

declare global {
  type ItemType = keyof typeof itemTypes;
}

const itemTypes = {
  skill: "TYPES.Item.skill",
  inventoryItem: "TYPES.Item.inventoryItem",
};

export const SMT = {
  itemTypes,
} as const;

/**
 * END CONFIG CONSTANTS
 */

declare module "fvtt-types/configuration" {
  interface DocumentClassConfig {
    Item: typeof SmtItem<Item.SubType>;
  }

  interface DataModelConfig {
    Item: {
      skill: typeof SkillData;
      inventoryItem: typeof InventoryItemData;
    };
  }
}

// type TestConfiguration = foundry.abstract.Document.ImplementationClassFor<"Item">;

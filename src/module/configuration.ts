export {};

import type { SmtItem } from "./documents/item/item";
import type { SkillData } from "./data-models/item/types/skill";

/**
 * CONFIG CONSTANTS
 *
 * These are normally defined in ./config/config.ts; they're moved here to slim down the example
 * I tried simplifying it all the way to `type ItemType = "skill";` and it didn't seem to make a difference,
 * so I stuck with (a pointless version of) the method I've been using all along in case it matters.
 */

declare global {
  type ItemType = keyof typeof itemTypes;
}

const itemTypes = {
  skill: "TYPES.Item.skill",
};

export const SMT = {
  itemTypes,
} as const;

/**
 * END CONFIG CONSTANTS
 */

declare module "fvtt-types/configuration" {
  interface DocumentClassConfig {
    Item: typeof SmtItem<ItemType>;
  }

  interface DataModelConfig {
    Item: {
      skill: typeof SkillData;
    };
  }
}

// type TestConfiguration = Document.ImplementationClassFor<"Actor">;

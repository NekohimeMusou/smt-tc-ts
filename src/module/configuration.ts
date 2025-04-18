// The `export {}` is necessary because the file does not contain any top-level import/export statements.
// `import Document = ...` does not count.
//
// Once you add an import or export statement, you can remove the `export {}`.
export {};

import type { SmtItem } from "./documents/item/item";
import type { SkillData } from "./data-models/item/types/skill";
import type { InventoryItemData } from "./data-models/item/types/inventoryItem";

// This is how we do it now, right?
declare module "fvtt-types/configuration" {
  interface DocumentClassConfig {
    Item: typeof SmtItem<ItemType>;
  }

  interface DataModelConfig {
    Item: {
      inventoryItem: typeof InventoryItemData;
      skill: typeof SkillData;
    };
  }
}

// type TestConfiguration = Document.ImplementationClassFor<"Actor">;

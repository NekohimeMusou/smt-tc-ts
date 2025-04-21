// While many common classes are in the global scope such as `Actor` or `Item`, it seems Foundry has begun moving away from this.
// Notably the `DataModel`, `DataField`, `ApplicationV2`, and other similar class is only accessible through some path.
//
// `import =` is an obscure syntax from the CommonJS era.
// The pivotal part about it here is that it's effectively equivalent to:
// `var DataModel = foundry.abstract.DataModel`.
// But it also lets you write things like `DataModel.Any` that refers to the `DataModel` namespace.

import { SMT } from "./config/config";
import { ITEMMODELS } from "./data-models/item/item-data-models";
import { SmtItem } from "./documents/item/item";

declare global {
  interface Game {
    smt: {
      SmtItem: typeof SmtItem;
    };
  }

  interface CONFIG {
    SMT: typeof SMT;
  }
}
Hooks.on("ready", () => {
  console.log("SMT: TC | Initializing SMT: Tokyo Conception game system");

  CONFIG.SMT = SMT;

  registerDataModels();
  registerDocumentClasses();
});

function registerDataModels() {
  CONFIG.Item.dataModels = ITEMMODELS;
}

function registerDocumentClasses() {
  CONFIG.Item.documentClass = SmtItem;
}
import { SMT } from "./configuration";
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
  game.smt = { SmtItem };

  registerDataModels();
  registerDocumentClasses();
});

function registerDataModels() {
  CONFIG.Item.dataModels = ITEMMODELS;
}

function registerDocumentClasses() {
  CONFIG.Item.documentClass = SmtItem;
}

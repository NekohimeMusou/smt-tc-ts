import type { SmtItem } from "../../../documents/item/item";
import { BaseItemData } from "../abstract/base-item";

export class InventoryItemData extends BaseItemData<SmtItem<"inventoryItem">> {}

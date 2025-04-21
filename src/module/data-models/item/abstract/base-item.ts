import fields = foundry.data.fields;

const schema = {
  description: new fields.HTMLField(),
};

export abstract class BaseItemData extends foundry.abstract.TypeDataModel<
  typeof schema,
  Item.Implementation
> {
  static override defineSchema() {
    return schema;
  }
}

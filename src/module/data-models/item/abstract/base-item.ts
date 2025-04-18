import fields = foundry.data.fields;

const schema = {
  description: new fields.HTMLField(),
};

export abstract class BaseItemData<
  T extends Item.Implementation,
> extends foundry.abstract.TypeDataModel<typeof schema, T> {
  static override defineSchema() {
    return schema;
  }
}

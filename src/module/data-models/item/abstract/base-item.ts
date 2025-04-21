import fields = foundry.data.fields;

const schema = {
  description: new fields.HTMLField(),
};

export abstract class BaseItemData extends foundry.abstract.TypeDataModel<
  typeof schema,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any
> {
  static override defineSchema() {
    return schema;
  }
}

import { defineField, defineType } from "sanity";

export const certificateType = defineType({
  name: "certificate",
  title: "certificate",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "issued",
      type: "string",
    }),
    defineField({
      name: "expires",
      type: "string",
    }),
    defineField({
      name: "certUrl",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
  ],
});

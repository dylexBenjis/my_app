import { defineField, defineType } from "sanity";

export const softwareType = defineType({
  name: "software",
  title: "software",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "repoUrl",
      type: "string",
    }),
    defineField({
      name: "projectUrl",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "value",
      type: "string",
    }),
  ],
});

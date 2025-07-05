import { title } from "process";

export const ProductDetail = {
  name: "Services",
  title: "Digital Services",
  type: "document",
  fields: [
    {
      name: "title",
      Title: "Services Title",
      type: "string",
    },
    {
      name: "description",
      title: "Service Description",
      type: "text",
    },
    {
      name: "icons",
      title: "Services Icon",
      type: "string",
      // description: 'Name of icon component like "Globe", "Palette", etc',
    },
    {
      name: "feature",
      title: "Features List",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "gradient",
      title: "Gradient",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "imageAlt",
      title: "Image Alt",
      type: "string",
    },
  ],
};

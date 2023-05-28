import { CollectionConfig } from "payload/types";
import formatSlug from "../utilities/formatSlug";

export type Type = {
  title: string;
  slug: string;
  labels: {
    singular: string;
    plural: string;
  };
};

export const Property: CollectionConfig = {
  slug: "districts",
  labels: {
    singular: "Bairro",
    plural: "Bairros",
  },
  admin: {
    useAsTitle: "districtName",
    disableDuplicate: true,
  },
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      name: "districtName",
      label: "Nome",
      type: "text",
      minLength: 3,
      unique: true,
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [formatSlug("districtName")],
      },
    },
  ],
};

export default Property;

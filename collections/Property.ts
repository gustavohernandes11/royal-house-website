import { CollectionConfig, FieldHook } from "payload/types";
import { MediaType } from "./Media";
import formatSlug from "../utilities/formatSlug";

export type Type = {
  title: string;
  slug: string;
  labels: {
    singular: string;
    plural: string;
  };
  image?: MediaType;
  meta: {
    title?: string;
    description?: string;
    keywords?: string;
  };
};

export const Property: CollectionConfig = {
  slug: "properties",
  labels: {
    singular: "Imóvel",
    plural: "Imóveis",
  },
  admin: {
    useAsTitle: "title",
    disableDuplicate: true,
    defaultColumns: ["title", "description", "districts"],
  },
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      name: "title",
      label: "Título",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Descrição",
      type: "richText",
      required: true,
    },
    {
      name: "district",
      label: "Bairro",
      type: "relationship",
      relationTo: "districts",
      hasMany: false,
      required: true,
    },
    {
      name: "localization",
      label: "Localização",
      type: "text",
      required: true,
    },
    {
      name: "highlight",
      label: "Destacar na primeira página",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "purpose",
      label: "Propósito",
      type: "select",
      options: [
        { value: "toSell", label: "Vender" },
        { value: "toHire", label: "Alugar" },
        { value: "both", label: "Ambos" },
      ],
      defaultValue: "toSell",
      required: true,
    },
    {
      name: "sellPrice",
      label: "Preço de Venda (BRL)",
      type: "number",
      min: 0,
      defaultValue: 0,
      admin: {
        condition: (data) => {
          return data.purpose === "toSell" || data.purpose === "both";
        },
      },
      required: true,
    },
    {
      name: "hirePrice",
      label: "Preço de Aluguel (BRL)",
      type: "number",
      min: 0,
      defaultValue: 0,
      admin: {
        condition: (data) => {
          return data.purpose === "toHire" || data.purpose === "both";
        },
      },
      required: true,
    },
    {
      name: "propertyCharacteristics",
      label: "Características da Propriedade",
      type: "group",
      fields: [
        {
          name: "propertyType",
          label: "Tipo de Propriedade",
          type: "select",
          options: ["Casa", "Apartamento", "Bangalo"],
          required: true,
        },
        {
          type: "row",
          fields: [
            {
              name: "dorms",
              label: "Dormitórios",
              type: "number",
              max: 10,
              min: 0,
              required: true,
              admin: {
                width: "25%",
              },
            },
            {
              name: "vacancies",
              label: "Vagas",
              type: "number",
              max: 10,
              min: 0,
              required: true,
              admin: {
                width: "25%",
              },
            },
            {
              name: "toilets",
              label: "Banheiros",
              type: "number",
              max: 10,
              min: 0,
              required: true,
              admin: {
                width: "25%",
              },
            },
            {
              name: "squareMetersUsableArea",
              label: "Metros quadrados de área útil",
              type: "number",
              max: 50000,
              min: 0,
              required: true,
              admin: {
                width: "25%",
              },
            },
          ],
        },
      ],
    },

    {
      name: "image",
      label: "Imagens da Galeria",
      type: "upload",
      relationTo: "media",
    },

    {
      name: "meta",
      label: "Informações de SEO",
      type: "group",
      fields: [
        {
          name: "title",
          label: "Título do Navegador",
          type: "text",
        },
        {
          name: "description",
          label: "Descrição da Página",
          type: "textarea",
        },
        {
          name: "keywords",
          label: "Palavras Chaves",
          type: "text",
        },
      ],
    },
    {
      name: "slug",
      label: "slug",
      type: "text",
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [formatSlug("title")],
      },
    },
  ],
};

export default Property;

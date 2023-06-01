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
        { value: "toRent", label: "Alugar" },
        { value: "both", label: "Vender ou Alugar" },
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
      name: "rentPrice",
      label: "Preço de Aluguel (BRL)",
      type: "number",
      min: 0,
      defaultValue: 0,
      admin: {
        condition: (data) => {
          return data.purpose === "toRent" || data.purpose === "both";
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
          options: [
            { value: "casa", label: "Casa" },
            { value: "apartamento", label: "Apartamento" },
            { value: "chale", label: "Chalé" },
            { value: "cobertura", label: "Cobertura" },
            { value: "sobrado", label: "Sobrado" },
            { value: "estudio", label: "Estúdio" },
            { value: "loft", label: "Loft" },
            { value: "kitnet", label: "Kitnet" },
            { value: "flat", label: "Flat" },
            { value: "penthouse", label: "Penthouse" },
            { value: "bangalo", label: "Bangalô" },
            { value: "sitio", label: "Sítio" },
            { value: "fazenda", label: "Fazenda" },
            { value: "chacara", label: "Chácara" },
            { value: "casaDePraia", label: "Casa de Praia" },
            { value: "casaDeCampo", label: "Casa de Campo" },
          ],
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
      name: "cover",
      label: "Imagem da Capa",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Uma imagem de boa qualidade que representa o imóvel",
      },
      required: true,
    },
    {
      name: "gallery",
      labels: {
        singular: "Imagem da galeria",
        plural: "Imagens da galeria",
      },
      type: "array",
      minRows: 2,
      maxRows: 10,
      fields: [
        {
          name: "galleryImage",
          label: "Imagem da Galeria",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
      admin: {
        description:
          "Utilize fotos apresentáveis que ficarão visíveis em um carrossel de imagens",
      },
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
          admin: {
            description:
              "Conteúdo que ficará visivel na aba do navegador. Se não definido, será usado o título do imóvel",
          },
        },
        {
          name: "description",
          label: "Descrição da Página",
          type: "textarea",
          admin: {
            description:
              "Descrição de até 80 caracteres sobre a página. Importante para otimização de buscadores de sites (SEO)",
          },
        },
        {
          name: "keywords",
          label: "Palavras Chaves",
          type: "text",
          admin: {
            description:
              "Algumas palavras chaves da página. Separe por vírgula. Quanto menos genéricas, melhor.",
          },
        },
      ],
    },
    {
      name: "slug",
      label: "slug (gerado automaticamente)",
      type: "text",
      admin: {
        position: "sidebar",
        readOnly: true,
      },
      hooks: {
        beforeValidate: [formatSlug("title")],
      },
    },
  ],
};

export default Property;

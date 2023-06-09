import { CollectionConfig } from "payload/types";

export type MediaType = {
  filename: string;
  labels: {
    plural: string;
    singular: string;
  };
  width: number;
  height: number;
  alt: string;
  sizes: {
    card?: {
      filename: string;
      width: number;
      height: number;
    };
    feature?: {
      filename: string;
      width: number;
      height: number;
    };
  };
};

const Media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: "Mídia",
    plural: "Mídias",
  },
  access: {
    read: (): boolean => true, // Everyone can read Media
  },
  upload: {
    adminThumbnail: "card",
    imageSizes: [
      {
        name: "card",
        width: 640,
        height: 480,
      },
      {
        name: "feature",
        width: 1024,
        height: 576,
      },
    ],
  },
  fields: [
    {
      name: "alt",
      label: "Texto alternativo (descritivo)",
      type: "text",
      required: true,
    },
  ],
};

export default Media;

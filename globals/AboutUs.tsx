import { GlobalConfig } from "payload/types";

const AboutUs: GlobalConfig = {
  slug: "aboutUs",
  label: "Sobre Nós",
  fields: [
    {
      name: "aboutUs",
      label: "Sobre a empresa",
      type: "richText",
      admin: {
        description:
          "Descrição longa e bem informativa sobre a empresa. Algo em torno de 3 a 5 parágrafos.",
      },
      required: true,
    },
  ],
};
export default AboutUs;

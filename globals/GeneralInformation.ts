import { GlobalConfig } from "payload/types";

const GeneralInformation: GlobalConfig = {
  slug: "generalInformation",
  label: "Informações Gerais",
  fields: [
    {
      name: "companyName",
      label: "Nome da companhia",
      type: "text",
      required: true,
    },
    {
      name: "slogan",
      label: "Slogan da Empresa",
      type: "text",
      admin: {
        description:
          "Frase curta que define o posicionamento da marca e seu diferencial. Ficará disponível na tela inicial.",
      },
    },
    {
      name: "creci",
      label: "CRECI (Conselho Regional de Corretores de Imóveis)",
      type: "text",
      required: true,
    },

    {
      name: "phoneNumber",
      label: "Número de telefone",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      type: "text",
      required: true,
    },
    {
      type: "row",
      fields: [
        {
          name: "facebookUrl",
          label: "Link para Facebook",
          type: "text",
          admin: {
            width: "50%",
          },
        },
        {
          name: "instagramUrl",
          label: "Link para Instagram",
          type: "text",
          admin: {
            width: "50%",
          },
        },
      ],
    },
    {
      name: "companyLocations",
      label: "Localizações",
      admin: {
        description: "Quais lugares que sua empresa está?",
      },
      labels: {
        singular: "Localização",
        plural: "Localizações",
      },
      type: "array",
      minRows: 1,
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "localization",
              label: "Localização",
              type: "text",
              admin: {
                width: "50%",
              },
              required: true,
            },
            {
              name: "phoneNumber",
              label: "Número de telefone",
              type: "text",
              admin: {
                width: "50%",
              },
            },
          ],
        },
        {
          name: "CEP",
          label: "CEP",
          type: "number",
        },
      ],
    },
  ],
  access: {
    read: (): boolean => true,
  },
};

export default GeneralInformation;

import { buildConfig } from "payload/config";
import dotenv from "dotenv";
import Property from "./collections/Property";
import Districts from "./collections/Districts";
import Media from "./collections/Media";
import GeneralInformation from "./globals/GeneralInformation";
import AboutUs from "./globals/AboutUs";

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Property, Media, Districts],
  globals: [GeneralInformation, AboutUs],
});

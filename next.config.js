var path = require("path");
require("dotenv").config();
const { sizes } = require("./blocks/Image/sizes.json");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles"), "/components/*"],
  },
  publicRuntimeConfig: {
    SERVER_URL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  },
  images: {
    domains: [
      "localhost",
      // Your domain(s) here
    ],
    deviceSizes: sizes,
  },
};

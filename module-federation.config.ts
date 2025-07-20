import * as dotenv from "dotenv";
dotenv.config();

const remoteUrl =
  process.env.REMOTE_CRYPTO_APP_URL ||
  "http://localhost:8082/remoteEntry.js";

export const mfConfig = {
  name: "mf_crypto_host",
  remotes: {
    remote_crypto_app: `remote_crypto_app@${remoteUrl}`,
  },
  shared: ["react", "react-dom"],
};

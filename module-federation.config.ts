export const mfConfig = {
  name: "mf_crypto_host",
  exposes: {},
  remotes: {
    remote_crypto_app: "remote_crypto_app@http://localhost:8082/remoteEntry.js"
  },
  shared: ["react", "react-dom"],
};

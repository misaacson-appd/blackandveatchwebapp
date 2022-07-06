import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// eslint-disable-next-line
require("appdynamics").profile({
  controllerHostName: "se-lab.saas.appdynamics.com",
  controllerPort: 443,
  controllerSslEnabled: true,
  accountName: "se-lab",
  accountAccessKey: "hj6a4d7h2cuq",
  applicationName: "z_moi_blackandveatch",
  tierName: "web",
  nodeName: "vue",
});

createApp(App).use(store).use(router).mount("#app");

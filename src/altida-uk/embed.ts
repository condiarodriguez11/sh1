import type { InitConfig } from "../Config.types";
import App from "./Altida.svelte";

const initConfig: InitConfig = {
  mainTitle: "Customize your Accora Altida",
  bookADemoHref: "https://accora.care/book-a-join-visit",
};

export const AltidaConfigurator = (
  targetId: string,
  config: InitConfig,
) => {
  const app = new App({
    target: document.getElementById(targetId),
    props: {
      config: {
        ...initConfig,
        ...config,
      },
    },
  });

  return app;
};

(window as any).AltidaConfigurator = AltidaConfigurator;
export default AltidaConfigurator;

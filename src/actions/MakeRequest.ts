import {
    Before,
    BeforeAll,
    AfterAll,
    Given,
    After,
    Status,
  } from "@cucumber/cucumber";
  import PlaywrightManager from "../helpers/playwright_manager";
  
  export const manager = new PlaywrightManager();
  let mainURL = '';
  
  Before({ tags: "@Ignore" }, async () => "skipped" as any);
  
  Before({ tags: '@crearGuia' }, async () => {
    mainURL = 'https://apiv2-test.coordinadora.com';
    await manager.initialize("chrome", mainURL);
  });
  
  Given("abre la pagina {string}", async (string) => {
    await manager.navigate(string);
  });
  
  BeforeAll(async () => { });
  
  After(async function (Scenario) {
    if (Scenario.result?.status === Status.FAILED) {
      const screenshotRoute: string = await manager.screenshot(
        `./report/${Scenario.pickle.id}.png`
      );
      this.attach(screenshotRoute, "image/png");
    }
    await manager.close();
  });
  
  AfterAll(async () => {
    await manager.close();
  });
  
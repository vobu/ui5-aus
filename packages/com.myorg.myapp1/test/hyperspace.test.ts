/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { WDI5Control } from "wdio-ui5-service/dist/lib/wdi5-control"

/* eslint-disable @typescript-eslint/no-unsafe-call */
describe("suite name", () => {
  it("test description", async () => {
    const inputSelector = {
      selector: {
        controlType: "sap.ui.webc.main.Input",
        viewName: "com.myorg.myapp1.view.Main",
        viewId: "com.myorg.myapp1::TargetMain",
        bindingPath: {
          path: "",
          propertyPath: "/clicks",
          modelName: "viewModel"
        }
      }
    }
    const input = await browser.asControl(inputSelector)

    const result = await input.exec(() => {
      const Config = sap.ui.getCore().getConfiguration()
      Config.setRTL(true)
      Config.setLanguage("ar-SA")
      return true
    })

    expect(result).not.toBe(undefined)
  })
})

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
					modelName: "viewModel",
				},
			},
		};
		const value = await browser.asControl(inputSelector).getValue();
		expect(value).toEqual("0");

		await browser
			.asControl({
				selector: {
					controlType: "sap.ui.webc.main.Button",
					viewName: "com.myorg.myapp1.view.Main",
					viewId: "com.myorg.myapp1::TargetMain",
					i18NText: {
						propertyName: "text",
						key: "btnText",
					},
				},
			})
			.press();

		const valueAfterClick = await browser.asControl(inputSelector).getValue();

		expect(valueAfterClick).toEqual("1");
	});
});

import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import formatter from "../model/formatter";

/**
 * @namespace com.myorg.myapp1.controller
 */
export default class Main extends BaseController {
	private formatter = formatter;

	sayHello() : void {
		MessageBox.show("Hello World!");
	}

	onAddTableItem(): void {
        this.getView().byId("macroTable").getAggregation("content").getAggregation("_content").getBinding("items").create({
            FirstName: "Peter",
            LastName: "Parker"
        })
    }

}

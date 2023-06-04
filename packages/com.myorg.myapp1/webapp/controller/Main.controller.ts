import BaseController from "./BaseController"
import formatter from "../model/formatter"

/**
 * @namespace com.myorg.myapp1.controller
 */
export default class Main extends BaseController {
  private formatter = formatter

  sayHello(): void {
    this.uiModelData.clicks++
  }

  onAddTableItem(): void {
    this.getView()
      .byId("macroTable")
      .getAggregation("content")
      .getAggregation("_content")
      .getBinding("items")
      .create({
        name: "Little Creature's Pale Ale",
        ibu: 15,
        abv: 4.7
      })
  }
}

import Controller from "sap/fe/core/PageController"
import AppComponent from "../Component"
import ResourceModel from "sap/ui/model/resource/ResourceModel"
import ResourceBundle from "sap/base/i18n/ResourceBundle"

/**
 * @namespace com.myorg.myapp1.controller
 */
export default abstract class BaseController extends Controller {
  uiModelData: any

  onInit(): void {
    super.onInit()
    // requires manifest => observe=true!
    // -> only properties are allowed to be changed, no object/array refs!
    this.uiModelData = this.getAppComponent().getModel("viewModel").getData()
  }
  /**
   * Convenience method for accessing the component of the controller's view.
   * @returns The component of the controller's view
   */
  public getOwnerComponent(): AppComponent {
    return super.getOwnerComponent() as AppComponent
  }

  /**
   * Convenience method for getting the i18n resource bundle of the component.
   * @returns The i18n resource bundle of the component
   */
  public getResourceBundle(): ResourceBundle | Promise<ResourceBundle> {
    const oModel = this.getOwnerComponent().getModel("i18n") as ResourceModel
    return oModel.getResourceBundle()
  }
}

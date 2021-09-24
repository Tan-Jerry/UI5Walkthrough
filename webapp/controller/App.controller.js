sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	const theClass = Controller.extend("learning.App", {});

	// theClass.prototype.onInit = function() {
	// 	let oData = {
	// 		recipient: {
	// 			name: "World"
	// 		}
	// 	};
	// 	let oModel = new JSONModel(oData);
	// 	this.getView().setModel(oModel);

	// 	let i18nModel = new ResourceModel({
	// 		bundleName: "sap.ui.learning.i18n.i18n"
	// 	});
	// 	this.getView().setModel(i18nModel, "i18n");
	// };

	theClass.prototype.onShowHello = function() {
		let oBundle = this.getView().getModel("i18n").getResourceBundle();
		let sRecipient = this.getView().getModel().getProperty("/recipient/name");
		let sMsg = oBundle.getText("helloMsg", [sRecipient]);
		MessageToast.show(sMsg);
	};

	return theClass;
})
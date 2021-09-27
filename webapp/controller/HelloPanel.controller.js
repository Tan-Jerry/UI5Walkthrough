sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	'use strict';
	const theClass = Controller.extend("sap.ui.learning.controller.HelloPanel", {});

	theClass.prototype.onShowHello = function() {
		let oBundle = this.getView().getModel("i18n").getResourceBundle();
		let sRecipient = this.getView().getModel().getProperty("/recipient/name");
		let sMsg = oBundle.getText("helloMsg", [sRecipient]);
		MessageToast.show(sMsg);
	};

	return theClass;
});
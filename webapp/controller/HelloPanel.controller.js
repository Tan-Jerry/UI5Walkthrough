sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment"
], function(Controller, MessageToast, Fragment) {
	'use strict';
	const theClass = Controller.extend("sap.ui.learning.controller.HelloPanel", {});

	theClass.prototype.onShowHello = function() {
		let oBundle = this.getView().getModel("i18n").getResourceBundle();
		let sRecipient = this.getView().getModel().getProperty("/recipient/name");
		let sMsg = oBundle.getText("helloMsg", [sRecipient]);
		MessageToast.show(sMsg);
	};

	theClass.prototype.onOpenDialog = function() {
		if (!this.pDialog) {
			this.pDialog = this.loadFragment({
				name: "sap.ui.learning.view.HelloDialog"
			})
		}

		this.pDialog.then(function (oDialog) {
			oDialog.open();
		});
	};

	theClass.prototype.onCloseDialog = function () {
		this.byId("helloDialog").close();
	}

	return theClass;
});
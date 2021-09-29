sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast"
], function (Controller, History, MessageToast) {
	"use strict";
	const theClass = Controller.extend("sap.ui.learning.controller.Detail", {});

	theClass.prototype.onInit = function () {
		var oRouter = this.getOwnerComponent().getRouter();
		oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
	}

	theClass.prototype._onObjectMatched = function (oEvent) {
		this.byId("rating").reset();
		this.getView().bindElement({
			path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
			model: "invoice"
		});
	}

	theClass.prototype.onNavBack = function() {
		var oHistory = History.getInstance();
		var sPreviousHash = oHistory.getPreviousHash();

		if (sPreviousHash !== undefined) {
			window.history.go(-1);
		} else {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("overview", {}, true);
		}
	};

	theClass.prototype.onRatingChange = function(oEvent) {
		var fValue = oEvent.getParameter("value");
		var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

		MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fValue]));
	}
	return theClass;
});
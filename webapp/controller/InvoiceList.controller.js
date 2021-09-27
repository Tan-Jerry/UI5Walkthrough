sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	'use strict';

	const theClass = Controller.extend("sap.ui.learning.controller.InvoiceList", {});

	theClass.prototype.onInit = function() {
		let oViewModel = new JSONModel({
			currency: "CNY"
		})

		this.getView().setModel(oViewModel, "view");
	};

	return theClass;
});
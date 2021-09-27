sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter"
], function(Controller, JSONModel, formatter) {
	'use strict';

	const theClass = Controller.extend("sap.ui.learning.controller.InvoiceList", {
		formatter: formatter
	});

	theClass.prototype.onInit = function() {
		let oViewModel = new JSONModel({
			currency: "CNY"
		})

		this.getView().setModel(oViewModel, "view");
	};

	return theClass;
});
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, JSONModel, formatter, Filter, FilterOperator) {
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

	theClass.prototype.onFilterInvoices = function(oEvent) {
			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
	};

	theClass.prototype.onPress = function(oEvent) {
		var oRouter = this.getOwnerComponent().getRouter();
		oRouter.navTo("detail");
	}

	return theClass;
});
sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function(UIComponent, JSONModel) {
	"use strict";

	const theClass = UIComponent.extend("sap.ui.learning.Component", {
		metadata: {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
		}
	});

	theClass.prototype.init = function () {
		UIComponent.prototype.init.apply(this, arguments);

		const oData = {
			recipient: {
				name: "World"
			}
		};
		let oModel = new JSONModel(oData);
		this.setModel(oModel);
	};

	return theClass;
})
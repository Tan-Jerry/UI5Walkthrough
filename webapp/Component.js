sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(UIComponent, JSONModel, ResourceModel) {
	"use strict";

	const theClass = UIComponent.extend("sap.ui.learning.Component", {
		metadata: {
			"interfaces": ["sap.ui.core.IAsyncContentCreation"],
			"rootView": {
			   "viewName": "sap.ui.learning.view.App",
			   "type": "XML",
			   /*"async": true, // implicitly set via the sap.ui.core.IAsyncContentCreation interface*/
			   "id": "app"
			}
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

		let i18nModel = new ResourceModel({
			bundleName: "sap.ui.learning.i18n.i18n"
		});
		this.setModel(i18nModel, "i18n");
	};

	return theClass;
})
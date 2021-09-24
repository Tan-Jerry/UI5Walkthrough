sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function(ComponentContainer){
	"use strict";

	// XMLView.create({
	// 	viewName: "sap.ui.learning.view.App"
	// }).then(function (oView) {
	// 	oView.placeAt("content");
	// });
	new ComponentContainer({
		name: "sap.ui.learning",
		settings: {
			id: "learning"
		},
		async: true
	}).placeAt("content");
});
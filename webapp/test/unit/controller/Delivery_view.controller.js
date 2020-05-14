/*global QUnit*/

sap.ui.define([
	"Display/outBound_Delivery/controller/Delivery_view.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Delivery_view Controller");

	QUnit.test("I should test the Delivery_view controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
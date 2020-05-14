/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Display/outBound_Delivery/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
sap.ui.define(["./BaseController",
		"sap/ui/model/json/JSONModel",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
		"sap/m/UploadCollectionParameter",
		"sap/m/MessageToast",
		"sap/m/MessageBox",
		"./messages",
		"sap/m/library",
		"sap/ui/export/Spreadsheet"
	],
	function (BaseController, JSONModel, Filter, FilterOperator, UploadCollectionParameter, MessageToast, MessageBox, messages, MobileLibrary,Spreadsheet) {
		"use strict";
		return BaseController.extend("Display.outBound_Delivery.controller.Delivery_view", {
			onInit: function () {
				this._JSONModel = this.getModel();
			},
			handleSearch: function () {
				this.setBusy(true);
				var aFilters = [];
				var Sel = this._JSONModel.getProperty("/Sel");
				if (Sel.SalesOrganizationS !== "" & Sel.SalesOrganizationE === "") {
					var oFilter1 = new sap.ui.model.Filter("SalesOrganization", sap.ui.model.FilterOperator.EQ, Sel.SalesOrganizationS);
					aFilters.push(oFilter1);
				}
				if (Sel.SalesOrganizationS === "" & Sel.SalesOrganizationE !== "") {
					var oFilter1 = new sap.ui.model.Filter("SalesOrganization", sap.ui.model.FilterOperator.EQ, Sel.SalesOrganizationE);
					aFilters.push(oFilter1);
				}
				if (Sel.SalesOrganizationS !== "" & Sel.SalesOrganizationE !== "") {
					var oFilter1 = new sap.ui.model.Filter("SalesOrganization", sap.ui.model.FilterOperator.BT, Sel.SalesOrganizationS, Sel.SalesOrganizationE);
					aFilters.push(oFilter1);
				}

				if (Sel.DeiveryS !== "" & Sel.DeiveryE === "") {
					var oFilter2 = new sap.ui.model.Filter("DeliveryDocument", sap.ui.model.FilterOperator.EQ, Sel.DeiveryS);
					aFilters.push(oFilter2);
				}
				if (Sel.DeiveryS === "" & Sel.DeiveryE !== "") {
					var oFilter2 = new sap.ui.model.Filter("DeliveryDocument", sap.ui.model.FilterOperator.EQ, Sel.DeiveryE);
					aFilters.push(oFilter2);
				}
				if (Sel.DeiveryS !== "" & Sel.DeiveryE !== "") {
					var oFilter2 = new sap.ui.model.Filter("DeliveryDocument", sap.ui.model.FilterOperator.BT, Sel.DeiveryS, Sel.DeiveryE);
					aFilters.push(oFilter2);
				}

				if (Sel.DeliveryDateS !== "" & Sel.DeliveryDateE === "") {
					var oFilter3 = new sap.ui.model.Filter("DeliveryDate", sap.ui.model.FilterOperator.EQ, this.date(Sel.DeliveryDateS));
					aFilters.push(oFilter3);
				}
				if (Sel.DeliveryDateS === "" & Sel.DeliveryDateE !== "") {
					var oFilter3 = new sap.ui.model.Filter("DeliveryDate", sap.ui.model.FilterOperator.EQ, this.date(Sel.DeliveryDateE));
					aFilters.push(oFilter3);
				}
				if (Sel.DeliveryDateS !== "" & Sel.DeliveryDateE !== "") {
					var oFilter3 = new sap.ui.model.Filter("DeliveryDate", sap.ui.model.FilterOperator.BT, this.date(Sel.DeliveryDateS), this.date(Sel
						.DeliveryDateE));
					aFilters.push(oFilter3);
				}

				// if (Sel.DeliveryDateS !== "" & Sel.DeliveryDateE === "") {
				// 	var oFilter3 = new sap.ui.model.Filter("ActualGoodsMovementDate", sap.ui.model.FilterOperator.EQ, Sel.DeliveryDateS);
				// 	aFilters.push(oFilter3);
				// }
				// if (Sel.DeliveryDateS === "" & Sel.DeliveryDateE !== "") {
				// 	var oFilter3 = new sap.ui.model.Filter("ActualGoodsMovementDate", sap.ui.model.FilterOperator.EQ, Sel.DeliveryDateE);
				// 	aFilters.push(oFilter3);
				// }
				// if (Sel.DeliveryDateS !== "" & Sel.DeliveryDateE !== "") {
				// 	var oFilter3 = new sap.ui.model.Filter("ActualGoodsMovementDate", sap.ui.model.FilterOperator.BT, Sel.DeliveryDateS, Sel.DeliveryDateE);
				// 	aFilters.push(oFilter3);
				// }
				if (Sel.CustomerS !== "" & Sel.CustomerE === "") {
					var oFilter4 = new sap.ui.model.Filter("SoldToParty", sap.ui.model.FilterOperator.EQ, Sel.CustomerS);
					aFilters.push(oFilter4);
				}
				if (Sel.CustomerS !== "" & Sel.CustomerE !== "") {
					var oFilter4 = new sap.ui.model.Filter("SoldToParty", sap.ui.model.FilterOperator.BT, Sel.CustomerS, Sel.CustomerE);
					aFilters.push(oFilter4);
				}
				if (Sel.CustomerS === "" & Sel.CustomerE !== "") {
					var oFilter4 = new sap.ui.model.Filter("SoldToParty", sap.ui.model.FilterOperator.EQ, Sel.CustomerE);
					aFilters.push(oFilter4);
				}

				if (Sel.MaterialS !== "" & Sel.MaterialE === "") {
					var oFilter5 = new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.EQ, Sel.MaterialS);
					aFilters.push(oFilter5);
				}
				if (Sel.MaterialS === "" & Sel.MaterialE !== "") {
					var oFilter5 = new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.EQ, Sel.MaterialE);
					aFilters.push(oFilter5);
				}
				if (Sel.MaterialS !== "" & Sel.MaterialE !== "") {
					var oFilter5 = new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.BT, Sel.MaterialS, Sel.MaterialE);
					aFilters.push(oFilter5);
				}

				// if (Sel.CompanyCodeS !== "" & Sel.CompanyCodeE === "") {
				// 	var oFilter3 = new sap.ui.model.Filter("CompanyCode", sap.ui.model.FilterOperator.EQ, Sel.CompanyCodeS);
				// 	aFilters.push(oFilter3);
				// }
				// if (Sel.CompanyCodeS === "" & Sel.CompanyCodeE !== "") {
				// 	var oFilter3 = new sap.ui.model.Filter("CompanyCode", sap.ui.model.FilterOperator.EQ, Sel.CompanyCodeE);
				// 	aFilters.push(oFilter3);
				// }
				// if (Sel.CompanyCodeS !== "" & Sel.CompanyCodeE !== "") {
				// 	var oFilter3 = new sap.ui.model.Filter("CompanyCode", sap.ui.model.FilterOperator.BT, Sel.CompanyCodeS, Sel.CompanyCodeE);
				// 	aFilters.push(oFilter3);
				// }
				var mParameters = {
					filters: aFilters,
					success: function (oData) {
						var Arry = !oData ? [] : oData.results;
						if (Arry.length === 0) {
							MessageToast.show("查詢無數據！");
							this.setBusy(false);
							return;
						}
						var DeliveryFilter = [];
						var sFilters = [];
						for (var i = 0; i < Arry.length; i++) {
							if (Arry[i].DeliveryDocument !== "") {
								DeliveryFilter.push(new Filter({
									path: "DeliveryDocument",
									operator: FilterOperator.EQ,
									value1: Arry[i].DeliveryDocument
								}));
							}
						}
						if (DeliveryFilter.length > 0) {
							sFilters.push(new Filter({
								filters: DeliveryFilter,
								and: false
							}));
						}
						this.getSerialNumber(sFilters);
						this._JSONModel.setProperty("/DeliveryList1", Arry);
					}.bind(this),
					error: function (oError) {
						MessageToast.show("查詢無數據！");
						this.setBusy(false);
						return;
					}.bind(this)
				};
				this.getModel("OUTDELIVERY").read("/YY1_OUTDELIVERY", mParameters);
			},
			// A_OutbDeliveryHeader('80000046')/to_DeliveryDocumentItem?$expand=to_SerialDeliveryItem/to_MaintenanceItemObject
			getSerialNumber: function (sFilters) {
				this.setBusy(true);
				//var sUrl = "/A_OutbDeliveryHeader('" + Arry1.DeliveryDocument + "')/to_DeliveryDocumentItem?$expand=to_SerialDeliveryItem/to_MaintenanceItemObject";
				// var sUrl = "/A_OutbDeliveryHeader('80000046')/to_DeliveryDocumentItem?$expand=to_SerialDeliveryItem/to_MaintenanceItemObject";
				var mParameters = {
					filters: sFilters,
					urlParameters: {
						"$expand": "to_DeliveryDocumentItem/to_SerialDeliveryItem/to_MaintenanceItemObject",
						"select": "DeliveryDocument"
					},
					success: function (oData, response) {
						if (response.statusCode === "200") {
							var SerialDeliveryItem = [];
							var Arry = !oData ? [] : oData.results;
							var DeliveryList1 = this._JSONModel.getData().DeliveryList1;
							for (var i = 0; i < Arry.length; i++) {
								if (Arry[i].to_DeliveryDocumentItem.results) {
									for (var n = 0; n < Arry[i].to_DeliveryDocumentItem.results.length; n++) {
										if (Arry[i].to_DeliveryDocumentItem.results[n].to_SerialDeliveryItem) {
											SerialDeliveryItem.push(Arry[i].to_DeliveryDocumentItem.results[n].to_SerialDeliveryItem);
										}
									}
									// DocumentItem.push(Arry[i].to_DeliveryDocumentItem.results);
								}
							}
							var DeliveryList = [];
							var serialList = [];
							for (var s = 0; s < SerialDeliveryItem.length; s++) {
								if (SerialDeliveryItem[s].to_MaintenanceItemObject) {
									var Object = SerialDeliveryItem[s].to_MaintenanceItemObject.results;
									for (var r = 0; r < Object.length; r++) {
										if (SerialDeliveryItem[s].MaintenanceItemObjectList === Object[r].MaintenanceItemObjectList) {
											Object[r].DeliveryDocument = SerialDeliveryItem[s].DeliveryDocument;
											Object[r].DeliveryDocumentItem = SerialDeliveryItem[s].DeliveryDocumentItem;
											serialList.push(Object[r]);
										}
									}
								}
							}
							for (var m = 0; m < serialList.length; m++) {
								for (var y = 0; y < DeliveryList1.length; y++) {
									if (serialList[m].DeliveryDocument === DeliveryList1[y].DeliveryDocument & serialList[m].DeliveryDocumentItem ===
										DeliveryList1[y].DeliveryDocumentItem) {
										serialList[m].ActualGoodsMovementDate = DeliveryList1[y].ActualGoodsMovementDate;
										serialList[m].SoldToParty = DeliveryList1[y].SoldToParty;
										serialList[m].BusinessPartnerName = DeliveryList1[y].BusinessPartnerName;
										serialList[m].Material = DeliveryList1[y].Material;
										serialList[m].DeliveryDocumentItemText = DeliveryList1[y].DeliveryDocumentItemText;
										serialList[m].ProductConfiguration = DeliveryList1[y].ProductConfiguration;
										serialList[m].SalesOrganization = DeliveryList1[y].SalesOrganization;
										serialList[m].PurchaseOrderByCustomer = DeliveryList1[y].PurchaseOrderByCustomer;
										serialList[m].DeliveryDate = DeliveryList1[y].DeliveryDate;
									}

								}
							}
							// for (var m = 0; m < DeliveryList1.length; m++) {
							// 	var list = DeliveryList1[m];
							// 	for (var j = 0; j < SerialDeliveryItem.length; j++) {
							// 		if (DeliveryList1[i].DeliveryDocument === SerialDeliveryItem[j].DeliveryDocument & DeliveryList1[i].DeliveryDocumentItem ===
							// 			SerialDeliveryItem[j].DeliveryDocumentItem) {
							// 			var ObjectItem = SerialDeliveryItem[j].to_MaintenanceItemObject.results;
							// 			for (var g = 0; g < ObjectItem.length; g++) {
							// 				if (SerialDeliveryItem[j].MaintenanceItemObjectList === ObjectItem[g].MaintenanceItemObjectList) {
							// 					list.SerialNumber = ObjectItem[g].SerialNumber;
							// 					DeliveryList.push(list);
							// 				}

							// 			}
							// 		}
							// 	}

							// }

							this._JSONModel.setProperty("/DeliveryList", serialList);
							// for (var n = 0; n < DocumentItem.length; n++) {
							// 	if (Arry[n].to_DeliveryDocumentItem.results) {
							// 		DocumentItem.push(Arry[n].to_DeliveryDocumentItem.results);
							// 	}
							// }
						}
						this.setBusy(false);
					}.bind(this),
					error: function (oError) {
						this.setBusy(false);
					}.bind(this)
				};
				this.getModel("API_OUTBOUND_DELIVERY_SRV").read("/A_OutbDeliveryHeader", mParameters);
			},
			date: function (value) {
				if (value) {
					var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
						pattern: "yyyy-MM-dd"
					});
					return oDateFormat.format(new Date(value));
				} else {
					return value;
				}
			},
			handleDownload: function () {
				var aCols = [];
				var aCol; // 根据id值获取table 
				var oTable = this.getView().byId("DisplayTable"); // 获取table的绑定路径
				var sPath = oTable.getBindingPath("rows"); // 根据路径获取到数据源
				var excelSet = this._JSONModel.getProperty(sPath) ? this._JSONModel.getProperty(sPath) : [];
				// 如果没有数据则报错并return
				if (excelSet.length == 0) {
					messages.showText("没有可以导出的数据");
					return;
				}
				for(var i=0;i<excelSet.length;i++){
					excelSet[i].DeliveryDate = this.date(excelSet[i].DeliveryDate);
					excelSet[i].ActualGoodsMovementDate = this.date(excelSet[i].ActualGoodsMovementDate);
				}
				// 获取table列的集合
				var columns = oTable.getColumns();
				// 循环columns设置excel抬头的相关参数
				for (var i = 0; i < columns.length; i++) {
					if (columns[i].getVisible()) {
						aCol = {
							// 获取表格的列名，即设置excel的抬头
							label: columns[i].getAggregation("label").getText(),
							// 数据类型，即设置excel该列的数据类型
							type: 'string',
							// 获取数据的绑定路径，即设置excel该列的字段路径
							property: columns[i].getAggregation("template").getBindingPath("text"),
							// 获取表格的width属性，即设置excel该列的长度
							width: parseFloat(columns[i].getWidth())
						};
						aCols.push(aCol);
					}
				}
				// 设置excel的相关属性
				var oSettings = {
					workbook: {
						columns: aCols,
						context: {
							application: 'Debug Test Application',
							version: '1.54',
							title: 'Some random title',
							modifiedBy: 'John Doe',
							metaSheetName: 'Custom metadata',
							hierarchyLevel: 'level'
						}
					},
					dataSource: excelSet,
					// 传入参数，数据源
					fileName: "出货报表.xlsx" // 文件名，需要加上后缀
				};
				new Spreadsheet(oSettings).build().then(function () {
					messages.showText("Excel 导出完毕 !");
				});

			}
		});
	});
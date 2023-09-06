sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    /**

     * @param {typeof sap.ui.core.mvc.Controller} Controller

     */
    function(Controller) {
      "use strict";
  
      return Controller.extend("customer.zlomansernum.zlomansernum.controller.Listado", {
        onInit() {
        },
        onFiltrar: function(oEvent){
          var aFilterLoteValue = this.getView().byId("idFilterLote").getValue();
          var aFilterInspectorValue = this.getView().byId("idFilterInspector").getValue();
          var aFilterFechaValue = this.getView().byId("idFilterFecha").getValue();
          var aFilterCodigoValue = this.getView().byId("idFilterCodigo").getValue();
          var aFilterdescripcionValue = this.getView().byId("idFilterDescripcion").getValue();
          var aFilterNumeroValue = this.getView().byId("idFilterNumero").getValue();
          var aFilterNumeroValue = this.getView().byId("idFilterPresentacion").getValue();
          var aFilterNumeroValue = this.getView().byId("idFilterCoordinacion").getValue();

          var aFilter = [];
          if(aFilterLoteValue=!""){
            aFilter.push(new Filter({
              path: "Lote",
              operator: "EQ",
              value1: aFilterLoteValue
            }));
          }

          if(aFilterInspectorValue=!""){
            aFilter.push(new Filter({
              path: "Inspector",
              operator: "EQ",
              value1: aFilterInspectorValue
            }));
          }

          if(aFilterFechaValue=!""){
            aFilter.push(new Filter({
              path: "Fecha",
              operator: "EQ",
              value1: aFilterFechaValue
            }));
          }

          if(aFilterCodigoValue=!""){
            aFilter.push(new Filter({
              path: "Codigo",
              operator: "EQ",
              value1: aFilterCodigoValue
            }));
          }

          if(aFilterDescripcionValue=!""){
            aFilter.push(new Filter({
              path: "Descripcion",
              operator: "EQ",
              value1: aFilterDescripcionValue
            }));
          }

          if(aFilterNumeroValue=!""){
            aFilter.push(new Filter({
              path: "Numeroserie",
              operator: "EQ",
              value1: aFilterNumeroValue
            }));
          }
          
          if(aFilterPresentacionValue=!""){
            aFilter.push(new Filter({
              path: "Lote",
              operator: "EQ",
              value1: aFilterPresentacionValue
            }));
          }

          if(aFilterCoordinacionValue=!""){
            aFilter.push(new Filter({
              path: "Lote",
              operator: "EQ",
              value1: aFilterLoteValue
            }));
          }
          
          this.getView().getModel().read("/SerieDataSet", {
            filters: aFilter,
            success: function (oData, oResponse) {
                if (oData.results && oData.results.length>0) {
                  that.getView().getModel("global").setProperty("/Registros", oMaterialesData);
                }
              },
            error: function () {
              MessageToast.show(i18n.getText("error"));
            }
          });
        }
      });
    }
  );
  
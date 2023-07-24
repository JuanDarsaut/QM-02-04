sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("zapp.controller.QM-02-04", {
            onInit: function () {

            },

        onFiltrar: function(oEvent){
            var aFilterLoteTokens = this.getView().byId("idFilterLote").getTokens();
            var aFilterInspectorTokens = this.getView().byId("idFilterInspector").getTokens();
            var aFilterFechaTokens = this.getView().byId("idFilterFecha").getTokens();
            var aFilterCodigoTokens = this.getView().byId("idFilterCodigo").getTokens();
            var aFilterdescripcionTokens = this.getView().byId("idFilterDescripcion").getTokens();
            var aFilterNumeroTokens = this.getView().byId("idFilterNumero").getTokens();
        }
        });
    });
// IMPORTO REACTIVE DA VUE
import { reactive } from "vue";

// ESPORTO LA CONSTANTE STORE CONTENENTE TUTTI GLI ELEMENTI ACCESSIBILI AD OGNI COMPONENTE VUE
export const store = reactive({

    baseUrl: 'http://localhost:8000',
    loading: true,

});
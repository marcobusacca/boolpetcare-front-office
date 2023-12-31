import { createRouter, createWebHistory } from 'vue-router';

// IMPORTARE TUTTE LE PAGINE DALLA CARTELLA "PAGES"
import HomePage from './pages/HomePage.vue';
import Contacts from './pages/Contacts.vue';
import ThankYou from './pages/ThankYou.vue';
import NotFound from './pages/NotFound.vue';

// CREIAMO IL ROUTER CON LE SUE ROTTE
const router = createRouter({

    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts,
        },
        {
            path: '/thank-you',
            name: 'thank-you',
            component: ThankYou,
        },
        {
            path: '/:catchAll(.*)',
            redirect: '/pagina-non-trovata',
        },
        {
            path: '/pagina-non-trovata',
            name: 'not-found',
            component: NotFound,
        },
    ]

})

// ESPORTIAMO IL ROUTER
export { router }
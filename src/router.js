import { createRouter, createWebHistory } from 'vue-router';

// IMPORTARE TUTTE LE PAGINE DALLA CARTELLA "PAGES"
import HomePage from './pages/HomePage.vue';
import Contacts from './pages/Contacts.vue';
import ThankYou from './pages/ThankYou.vue';

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
    ]

})

// ESPORTIAMO IL ROUTER
export { router }
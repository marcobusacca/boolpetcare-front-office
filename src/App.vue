<!-- JAVASCRIPT & VUE.JS -->
<script>
import { store } from '../store';

import AppHeader from './components/AppHeader.vue';

export default {
    components: {
        AppHeader,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
    <AppHeader/>
    <main>
        <router-view></router-view>
    </main>
</template>

<!-- STYLE SCSS -->
<style lang="scss">
// IMPORTO GENERALS.SCSS
@use './styles/generals.scss' as *;
</style>
<!-- JAVASCRIPT & VUE.JS -->
<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    components: {
        AppHeader,
        AppFooter,
    },
    data() {
        return {

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
    <AppFooter/>
</template>

<!-- STYLE SCSS -->
<style lang="scss">
// IMPORTO GENERALS.SCSS
@use './styles/generals.scss' as *;

main {
    min-height: 100vh;
}
</style>
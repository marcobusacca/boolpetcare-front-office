<!-- JAVASCRIPT & VUE.JS -->
<script>
import ContactForm from '../components/ContactForm.vue';

export default {
    components: {
        ContactForm,
    }
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
    <div class="container mb-5">
        <div class="row">
            <ContactForm/>
        </div>
    </div>
</template>

<!-- STYLE SCSS -->
<style lang="scss">
// IMPORTO GENERALS.SCSS
@use '../styles/generals.scss' as *;
</style>
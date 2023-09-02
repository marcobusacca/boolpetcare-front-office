<!-- JAVASCRIPT & VUE.JS -->
<script>
export default {
    data() {
        return {
            menuItems: [
                {
                    label: 'Home',
                    routeName: 'home',
                },
                {
                    label: 'Contatti',
                    routeName: 'contacts',
                },
            ]
        }
    },
}
</script>

<!-- TEMPLATE HTML -->
<template lang="">
    <footer>
        <section class="container-fluid p-3 bg-dark">
            <div class="container my-3">
                <div class="row">
                    <div class="col-12">
                        <div class="content-footer text-center text-white my-3 fs-7">
                            <p class="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam tempora vero natus aspernatur, quaerat, omnis et quibusdam repudiandae exercitationem. Illo?</p>
                            <p class="">Lorem ipsum <span><a class="text-white" href="">dolor et amen</a></span> dolor sit amet consectetur adipisicing elit.</p>
                            <p class="">© Low Quality Software 2023. <span><a class="text-white" href="">Privacy Policy</a></span></p>
                        </div>
                    </div>                        
                </div>
            </div>
        </section>
    </footer>
</template>

<!-- STYLE SCSS -->
<style lang="scss">
// IMPORTO GENERALS.SCSS
@use '../styles/generals.scss' as *;
</style>
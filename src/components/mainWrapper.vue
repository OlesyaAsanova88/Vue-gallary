<template>
    <div class="main-wrapper">
      <catalog></catalog>
        <cart-box 
        v-if="CART.length"
        :cart_data="CART"
        ></cart-box>
    </div>
</template>

<script>
    import Catalog from './Catalog.vue';
    import CartBox from './CartBox.vue';
    import { mapGetters } from 'vuex';

export default {
    name: 'mainWrapper',
    components: {
       Catalog,
       CartBox
    },
    props: {},
    data() {
        return {
            
        }
    },
    computed:{
        ...mapGetters([
        'CART'
        ])
    },
    methods:{},
    watch:{},
    mounted(){
    }
}
</script>

<style scoped>
    .main-wrapper {
        font-family: 'Merriweather';
        max-width: 70%;
        height: 100vh;
        margin: 0 auto;
    }
</style>
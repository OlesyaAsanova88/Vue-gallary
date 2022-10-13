<template>
    <div class="cart-box">
        <h1>Корзина</h1>
        <cart-box-item
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
        ></cart-box-item>
    </div>
</template>

<script>
    import CartBoxItem from './CartBoxItem.vue'
    import { mapActions } from 'vuex'

export default {
    name: 'CartBox',
    components: {
        CartBoxItem
    },
    props: {
        cart_data: {
            type:Array,
            default() {
                return[]
            }
        }
    },
    data() {
        return {
            
        }
    },
    computed:{
        cartTotalCost() {
            let result = []

            if (this.cart_data.length) {
          for (let item of this.cart_data) {
            result.push(item.price * item.quantity)
          }
            result = result.reduce(function (sum, el) {
            return sum + el;
            })
            return result;
        } else {
            return 0
        }
            return result;
        }
    },
    methods:{
        ...mapActions([
            'DELETE_FROM_CART',
            'INCREMENT_CART_ITEM',
            'DECREMENT_CART_ITEM'
        ]),
        increment(index) {
        this.INCREMENT_CART_ITEM(index)
        },
        decrement(index) {
            this.DECREMENT_CART_ITEM(index)
        },
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index)
        }
    },
    watch:{},
    mounted(){
    }
}
</script>

<style scoped>
    .cart-box {
        margin-bottom: 100px;
    }
    
</style>
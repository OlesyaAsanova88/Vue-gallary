<template>
    <div class="cart-box-item">
        <img :src=" require('../assets/images/' + cart_item_data.image) " alt="">
        <div class="cart-item-info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
            <p>{{cart_item_data.painter}}</p>
        </div>
        <div class="cart-item-quantity">
            <p>Qty:</p>
            <span class="quantity__tools">
                <span class="quantity__btn" @click="decrementItem">-</span>
                {{cart_item_data.quantity}}
                <span class="quantity__btn" @click="incrementItem">+</span>
            </span>
        </div>
        <button
        class="cart-item-btn"
        @click="deleteFromCart"
        >Удалить</button>
    </div>
</template>

<script>
export default {
    name: 'CartBoxItem',
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return{}
            }
        }
    },
    data() {
        return {

        }
    },
    methods: {
        incrementItem() {
            this.$emit('increment')
        },
        decrementItem() {
            this.$emit('decrement')
        },
        deleteFromCart() {
            this.$emit('deleteFromCart')
        }
    },
    mounted() {
       
    }
}
</script>

<style scoped>
    .cart-box-item {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 8px 0 #e0e0e0;
        margin: 16px;
        padding: 16px;
    }

    .cart-item-btn {
        font-weight: 700;
        padding: 8px 30px;
        border: 2px solid rgb(146, 95, 76);
        color: rgb(72, 46, 37);
        border-radius: 4px;
        background-color: rgb(163, 132, 118);
    }

    .quantity__btn {
        cursor: pointer;
    }
    .quantity__tools {
        user-select: none;
    }

</style>
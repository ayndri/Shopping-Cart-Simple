<template>

    <div v-if="!cart.length" class="alert alert-secondary" role="alert">
        No product in cart
    </div>
    <div v-if="orderPlaced" class="alert alert-success" role="alert">
        Order successfully placed. You have to pay Rp {{ pay.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.") }}
        <button
        type="button"
        class="close"
        data-dismiss="modal"
        aria-label="Close"
        @click="() => (orderPlaced = false)">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>

    <div class="shopping-cart">

        <div class="title" v-if="cart.length">
            Shopping Bag
        </div>


        <div class="item" v-for="item in cart" :key="item.id">
            <div @click="removeItem(item.id)" class="buttons">
                <span class="delete-btn"></span>
            </div>

            <div class="image">
                <img :src="item.img" :alt="item.name" />
            </div>

            <div class="description">
                <span>{{ item.name }}</span>
            </div>

            <div class="quantity">
                <button v-if="item.stock != item.qty" @click="addQty(item.id)" class="plus-btn" type="button" name="button">
                    <img src="https://designmodo.com/demo/shopping-cart/plus.svg" alt="" />
                </button>
                <input type="text" name="name" :value="item.qty">
                <button @click="reduceQty(item.id)" class="minus-btn" type="button" name="button">
                    <img src="https://designmodo.com/demo/shopping-cart/minus.svg" alt="" />
                </button>
            </div>

            <div class="total-price">Rp {{ item.price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.") }}</div>
        </div>
        <!-- <div class="total" v-if="cart.length">
            <div class="text">
                <span>Total</span>
            </div>
            <div class="harga">
                <span>{{ totalPrice }}</span>
            </div>
        </div> -->
        <button @click="placeOrder" class="w-100 btn-checkout btn-lg btn-success" v-if="cart.length"
            :disabled="isProcessing">
            <span v-if="!isProcessing">Checkout Rp {{ totalPrice.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.") }}</span>
            <div v-else class="spinner-border" role="status">
                <!-- <span class="sr-only">Loading...</span> -->
            </div>
        </button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            isProcessing: false,
            orderPlaced: false,
            pay: 0,
        }
    },
    computed: {
        ...mapGetters(["cart"]),
        totalPrice() {
            return this.cart.reduce((a, b) => a + b.qty * b.price, 0)
        }
    },
    methods: {
        ...mapActions(["addQty", "reduceQty", "removeItem", "emptyCart"]),
        placeOrder() {
            this.isProcessing = true;
            setTimeout(() => {
                this.orderPlaced = true;
                this.isProcessing = false;
                this.pay = this.cart.reduce((a, b) => a + b.qty * b.price, 0);
                this.emptyCart()
            }, 1000)
        }
    }
}

</script>
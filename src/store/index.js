// import Vue from 'vue';
import Vuex from 'vuex';
// import { createStore } from 'vuex'
import products from '../mock/products.json'

// Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    getters: {
        products: state => state.products,
        cart: state => state.cart
    },
    actions: {
        getProducts({ commit }) {
            commit("getProductData");
        },
        addToCart({commit}, item) {
            commit("addItemToCart", item);
        },
        addQty({ commit }, id) {
            commit("addQty", id)
        },
        reduceQty({ commit }, id) {
            commit("reduceQty", id)
        },
        removeItem({ commit }, id) {
            commit("removeItem", id)
        },
        emptyCart({ commit }) {
            commit("emptyCart")
        }
    },
    mutations: {
        getProductData(state) {
            state.products = products;
        },
        addItemToCart(state, item) {
            const addedItem = state.cart.find(product => product.id === item.id);
            if (addedItem) {
                addedItem.qty++
            } else {
                state.cart.push({ ...item, qty: 1})
            }

            const currentItem = state.products.find(product => product.id === item.id);
            currentItem.stock--
            
        },
        addQty(state, id) {
            const currentItem = state.cart.find(product => product.id === id);
            currentItem.qty++

            const itemProduct = state.products.find(product => product.id === id);
            itemProduct.stock--
        },
        reduceQty(state, id) {
            const currentItem = state.cart.find(product => product.id === id);
            if (currentItem.qty > 1) {
                currentItem.qty--
            } else {
                state.cart = state.cart.filter(product => product.id !== id);
            }

            const itemProduct = state.products.find(product => product.id === id);
            itemProduct.stock++
            
        },
        removeItem(state, id) {
            const currentItem = state.cart.find(product => product.id === id);
            const itemProduct = state.products.find(product => product.id === id);

            itemProduct.stock += currentItem.qty

            state.cart = state.cart.filter(product => product.id !== id);
        },
        emptyCart(state) {
            state.cart = [];
        }
    }
})
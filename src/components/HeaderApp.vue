<template>
    <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h3">Logo</span>
        <span class="navbar-brand mb-0 h3">Cart ({{ totalQty }})</span>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'HeaderApp',
    computed: {
        ...mapGetters(["cart"]),
        totalQty() {
            return this.cart.reduce((a,b) => a+b.qty, 0)
        }
    }
}
</script>
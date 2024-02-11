<template>
    <div class="row">
        <div class="col-md-3" v-for="item in products" :key="item.id">
            <div class="product-card">
		<div class="product-tumb">
			<img :src="item.img" 
            :alt=item.name>
		</div>
		<div class="product-details">
			<span class="product-catagory">Stock: {{ item.stock }}</span>
			<h4><a href="">{{ item.name }}</a></h4>
			<p>{{ item.description }}</p>
			<div class="product-bottom-details">
				<div class="product-price">Rp {{ item.price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.") }}</div>
				<div v-if="item.stock != 0" class="product-links">
					<a href="#" @click="addToCart(item)"><svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg></a>
				</div>
			</div>
		</div>
	</div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "ProductList",
    computed: {
        ...mapGetters(['products'])
    },
    methods: {
        ...mapActions((['getProducts', 'addToCart']))
    },
    mounted() {
        this.getProducts();
    }
}
</script>
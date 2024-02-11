<template>
  <div id="app" class="container">
    <HeaderApp />
    <div>
      <ProductList />
      <CartApp />
    </div>
    
  </div>
</template>

<script>
import HeaderApp from './components/HeaderApp.vue';
import ProductList from './components/ProductList.vue';
import CartApp from './components/CartApp.vue';

export default {
  name: 'App',
  components: {
    HeaderApp,
    ProductList,
    CartApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>

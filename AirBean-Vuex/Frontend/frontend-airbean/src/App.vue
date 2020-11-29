<template>
  <div id="app">
    
      <Nav v-if="showNavigation"/>
      <!--<Cart  :cartItem="cart" v-if="showCart" />
      <CartIcon /> -->              
    
    <router-view />
  </div>
</template>

<script>
import Nav from '@/components/Nav';
/*import Cart from '@/components/Cart';
import CartIcon from '@/components/CartIcon';*/
export default {
  name: 'App',
  components: {
    Nav
  },
  computed: {
    showNavigation() {
      return this.$store.state.showNavigation;
    },
    /*showCart() {
      return this.$store.state.showcart;
    },
    cart() {
      return this.$store.state.cart;
    }*/
  },

  beforeMount() {
    this.$store.dispatch('fetchMenu');
  }
}
</script>


<style lang="scss">
@import "./scss/main";
</style>


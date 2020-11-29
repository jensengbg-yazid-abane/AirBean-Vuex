<template>
  <main id="menuOptions">
    <Cart :cartItem='cart' v-if="showCart" />
    <section class="navButtons">
      <img
        @click="toggleMenu"
        class="navIcon"
        src="./../assets/graphics/navicon.png"
        alt="navIcon"
      />
      <aside class="orderCart" @click="toggleCart">
        <img src="./../assets/graphics/bag.png" alt="bag" />
        <aside class="cartItems">
          <p>{{ cartLength }}</p>
        </aside>
      </aside>
    </section>

    <h1>Meny</h1>

    <section class="options">
      <MenuItem v-for="item in menu" :key="item.id" :item="item" class="menuItems"/>
    </section>
    
  </main>
  
</template>

<script>

import MenuItem from '@/components/MenuItem';
import Cart from '@/components/Cart';


export default {
  name: 'menuOptions',

  components: {
    MenuItem,
    Cart
  },

  computed: {
    menu() {
      return this.$store.state.menu;
    },

    showCart() {
      return this.$store.state.showCart;
    },

    cart() {
      return this.$store.state.cart;
    },

    cartLength(){
  
  /* let total = 0;
      this.$store.state.cart.forEach(item => {
          total += item.quantity;
      });
      return total;*/
      return this.$store.getters.cartLengthNr;
    }
  },

  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu');
    },
    toggleCart() {
      this.$store.commit('toggleCart')
    },
  },
  created() { 
    {
      this.$store.dispatch('fetchMenu');
    }
  }
}
</script>

<style scoped lang="scss">
  #menuOptions {
    .navButtons {
      display: flex;
      justify-content: space-between;
      width: 100%;

        .navIcon {
          display: flex;
          align-self: flex-start;
          justify-content: flex-start;
        }

      .orderCart {
        width: 3.5rem;
        height: 3.5rem;
        background: #2f2926;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 999rem;

          .cartItems {
            position: absolute;
            width: 1.5rem;
            height: 1.5rem;
            background: #e5674e;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 999rem;
            color: #ffffff;
            margin-top: -3rem;
            margin-right: -2rem;
          }
      }
    }

  
  .options {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin: 5rem auto 10rem auto;

      .menuItems {
        display: flex;
        width: 90%;
        justify-content: center;
        align-items: center;
      }
  }

}

</style>
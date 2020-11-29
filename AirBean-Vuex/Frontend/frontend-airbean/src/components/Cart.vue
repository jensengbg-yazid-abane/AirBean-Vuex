<template>
  <div id="cart">
    <h2>Your Order</h2>
    <article v-for="(item,index) in cartItem" :key="index">
      <div class="options">
        <h3 class="item-title">{{ item.title }}</h3>
        <h4 class="item-dots"></h4>
        <div>
          <img
              src="./../assets/graphics/arrow-up.svg"
              alt="arrow up"
              @click.prevent="addItemToCart(item)"
          />
          <h6 class="item-quantity">{{ item.quantity }}</h6>
          <img
              src="./../assets/graphics/arrow-down.svg"
              alt="arrow down"
              @click.prevent="removeItemFromCart(item)"
          />
        </div>

      </div>

      <div class="price">
        <h6 class="item-price">{{ item.price }}:-</h6>
      </div>

      
    </article>
    <div class="totalPrice">
      <div>
          <h3 class="item-total">Total</h3>
          <h3 class="item-dots"></h3>
          <h3 class="item-cost">{{ totalCost }} kr</h3>
      </div>
      <p>include moms + drone delivery</p>
    </div>
    <button id="buy" @click="buyItems">Take my money!</button>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    cartItem: Array
  },

  methods: {
    addItemToCart(item) {
      this.$store.commit('addItemToCart', item);
    },

    removeItemFromCart(item) { 
      this.$store.commit('removeItemFromCart', item)
    },

    buyItems() {
      if(this.cartItem.length === 0) {
        alert('Your basket is empty')
      }
      else {
        this.$store.dispatch('orderItems');
        this.$router.push('/status');
        this.$store.commit('emptyTheCart')
      }
    }

  },
  computed: {

    totalCost() {
      let totalCost = 0;
      this.$store.state.cart.forEach( item => {
        totalCost += item.price * item.quantity;
      })
      return totalCost;
    },

  }
}
</script>

<style lang="scss">
#cart {
  position: fixed;
  z-index: 999;
  top: 5rem;
  background: #ffffff;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;

  article {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-bottom: 25px;

    .price {
      display: flex;
      justify-content: flex-start;
      
      .item-price {
        font-size: 18px;
      }
    }

    .options {
      display: flex;
      flex-direction: row;

      .item-dots {
        flex: 1;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        margin-bottom: 0.3rem;
      }

      div {
        display: flex;
        flex-direction: column;

        img {
          width: 0.7rem;
          height: 0.7rem;
        }
      }
    }
  }


  .totalPrice {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-top: 20px;

    div {
      display: flex;
      border-top:  3px solid #2f2926;
      flex-direction: row;
      padding-top: 10px;

      .item-dots {
        flex: 1;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        margin-bottom: 0.3rem;
      }
    }
  }

  #buy {
    width: 248px;
    height: 55px;
    background: #2f2926;
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #ffffff;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }
}
</style>
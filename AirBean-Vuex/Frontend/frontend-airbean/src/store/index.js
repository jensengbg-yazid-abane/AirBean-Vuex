import Vue from 'vue'
import Vuex from 'vuex'
import ax from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'http://localhost:8000',
    showNavigation: false,
    showCart: false,
    menu: Array,
    orders: [],
    order: {
      orderNumber: "",
      timeStamp: Date.now(),
      items: [],
      totalValue: 0
    },
    orderHistory: [],
    cart: [],
    showProfileForm: false,

  },

  mutations: {

    toggleMenu(state) {
      state.showNavigation = !state.showNavigation
    },

    toggleCart(state) {
      state.showCart = !state.showCart
    },

    showOptions(state, menu) {
      state.menu = menu.menu;
    },

    addToCart(state, product) {
      let cartItem = state.cart.find(item => item.id == product.id);

      if (cartItem) {
        cartItem.quantity++
        this.totalCost = (cartItem.quantity * cartItem.price)
      } 
      else
      {
        //else add to cart with quantity 1
        //product.quantity = 1;
        state.cart.push({
          id: product.id,
          price: product.price,
          title: product.title,
          quantity: 1
        });
      }
    },

    addItemToCart(state, product) {
      let cartItem = state.cart.find(item => item.id === product.id)
      if(cartItem) {
        cartItem.quantity++;
      }
    },

    removeItemFromCart(state, product) {
      let index = state.cart.findIndex(item => item.id === product.id)

      state.cart[index].quantity--;
      if (state.cart[index].quantity == 0) {
        state.cart.splice(index, 1);
      }   
  
    },

    orderConfirmed(state, order) {
      state.order = order.data
    },

    emptyTheCart(state) {
      state.cart = []
    },

  },

  actions: {
    async fetchMenu(ctx) {
      let resp = await fetch(`${ctx.state.apiUrl}/menu`)
      let data = await resp.json();

      ctx.commit('showOptions', data)
    },


    async orderItems(ctx) {

      let data = await ax.post(`${ctx.state.apiUrl}/orders`, {
        items: ctx.state.cart
      })
      console.log(data);
  
      //show order has been successfully
      ctx.commit('orderConfirmed', data)
  
      //empty Cart
      ctx.commit('emptyTheCart')
  
      //toggle cart
      ctx.commit('toggleCart');
  
    }
  
  },
  getters: {
    cartLengthNr(state) {

    let total = 0;
      state.cart.forEach(item => {
          total += item.quantity;
      });
      return total;

    }
  }
})



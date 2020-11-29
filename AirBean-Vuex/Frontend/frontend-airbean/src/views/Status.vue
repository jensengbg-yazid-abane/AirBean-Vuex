<template>
    <main id="orderStatus">
        <p>{{ order.orderNr }}</p>
        <img src="./../assets/graphics/Group 5.svg">

        <h5>Deliver around {{ order.arrival }} minutes.</h5>
        <button  class="button" @click="$router.push('/menu')">Ok, cool!</button>
    </main>
</template>

<script>
export default {
    name: 'Status',

    computed: {
        order() {
            return this.$store.state.order;
        },
        arrival(min, max) {
            min = 5;
            max = 20;
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }
}
</script>

<style scoped lang="scss">
#orderStatus {
    width: 100%;
    background: #E5674E;
    color: #FFFFFF;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    button {
        width: 184px;
        height: 55px;
        background: #FFFFFF;
        border-radius: 50px;
        font-family: PT Serif;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #2F2926;
    }
}
</style>
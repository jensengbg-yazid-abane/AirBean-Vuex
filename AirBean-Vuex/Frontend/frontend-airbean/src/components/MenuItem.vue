<template>
    <div id="menu-item">
        <img src="./../assets/graphics/add.png" alt="add" class="add" @click.prevent="addToCart" />
        <section class="options">
            <div class="items">
                <h4 class="item-title">{{ item.title }}</h4>
                <h4 class="item-dots"></h4>
                <p class="item-price">{{ item.price }}</p>
            </div>
            <div class="description">
                <p class="item-desc">{{ item.desc }}</p>
        </div>
        </section>

    </div>
</template>

<script>
export default {
    name:'MenuItem',
    props: {
        item: Object
    },
    methods: {
        addToCart() {
            this.$store.commit('addToCart', this.item);
        }
    }
}
</script>


<style lang="scss">
#menu-item {
    display: flex;
    flex-direction: row;
    height: 2%;

    .add {
        margin: 0;
        padding: 0;
        width: 4rem;
        height: 4rem;
    }

    .options {
        display: flex;
        flex-direction: column;
        width: 100%;

        .items {
        display: flex;
        flex-direction: row;


        h4 {
            &.item-title {
            font-weight: 800;
            }

            &.item-dots {
            flex: 1;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            margin-bottom: 0.3rem;
            }
        }
        }
    }
    }

    .description {
    p {
        font-family: Work Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
    }
}
</style>
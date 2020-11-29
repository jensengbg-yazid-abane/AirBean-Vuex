<template>
    <article id="menu">
        <section>
            <img src="./../assets/graphics/close.svg" alt="close" @click="toggleMenu" class="closeButton" />
        </section>

        <nav>

            <a href="#" @click="goTo('/menu')">Menu</a>
            <div class="spaceLine"></div>
            <a href="#" @click="goTo('/about')">About Us</a>
            <div class="spaceLine"></div>
            <a href="#" @click="goTo('/profile')">My Profile</a>
            <div class="spaceLine"></div>
            <a href="#" @click="goTo('/status')">Order Status</a>
        </nav>

    </article>

</template>

<script>
export default {
    name:'Nav',
    methods: {

        toggleMenu() {
            this.$store.commit('toggleMenu')
        },
        goTo(route){
            this.toggleMenu() ;
            if(route !== this.$route.path){
                this.$router.push(route);
            }

        }
    }

}
</script>

<style lang="scss">
#menu {
    background: #2f2926;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    section .closeButton {
        display: flex;
        justify-content: flex-start;
        width: 48px;
        height: 48px;
    }

    nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

        a {
            font-family: PT Serif;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            color: #FFFFFF;
            text-decoration: none;
            margin: 3rem;
            }

        p {
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            width: 30%;
        }
        
        .spaceLine {
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            width: 30%;
        }
    }
}
</style>
<template>
    <article id="Form">
        <section id="header">
            <h2>Welcome to AirBean Family Club</h2>
            <p>By creating an account below, you can save and view your order history.</p>
        </section>

        <label for="name">Name</label>
        <input type="text"  name="name" id="name" v-model="user">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="email">

        <section id="radioGDPR">
            <input
            type="radio"
            name="GDPR"
            id="GDPR"
            :gdpr="gdpr"
            @click="checked"
            />GDPR Ok!
        </section>
        <button id="Button" @click="logIn">Brew me a cup!</button>
    </article>
</template>

<script>
export default {
    name: 'ProfileForm',
    data() {
        return {
            user: '',
            email: {
                email: '',
                valid: false
            },
            gdpr: false
        }
    },
    methods: {
        logIn() {

        },
        checked() {
            this.gdprr = !this.gdprr
            return this.gdpr
        }
    }
}
</script>

<style>
#Form {
display: flex;
flex-direction: column;
align-content: center;
}
</style>
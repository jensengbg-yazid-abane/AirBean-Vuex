<template>
    <main id="profile">
        <nav>
            <img
                @click="toggleMenu"
                class="navIcon"
                src="./../assets/graphics/navicon.png"
                alt="navIcon"
            />
        </nav>
        <ProfileForm v-if="!showProfileForm" />
    </main>
</template>

<script>
import ProfileForm from '@/components/ProfileForm'

export default {
    name: 'Profile',
    components: {
        ProfileForm
    },
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu')
        }
    },
    computed: {
        showProfileForm() {
            return this.$store.state.showProfileForm;
        }
    }
}
</script>

<style>

</style>
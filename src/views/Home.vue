<script setup>

import TwoInOne from '../components/TwoInOne.vue';
import home from '../assets/images/home.jpg';
</script>

<template>
    <div>
        <TwoInOne :name="'Grow Your Bussiness with'" :imgsrc="home" vist="'/about" :btnName=" 'Get Started'"/>
    </div>
</template>

<style scoped>

</style>
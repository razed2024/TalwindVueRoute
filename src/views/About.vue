<script setup>
import TwoInOne from '../components/TwoInOne.vue';
import home from '../assets/images/home.jpg';
</script>

<template>
    <div>
        <TwoInOne :name="'Welcome to about page'" :imgsrc="home" vist="'/post" :btnName=" 'Read More'"/>
    </div>
</template>

<style scoped>

</style>
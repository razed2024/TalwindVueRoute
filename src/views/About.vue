<script setup>
import TwoInOne from '../components/TwoInOne.vue';
import home from '../assets/images/home.jpg';
</script>

<template>
    <div>
        <TwoInOne :name="'Welcome to about page'" :imgsrc ="home" :visit="'/services'" :btnName=" 'Services'"/>
    </div>
</template>

<style scoped>

</style>
<script setup>

import SerData from '../components/serData';
import Card from '../components/Card.vue';

</script>

<template>
    <div class="container mx-auto px-5 xl:px-24 mt-5">

        <div class="p-4"> 
            <h1 class="text-blue-700 text-4xl font-bold text-center pb-2"> Our Services</h1>
        </div>
        <div class=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

            <div v-for="data in SerData" :key="data"> 
                <Card :imgsrc="data.imgsrc" :title="data.title"/>
            </div>

        </div>
    </div>
</template>

<style scoped>

</style>
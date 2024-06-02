<script setup>

import { defineProps } from 'vue';
import {RouterLink} from 'vue-router'

const props = defineProps(['name','imgsrc','visit','btnName'])

</script>

<template>

    <div class=" flex flex-col md:flex-row container p-5 h-[100vh] md:h-[80vh] gap-5">

        <div class=" w-full flex flex-col p-10 md:p-5 justify-center text-center items-center">

                <h1 class="text-xl md:text-2xl text-slate-700">{{ name }} </h1>
                        
                <h1 class=" text-2xl md:text-5xl text-blue-700 font-bold m-2" > RigRax</h1>
                        
                <p class="text-2xl md:text-4xl text-slate-700 text-center"> We are the team of talented developers</p>
                        
                <router-link :to="visit" class="bg-blue-600 hover:bg-purple-300 outline-none px-12 py-4 mt-5 rounded-full text-white text-xl font-medium"> {{ btnName }}</router-link>

        </div>

        <div class="w-full flex justify-center items-center hover:animate-pulse">

                <img :src="imgsrc" alt="team-img" class=" w-[90%] h-[80%] ">

        </div>

    </div>

</template>



<style scoped >

</style>>
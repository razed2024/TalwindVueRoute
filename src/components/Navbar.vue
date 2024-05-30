<script setup>
 import {RouterLink} from 'vue-router';
 import {ref} from 'vue';

 const open = ref(false);

 const menuOpen = () =>{
    open.value = !open.value
 }
</script>

<template>

   <header class="flex justify-between items-center bg-white shadow-md h-[80px] px-5 lg:px-24 relative px-10"> 
   
    <div class="text-3xl font-extrabold text-blue-600 hover:text-blue-700 cursor-pointer">
        <router-link to="/"> RigRax </router-link>
    </div>
   
    <nav class="flex flex-col p-5 md:flex-row gap-4 bg-white md:gap-10 px-4 absolute md:static  shadow-md md:shadow-none w-full md:w-auto my-7 md:my-0 left-0 duration-500" :class="[open ?'top-0' :'top-[-390%]']">
        <router-link to="/" class-slate-500 py-5 hover:text-slate-700 text-xl font-medium> Home </router-link>
        <router-link to="/about" class-slate-500 py-5 hover:text-slate-700 text-xl font-medium> About </router-link>
        <router-link to="/contact" class-slate-500 py-5 hover:text-slate-700 text-xl font-medium> Contact </router-link>
        <router-link to="/post" class-slate-500 py-5 hover:text-slate-700 text-xl font-medium> Post </router-link>
    </nav>
    
    <div class="text-4xl text-black cursor-pointer md:hidden z-20 " @click="menuOpen">
        <box-icon :name =" [open ? 'window-close' : 'menu']"> </box-icon>
    </div>
    

   </header>
</template>


<style>

</style>
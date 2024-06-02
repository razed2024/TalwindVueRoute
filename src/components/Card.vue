<script setup>
const props = defineProps(['imgsrc','title'])

</script>

<template>
    <div class="bg-white shadow-lg hover:animate-spin sm:skew-y-6">
        <div class="bg-white shadow-lg">
        <img :src="imgsrc" :alt="title" class="w-full object-cover h-[200px]">
    </div>

    <div class="text-p-9 text-center">
        <h2 class="text-slate-800 py-1 font-bold text-lg text-center mt-3 "> {{ title }}</h2>
        <p class="text-slate-700 py-1 pb-4 font-medium text-base text-center"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, velit?</p>
        <button class="bg-blue-600 hover:bg-purple-300 outline-none px-6 py-3 mb-4 rounded-full text-white text-base font-medium ">Go Somewhere</button>
    </div>

    </div>
  

</template>

<style scoped>

</style>
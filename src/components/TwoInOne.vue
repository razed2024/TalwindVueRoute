<script setup>
import { defineProps } from 'vue';
const props = defineProps(['name','imgsrc','visit','btnName'])

</script>

<template>
    <div class=" container mx-auto px-5 lg:px-20">

        <div class="flex justify-between gap-10">

            <div class="text">
                <h1 class="text-2xl md:text-4xl text-slate-700">{{ name }}</h1>
            </div>

        <div class="img"> 

            </div>


        </div>

    </div>
</template>

<style scoped>

</style>>


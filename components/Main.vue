<script lang="ts" setup>
const { weatherData } = defineProps(["weatherData"]);

const {
  location: { name, country, localtime },
} = weatherData;

const date = localtime.split(" ")[0];
</script>

<template>
  <main class="mx-auto container backdrop-blur-md p-4 rounded-lg cursor-none">
    <div class="flex text-3xl justify-evenly w-full items-center py-6">
      <h2>{{ name }} | {{ country }}</h2>
      <h2>{{ date }}</h2>
    </div>
    <slot />
  </main>
</template>

<script lang="ts" setup>
const { weatherData } = defineProps(["weatherData"]);

const {
  current: { temp_c: temp },
  forecast: { forecastday },
  location: { name, country },
} = weatherData;

console.log(temp, name, country, forecastday);
</script>

<template>
  <div class="flex justify-center gap-2 mt-20">
    <div
      v-for="{ day, date } in forecastday"
      :key="date"
      class="p-4 flex flex-col border border-gray-300 rounded-md shadow-md w-64 items-center"
    >
      <p>{{ day.avgtemp_c }}</p>
      <p>{{ day.avghumidity }}%</p>
      <p>{{ date }}</p>
    </div>
  </div>
</template>

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
  <div v-for="{ day, date } in forecastday" :key="date">
    <p>{{ day.avgtemp_c }} | {{ day.avghumidity }}%</p>
    <p>{{ date }}</p>
  </div>
</template>

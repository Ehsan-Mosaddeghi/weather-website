<script lang="ts" setup>
const { weatherData } = defineProps(["weatherData"]);

const {
  current: { temp_c: temp, wind_mph: wind, humidity, condition },
} = weatherData;
</script>

<template>
  <div class="space-y-10">
    <div class="flex justify-center items-end">
      <h1 class="text-8xl">{{ temp }}°</h1>

      <div class="text-xl">
        <p>
          <UIcon name="i-mdi-weather-windy" /> <span>{{ wind }} mph</span>
        </p>
        <p>
          <UIcon name="i-lets-icons-humidity-light" />
          <span>{{ humidity }}%</span>
        </p>
      </div>
    </div>

    <p class="text-2xl flex justify-center items-center">
      <span>
        {{ condition.text }}
      </span>
      <img :src="`https:${condition.icon}`" :alt="condition.text" />
    </p>
  </div>
</template>

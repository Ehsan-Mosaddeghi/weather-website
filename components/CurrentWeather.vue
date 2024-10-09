<script lang="ts" setup>
const { weatherData } = defineProps(["weatherData"]);

const {
  current: { temp_c: temp, wind_mph: wind, humidity, condition },
} = weatherData;
</script>

<template>
  <div class="space-y-10">
    <div class="flex justify-center items-end">
      <h1 class="text-8xl">{{ formatTemp(temp) }}</h1>

      <div class="text-2xl">
        <p>
          <UIcon name="i-mdi-weather-windy" />
          <span>{{ wind }} mph</span>
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
      <NuxtImg
        :src="`https:${condition.icon}`"
        :alt="condition.text"
        :key="condition.icon"
        :placeholder="[50, 25, 50, 5]"
        quality="80"
        width="50"
        height="50"
        format="webp"
        loading="lazy"
      />
    </p>
  </div>
</template>

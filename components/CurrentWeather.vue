<script lang="ts" setup>
const tempUnit = ref("celsius");
const { weatherData } = defineProps(["weatherData"]);

const {
  current: {
    temp_c: tempC,
    temp_f: tempF,
    wind_mph: wind,
    humidity,
    condition,
  },
} = weatherData;
</script>

<template>
  <div class="space-y-10">
    <div class="flex justify-center items-end gap-4">
      <div class="place-self-center flex flex-col sm:flex-row gap-2 text-xl">
        <button
          @click="() => (tempUnit = 'celsius')"
          class="px-2 hover:text-blue-400 hover:bg-yellow-300 duration-300 rounded-md cursor-none"
          :class="{ 'ring-2': tempUnit === 'celsius' }"
        >
          C
        </button>
        <span class="hidden sm:block">|</span>
        <button
          @click="() => (tempUnit = 'fahrenheit')"
          class="px-2 hover:text-blue-400 hover:bg-yellow-300 duration-300 rounded-md cursor-none"
          :class="{ 'ring-2': tempUnit === 'fahrenheit' }"
        >
          F
        </button>
      </div>

      <Transition name="tempUnit" mode="out-in">
        <div :key="tempUnit" class="min-w-56 text-center">
          <h1 class="text-8xl" v-if="tempUnit === 'celsius'">
            {{ formatTempC(tempC) }}
          </h1>
          <h1 class="text-8xl" v-if="tempUnit === 'fahrenheit'">
            {{ formatTempF(tempF) }}
          </h1>
        </div>
      </Transition>

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

<style scoped>
.tempUnit-enter-active,
.tempUnit-leave-active {
  transition: all 0.5s ease-in-out;
}
.tempUnit-enter-from {
  opacity: 0;
  transform: translateY(80px);
}

.tempUnit-leave-to {
  opacity: 0;
  transform: translateY(-80px);
}
</style>

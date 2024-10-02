<script lang="ts" setup>
const city = ref("");

const weatherData: any = ref(null);
const loading = ref(false);

async function handleWeather() {
  try {
    loading.value = true;
    const data = await $fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=d590b84790384cc6b74135915240110&q=${city.value}&days=6&aqi=no&alerts=no`
    );

    weatherData.value = data;
  } catch {
  } finally {
    city.value = "";
    loading.value = false;
  }
}
</script>

<template>
  <div
    :class="{
      'bg-slate-600': weatherData?.current?.condition?.text === 'Partly cloudy',
    }"
  >
    <div class="flex justify-center">
      <form @submit.prevent="handleWeather" class="text-center">
        <UInput
          placeholder="Search your city..."
          icon="i-heroicons-pencil"
          v-model="city"
        />

        <UButton type="submit"> Search... </UButton>
      </form>
    </div>

    <!-- <div>Name: {{ weatherData }}</div> -->
    <Spinner v-if="loading" />

    <Transition name="weather" mode="out-in">
      <Main
        v-if="weatherData"
        :weatherData="weatherData"
        :key="weatherData.location.name"
      >
        <CurrentWeather :weatherData="weatherData" />
        <ForecastWeather :weatherData="weatherData" />
      </Main>
    </Transition>

    <!-- <div v-for="movie in movies" :key="movie.imdbID">
    <p>
      {{ movie.Title }}
    </p>
    <img :src="movie.Poster" alt="" />
  </div> -->
  </div>
</template>

<style scoped>
.weather-enter-active,
.weather-leave-active {
  transition: all 0.7s ease-in-out;
}
.weather-enter-from,
.weather-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>

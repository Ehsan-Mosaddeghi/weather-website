<script lang="ts" setup>
const city = ref("");

const weatherData: any = ref(null);
const loading = ref(false);

async function handleWeather() {
  try {
    loading.value = true;
    const data = await $fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=d590b84790384cc6b74135915240110&q=Tehran&days=4&aqi=no&alerts=no
`
    );

    weatherData.value = data;
    console.log(weatherData.value);
  } catch {
  } finally {
    city.value = "";
    loading.value = false;
  }
}
</script>

<template>
  <main>
    <div class="flex justify-center">
      <form @submit.prevent="handleWeather">
        <UInput
          placeholder="Search your city..."
          icon="i-heroicons-pencil"
          v-model="city"
        />
      </form>
    </div>

    <!-- <div>Name: {{ weatherData }}</div> -->
    <Spinner v-if="loading" />
    <Weather v-if="weatherData" :weatherData="weatherData" />

    <!-- <div v-for="movie in movies" :key="movie.imdbID">
    <p>
      {{ movie.Title }}
    </p>
    <img :src="movie.Poster" alt="" />
  </div> -->
  </main>
</template>

<style></style>

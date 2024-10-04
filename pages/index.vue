<script lang="ts" setup>
const city = ref("");

const weatherData: any = ref(null);
const loading = ref(false);
const error: any = ref("");

async function handleWeather() {
  try {
    loading.value = true;
    error.value = "";

    const {
      data,
      status,
      error: errorApi,
    } = await useAsyncData("weather", () =>
      $fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=d590b84790384cc6b74135915240110&q=${city.value}&days=6&aqi=no&alerts=no`
      )
    );

    if (status.value === "error")
      throw new Error(errorApi.value?.data?.error?.message);

    weatherData.value = data.value;
  } catch (err: any) {
    error.value = err.message;
  } finally {
    city.value = "";
    loading.value = false;
  }
}
</script>

<template>
  <div>
    <div class="flex justify-center">
      <form @submit.prevent="handleWeather" class="text-center flex">
        <UInput
          :loading="loading"
          required
          autofocus
          placeholder="Search your city..."
          icon="i-heroicons-pencil"
          v-model="city"
        />

        <UButton type="submit" color="green"> Search... </UButton>
      </form>
    </div>

    <!-- <div>Name: {{ weatherData }}</div> -->
    <!-- <Spinner v-if="loading" /> -->

    <p v-if="error">{{ error }}</p>
    <Error v-if="error" :message="error" />

    <Transition name="weather" mode="out-in">
      <Main
        v-if="weatherData || error"
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
  /* transition: all 1s ease-in-out; */
  animation: bounce-in 0.5s;
}
.weather-enter-from,
.weather-leave-to {
  /* opacity: 0; */
  /* transform: rotateY(180deg); */
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: translateY(100svh);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

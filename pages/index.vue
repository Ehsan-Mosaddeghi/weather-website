<script lang="ts" setup>
const city = ref("");

const weatherData: any = ref(null);
const loading = ref(false);
const error: any = ref("");
const background = ref("bg-main");

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
    console.log(data.value);

    if (status.value === "error")
      throw new Error(errorApi.value?.data?.error?.message);

    weatherData.value = data.value;

    weatherData.value?.current?.cloud <= 10
      ? (background.value = "bg-sunny")
      : (background.value = "bg-rainy");
  } catch (err: any) {
    error.value = err.message;
  } finally {
    city.value = "";
    loading.value = false;
  }
}
</script>

<template>
  <div
    class="after:block after:w-full after:h-full after:top-0 after:left-0 after:bg-zinc-700 after:opacity-30 after:-z-10 after:absolute"
  >
    <Transition name="background">
      <NuxtImg
        :src="`/${background}.jpg`"
        :key="background"
        :placeholder="[50, 25, 50, 5]"
        quality="80"
        format="webp"
        fit="cover"
        loading="lazy"
        class="absolute -z-10 w-full h-svh"
      />
    </Transition>
    <header class="text-center py-5">
      <h1 class="text-5xl">Weather Now</h1>
    </header>
    <div class="flex justify-center mb-8">
      <form @submit.prevent="handleWeather" class="text-center flex font-sans">
        <UInput
          :loading="loading"
          required
          autofocus
          size="xl"
          placeholder="Search your city..."
          icon="i-heroicons-pencil-square"
          v-model="city"
          color="gray"
        />

        <UButton label="Search..." type="submit">
          <template #trailing>
            <UIcon
              name="i-heroicons-paper-airplane"
              class="w-5 h-5"
            /> </template
        ></UButton>
      </form>
    </div>

    <!-- <div>Name: {{ weatherData }}</div> -->

    <Error v-if="error" :message="error" />
    <!-- <Spinner v-if="loading" /> -->

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

.background-enter-active,
.background-leave-active {
  transition: all 2s linear;
}
.background-enter-from,
.background-leave-to {
  opacity: 0;
}

@keyframes bounce-in {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>

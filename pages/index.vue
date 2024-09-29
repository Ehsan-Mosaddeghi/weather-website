<script lang="ts" setup>
const city = ref("");

console.log(city.value);
const { data } = await useFetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Tabriz&appid=c964efd57b53dde7f041a3b7beece2a2"
);

function handle(e) {
  e.preventDefault();

  const city = e.target.city.value;
}
</script>

<template>
  <main>
    <div class="flex justify-center" @submit="handle">
      <UFormGroup label="City">
        <UInput placeholder="Search your city..." icon="i-heroicons-pencil" />
      </UFormGroup>
    </div>

    <!-- <div v-for="movie in movies" :key="movie.imdbID">
    <p>
      {{ movie.Title }}
    </p>
    <img :src="movie.Poster" alt="" />
  </div> -->
  </main>
</template>

<style></style>

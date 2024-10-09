<script lang="ts" setup>
const { weatherData } = defineProps(["weatherData"]);

const {
  forecast: { forecastday },
} = weatherData;

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

interface forecastProps {
  date: string;
  day: {
    avgtemp_c: number;
    avghumidity: number;
    condition: {
      icon: string;
      text: string;
    };
  };
}
const convertedForecast = forecastday.map((day: forecastProps) => ({
  day: weekDays[new Date(day.date).getDay()],
  date: day.date,
  temp: day.day.avgtemp_c,
  humidity: day.day.avghumidity,
  condition: { text: day.day.condition.text, icon: day.day.condition.icon },
}));
</script>

<template>
  <div class="flex justify-center flex-wrap gap-2 mt-20">
    <div
      v-for="{ day, date, temp, humidity, condition } in convertedForecast"
      :key="date"
      class="py-4 px-2 flex flex-col rounded-md shadow-2xl min-w-48 items-center hover:-translate-y-4 hover:scale-105 duration-300 text-xl"
    >
      <img :src="`https:${condition.icon}`" alt="" />
      <p>{{ day }}</p>
      <p>{{ formatTemp(temp) }}</p>
      <p>{{ humidity }}%</p>
      <p>{{ condition.text }}</p>
      <p>{{ date }}</p>
    </div>
  </div>
</template>

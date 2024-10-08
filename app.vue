<script setup lang="ts">
useHead({
  title: "Weather",

  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap",
      crossorigin: "",
    },
  ],
});
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <CustomCursor />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const { message } = defineProps(["message"]);
</script>

<template>
  <div class="w-full text-center my-2">
    <h1>
      <span>
        {{ message }}
      </span>
      <UIcon name="i-fluent-text-bullet-list-square-warning-16-regular" />
    </h1>
  </div>
</template>

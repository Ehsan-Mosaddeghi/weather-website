<script lang="ts" setup>
const { message } = defineProps(["message"]);
</script>

<template>
  <div>
    <h1>
      <span>
        {{ message }}
      </span>
      <UIcon name="i-fluent-text-bullet-list-square-warning-16-regular" />
    </h1>
  </div>
</template>

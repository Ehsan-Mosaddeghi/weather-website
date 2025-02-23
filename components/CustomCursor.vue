<script lang="ts" setup>
const x = useState("left", () => 0);
const y = useState("top", () => 0);
const inMain = useState("inMain", () => false);

function updateCursorPosition(event: any) {
  event.target.closest("main") ? (inMain.value = true) : (inMain.value = false);
  x.value = event.clientX;
  y.value = event.clientY;
}

onMounted(() => {
  window.addEventListener("mousemove", updateCursorPosition);
});
</script>

<template>
  <div
    v-if="inMain"
    class="hidden md:block absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full duration-200 transition ease-linear bg-yellow-200 shadow-[0_0_100px_40px_rgb(255,235,160)]"
    :style="{ left: x + 'px', top: y + 'px' }"
  ></div>
</template>

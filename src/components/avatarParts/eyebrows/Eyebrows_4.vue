<template>
  <svg
    :width="104 + props.x + correctionX"
    :height="22 + props.y - correctionY"
    :viewBox="`0 0 ${104 + props.x} ${22 + props.y - correctionY}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :transform="`translate(${props.x || 0}, ${props.y - correctionY || 0})`"
      d="M100.545 17.0775C93.4904 12.9759 84.0128 13.2214 63.387 20.4578C59.1738 21.936 57.4428 17.7058 59.1738 15.3604C71.9421 10.3226 97.8474 7.94974 101.225 16.5869C101.385 16.9966 100.929 17.3007 100.545 17.0775Z"
      fill="#383434"
    />
    <path
      :transform="`translate(${props.x || 0}, ${props.y - correctionY || 0})`"
      d="M4.36564 14.6657C12.4077 10.3498 22.6636 13.2456 41.5611 19.8756C45.3995 21.2223 46.9766 17.3684 45.3995 15.2316C33.743 10.6325 7.83427 5.46902 3.75766 14.1773C3.58228 14.5519 3.99824 14.8629 4.36564 14.6657Z"
      fill="#383434"
    />
  </svg>
</template>


<script setup lang="ts">
const correctionX: number = 3.5
const correctionY: number = 0

const props = defineProps<{
  x: number
  y: number
}>()
</script>

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
      d="M57.5956 18.5926C55.9875 15.9595 56.8807 12.9757 57.5956 11.2395C69.7462 5.39193 89.355 5.87221 94.4412 13.2395L95.9336 20.5926C86.2529 11.2395 58.8603 20.6632 57.5956 18.5926Z"
      fill="#383434"
    />
    <path
      :transform="`translate(${props.x || 0}, ${props.y - correctionY || 0})`"
      d="M44.8018 13.5926C46.41 10.9595 45.5167 7.97574 44.8018 6.23954C32.6513 0.391926 13.0425 0.872209 7.9563 8.23954L6.46387 15.5926C16.1446 6.23954 43.5372 15.6632 44.8018 13.5926Z"
      fill="#383434"
    />
  </svg>
</template>

<script setup lang="ts">
const correctionX: number = 6.5
const correctionY: number = 0

const props = defineProps<{
  x: number
  y: number
}>()
</script>

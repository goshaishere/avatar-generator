<template>
  <component :x="props.x" :y="props.y" :rotation="rotation" :is="getBackgroundComponent()" />
</template>
  
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps<{
  partPath: string
  x?: number
  y?: number
  rotation?: number
}>()

const getBackgroundComponent = () => {
  return defineAsyncComponent(() => import(props.partPath))
}
</script>

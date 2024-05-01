<template>
  <svg @click="downloadSvgAsPng" id="result" class="svg-image" width="440" height="440">
    <PartDrawer :partPath="avatarAsset.background[props.avatar.background]" />
    <PartDrawer :x="headX" :y="headY" :partPath="avatarAsset.head[props.avatar.head]" />
    <PartDrawer :x="bodyX" :y="bodyY" :partPath="avatarAsset.body[props.avatar.body]" />
    <PartDrawer :x="mouthX" :y="mouthY" :partPath="avatarAsset.mouth[props.avatar.mouth]" />

    <PartDrawer
      :x="eyeBrowsX"
      :y="eyeBrowsY"
      :partPath="avatarAsset.eyebrows[props.avatar.eyebrows]"
    />
    <PartDrawer :x="eyesX" :y="eyesY" :partPath="avatarAsset.eyes[props.avatar.eyes]" />
    <PartDrawer :x="glassesX" :y="glassesY" :partPath="avatarAsset.glasses[props.avatar.glasses]" />
    <PartDrawer :x="topX" :y="topY" :partPath="avatarAsset.top[props.avatar.top]" />

    <PartDrawer
      :x="petX"
      :y="petY"
      :rotation="rotationPet"
      :partPath="avatarAsset.pet[props.avatar.pet]"
    />
  </svg>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from '@/models/Avatar'
import PartDrawer from '@/components/PartDrawer.vue'
import AvatarAsset from '@/models/AvatarAsset'

const props = defineProps<{
  avatar: Avatar
  avatarAsset: AvatarAsset
}>()

const headX = ref(140.5)
const headY = ref(125)

const bodyX = ref(71.5)
const bodyY = ref(298)

const topX = ref(90)
const topY = ref(38.2)

const mouthX = ref(169)
const mouthY = ref(230)

const glassesX = ref(141)
const glassesY = ref(191)

const eyesX = ref(177)
const eyesY = ref(197.5)

const eyeBrowsX = ref(165)
const eyeBrowsY = ref(172)

const petX = ref(-80.5)
const petY = ref(240)
const rotationPet = ref(-20)

const downloadSvgAsPng = () => {
  const svgElement = document.getElementById('result')

  if (!svgElement) {
    console.error(`SVG элемент с id 'result' не найден`)
    return
  }

  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = svgElement.clientWidth
  canvas.height = svgElement.clientHeight

  const svgString = new XMLSerializer().serializeToString(svgElement)

  const img = new Image()
  img.onload = function () {
    ctx!.drawImage(img, 0, 0)

    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob)

        const a = document.createElement('a')
        a.href = url
        a.download = 'image.png'

        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)

        URL.revokeObjectURL(url)
      }
    }, 'image/png')
  }
  img.src = 'data:image/svg+xml;base64,' + btoa(svgString)
}
</script>

<template>
  <component :x="props.x" :y="props.y" :rotation="rotation" :is="getComponent(props.partPath)" />
</template>
  
<script setup lang="ts">
import Head1 from '@/components/avatarParts/head/Head_1.vue'
import Top1 from '@/components/avatarParts/top/Top_1.vue'
import Top2 from '@/components/avatarParts/top/Top_2.vue'
import Top3 from '@/components/avatarParts/top/Top_3.vue'
import Top4 from '@/components/avatarParts/top/Top_4.vue'
import Top5 from '@/components/avatarParts/top/Top_5.vue'
import Top6 from '@/components/avatarParts/top/Top_6.vue'
import Top7 from '@/components/avatarParts/top/Top_7.vue'
import Top8 from '@/components/avatarParts/top/Top_8.vue'
import Top9 from '@/components/avatarParts/top/Top_9.vue'
import Top10 from '@/components/avatarParts/top/Top_10.vue'
import Top11 from '@/components/avatarParts/top/Top_11.vue'
import Mouth1 from '@/components/avatarParts/mouth/Mouth_1.vue'
import Mouth2 from '@/components/avatarParts/mouth/Mouth_2.vue'
import Mouth3 from '@/components/avatarParts/mouth/Mouth_3.vue'
import Mouth4 from '@/components/avatarParts/mouth/Mouth_4.vue'
import Mouth5 from '@/components/avatarParts/mouth/Mouth_5.vue'
import Mouth6 from '@/components/avatarParts/mouth/Mouth_6.vue'
import Mouth7 from '@/components/avatarParts/mouth/Mouth_7.vue'
import Glasses1 from '@/components/avatarParts/glasses/Glasses_1.vue'
import Glasses2 from '@/components/avatarParts/glasses/Glasses_2.vue'
import Glasses3 from '@/components/avatarParts/glasses/Glasses_3.vue'
import Eyes1 from '@/components/avatarParts/eyes/Eyes_1.vue'
import Eyes2 from '@/components/avatarParts/eyes/Eyes_2.vue'
import Eyes3 from '@/components/avatarParts/eyes/Eyes_3.vue'
import Eyes4 from '@/components/avatarParts/eyes/Eyes_4.vue'
import Eyes5 from '@/components/avatarParts/eyes/Eyes_5.vue'
import Eyebrows1 from '@/components/avatarParts/eyebrows/Eyebrows_1.vue'
import Eyebrows2 from '@/components/avatarParts/eyebrows/Eyebrows_2.vue'
import Eyebrows3 from '@/components/avatarParts/eyebrows/Eyebrows_3.vue'
import Eyebrows4 from '@/components/avatarParts/eyebrows/Eyebrows_4.vue'
import Eyebrows5 from '@/components/avatarParts/eyebrows/Eyebrows_5.vue'
import Eyebrows6 from '@/components/avatarParts/eyebrows/Eyebrows_6.vue'
import Body1 from '@/components/avatarParts/body/Body_1.vue'
import Body2 from '@/components/avatarParts/body/Body_2.vue'
import Body3 from '@/components/avatarParts/body/Body_3.vue'
import Body4 from '@/components/avatarParts/body/Body_4.vue'
import Body5 from '@/components/avatarParts/body/Body_5.vue'
import Body6 from '@/components/avatarParts/body/Body_6.vue'
import Background1 from '@/components/avatarParts/background/Background_1.vue'
import Background2 from '@/components/avatarParts/background/Background_2.vue'
import Background3 from '@/components/avatarParts/background/Background_3.vue'
import Background4 from '@/components/avatarParts/background/Background_4.vue'
import Background5 from '@/components/avatarParts/background/Background_5.vue'
import Pet1 from '@/components/avatarParts/pet/Pet_1.vue'
import Pet2 from '@/components/avatarParts/pet/Pet_2.vue'
import Pet3 from '@/components/avatarParts/pet/Pet_3.vue'
import Pet4 from '@/components/avatarParts/pet/Pet_4.vue'

const props = defineProps<{
  partPath: string
  x?: number
  y?: number
  rotation?: number
}>()

const componentsMap: any = {
  head: {
    Head_1: Head1
  },
  top: {
    Top_1: Top1,
    Top_2: Top2,
    Top_3: Top3,
    Top_4: Top4,
    Top_5: Top5,
    Top_6: Top6,
    Top_7: Top7,
    Top_8: Top8,
    Top_9: Top9,
    Top_10: Top10,
    Top_11: Top11
  },
  mouth: {
    Mouth_1: Mouth1,
    Mouth_2: Mouth2,
    Mouth_3: Mouth3,
    Mouth_4: Mouth4,
    Mouth_5: Mouth5,
    Mouth_6: Mouth6,
    Mouth_7: Mouth7
  },
  glasses: {
    Glasses_1: Glasses1,
    Glasses_2: Glasses2,
    Glasses_3: Glasses3
  },
  eyes: {
    Eyes_1: Eyes1,
    Eyes_2: Eyes2,
    Eyes_3: Eyes3,
    Eyes_4: Eyes4,
    Eyes_5: Eyes5
  },
  eyebrows: {
    Eyebrows_1: Eyebrows1,
    Eyebrows_2: Eyebrows2,
    Eyebrows_3: Eyebrows3,
    Eyebrows_4: Eyebrows4,
    Eyebrows_5: Eyebrows5,
    Eyebrows_6: Eyebrows6
  },
  body: {
    Body_1: Body1,
    Body_2: Body2,
    Body_3: Body3,
    Body_4: Body4,
    Body_5: Body5,
    Body_6: Body6
  },
  background: {
    Background_1: Background1,
    Background_2: Background2,
    Background_3: Background3,
    Background_4: Background4,
    Background_5: Background5
  },
  pet: {
    Pet_1: Pet1,
    Pet_2: Pet2,
    Pet_3: Pet3,
    Pet_4: Pet4
  }
}

const getComponent = (path: string) => {
  const parts = path.split('/')
  const category = parts[parts.length - 2]
  const component = parts[parts.length - 1].replace('.vue', '')
  return componentsMap[category]?.[component] || null
}
</script>
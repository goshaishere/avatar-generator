<template>
  <div class="generation-view">
    <AvatarDrawer :avatar="generationStore.avatar" :avatarAsset="generationStore.avatarAsset" />
    <div class="generation-view__actions">
      <button @click="updateAvatar" class="button-refresh">обновить</button>
      <button @click="addToFavorites" class="button-favorite">в избранное</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGenerationStore } from '@/stores/generation'
import AvatarDrawer from '@/components/AvatarDrawer.vue'

const generationStore = useGenerationStore()

const addToFavorites = () => {
  generationStore.addAvatarToFavorites()
}

const updateAvatar = () => {
  generationStore.updateAvatar()
}
</script>

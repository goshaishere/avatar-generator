<template>
  <div class="favorites-view">
    <div class="favorites-view__content">
      <div v-for="(avatar, index) in generationStore.getFavorites" :key="index">
        <AvatarDrawer class="favorites-view__avatar-drawer" :avatar="avatar" :avatarAsset="asset" />
        <div class="favorites-view__actions">
          <button @click="deleteAvatar(avatar)" class="button-delete">удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { useGenerationStore } from '@/stores/generation'
import AvatarAsset from '@/models/AvatarAsset'
import AvatarDrawer from '@/components/AvatarDrawer.vue'
import Avatar from '@/models/Avatar'

const generationStore = useGenerationStore()
const asset: AvatarAsset = new AvatarAsset()

const deleteAvatar = (avatar: Avatar) => {
  generationStore.deleteAvatarFromFavorites(avatar)
}
</script>

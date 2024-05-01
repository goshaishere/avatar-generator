import { defineStore } from 'pinia';
import Avatar from '@/models/Avatar';

interface FavoritesState {
  favorites: Avatar[];
}

export const useFavoritesStore = defineStore('favorites', {
  state: (): FavoritesState => ({
    favorites: JSON.parse(localStorage.getItem('favorites') ?? '[]'),
  }),
  getters: {
    getFavorites(): Avatar[] {
      return this.favorites
    },
  },
  actions: {
    deleteAvatarFromFavorites(avatar: Avatar): void {
      const index = this.favorites.findIndex(favAvatar => favAvatar === avatar);
      if (index !== -1) {
        this.favorites.splice(index, 1);
      }
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
  }
});
import { defineStore } from 'pinia';
import Avatar from '@/models/Avatar';
import AvatarAsset from '@/models/AvatarAsset';

const asset = new AvatarAsset();

const randomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function generateAvatar(): Avatar {
  return new Avatar({
    head: randomInt(0, asset.head.length - 1),
    top: randomInt(0, asset.top.length - 1),
    mouth: randomInt(0, asset.mouth.length - 1),
    glasses: randomInt(0, asset.glasses.length - 1),
    eyes: randomInt(0, asset.eyes.length - 1),
    eyebrows: randomInt(0, asset.eyebrows.length - 1),
    body: randomInt(0, asset.body.length - 1),
    background: randomInt(0, asset.background.length - 1),
    pet: randomInt(0, asset.pet.length - 1),
  });
}

interface GenerationState {
  avatar: Avatar;
  avatarAsset: AvatarAsset;
  favorites: Avatar[];
}

export const useGenerationStore = defineStore('generation', {
  state: (): GenerationState => ({
    avatar: generateAvatar(),
    avatarAsset: asset,
    favorites: JSON.parse(localStorage.getItem('favorites') ?? '[]'),

  }),
  getters: {
    getFavorites(): Avatar[] {
      return this.favorites
    },
    getAvatar(): Avatar | null {
      return this.avatar
    }
  },
  actions: {
    updateAvatar(): void {
      this.avatar = generateAvatar()
    },
    addAvatarToFavorites(): void {
      const currentAvatar = this.avatar
      if (currentAvatar) {
        this.favorites.push(currentAvatar)
      }
      if (this.favorites.length === 5) {
        this.favorites.shift()
      }
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    }
  }
});
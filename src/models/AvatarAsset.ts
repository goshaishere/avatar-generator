export default class AvatarAsset {
    head: string[];
    top: string[];
    mouth: string[];
    glasses: string[];
    eyes: string[];
    eyebrows: string[];
    body: string[];
    background: string[];
    pet: string[];

    constructor() {
        this.head = Object.keys(import.meta.glob('@/components/avatarParts/head/*.vue')) || [];
        this.top = Object.keys(import.meta.glob('@/components/avatarParts/top/*.vue')) || [];
        this.mouth = Object.keys(import.meta.glob('@/components/avatarParts/mouth/*.vue')) || [];
        this.glasses = Object.keys(import.meta.glob('@/components/avatarParts/glasses/*.vue')) || [];
        this.eyes = Object.keys(import.meta.glob('@/components/avatarParts/eyes/*.vue')) || [];
        this.eyebrows = Object.keys(import.meta.glob('@/components/avatarParts/eyebrows/*.vue')) || [];
        this.body = Object.keys(import.meta.glob('@/components/avatarParts/body/*.vue')) || [];
        this.background = Object.keys(import.meta.glob('@/components/avatarParts/background/*.vue')) || [];
        this.pet = Object.keys(import.meta.glob('@/components/avatarParts/pet/*.vue')) || [];
    }
}
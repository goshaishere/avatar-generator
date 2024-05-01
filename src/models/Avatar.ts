export default class Avatar {
    head: number;
    top: number;
    mouth: number;
    glasses: number;
    eyes: number;
    eyebrows: number;
    body: number;
    background: number;
    pet: number;

    constructor(options?: Partial<Avatar>) {
        this.head = options?.head || 0;
        this.top = options?.top || 0;
        this.mouth = options?.mouth || 0;
        this.glasses = options?.glasses || 0;
        this.eyes = options?.eyes || 0;
        this.eyebrows = options?.eyebrows || 0;
        this.body = options?.body || 0;
        this.background = options?.background || 0;
        this.pet = options?.pet || 0;
    }
}
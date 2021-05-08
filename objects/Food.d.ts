import { Snake } from "./Snake";
import { Square } from "./Square";
export declare class Food {
    segment: Square;
    constructor(moveRange: number);
    generateApple: (snake: Snake, canvas: HTMLCanvasElement, moveRange: number) => void;
}

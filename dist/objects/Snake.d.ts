import { IPosition, Direction } from "../interfaces/interfaces";
import { Food } from "./Food";
import { Square } from "./Square";
export declare class Snake {
    private segments;
    private moveRange;
    constructor(position: IPosition, moveRange: number);
    addSegment: (direction: Direction) => void;
    recalculateSegments: (direction: Direction) => void;
    detectCollisions: (canvas: HTMLCanvasElement) => boolean;
    detectedFood: (food: Food) => boolean;
    getSegments: () => Square[];
}

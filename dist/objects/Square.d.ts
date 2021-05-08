import { IPosition } from "../interfaces/interfaces";
export declare class Square {
    position: IPosition;
    height: number;
    width: number;
    color: string;
    constructor(position: IPosition, color: string, moveRange: number);
}

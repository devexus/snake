import { IPosition } from "../interfaces/interfaces";

export class Square {
  public position: IPosition;
  public height: number;
  public width: number;
  public color: string;

  constructor(position: IPosition, color: string, moveRange: number) {
    this.position = position;
    this.height = moveRange;
    this.width = moveRange;
    this.color = color;
  }
}

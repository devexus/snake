import { generatePosition } from "../helpers/helpers";
import { IPosition } from "../interfaces/interfaces";
import { Snake } from "./Snake";
import { Square } from "./Square";

export class Food {
  public segment: Square;

  constructor(moveRange: number) {
    this.segment = new Square(null, "#FF6A88", moveRange);
  }

  public generateApple = (
    snake: Snake,
    canvas: HTMLCanvasElement,
    moveRange: number
  ) => {
    let segments = snake.getSegments();

    let position: IPosition;

    let detected = false;
    do {
      detected = false;
      position = {
        x: generatePosition(moveRange, 0, canvas.width),
        y: generatePosition(moveRange, 0, canvas.height),
      };

      for (let i = 0; i < segments.length; i++) {
        if (
          segments[i].position.x === position.x &&
          segments[i].position.y == position.y
        ) {
          detected = true;
        }
      }
    } while (detected);

    this.segment.position = position;
  };
}

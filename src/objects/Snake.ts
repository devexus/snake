import { IPosition, Direction } from "../interfaces/interfaces";
import { Food } from "./Food";
import { Square } from "./Square";

export class Snake {
  private segments: Square[] = [];
  private moveRange: number;

  constructor(position: IPosition, moveRange: number) {
    this.moveRange = moveRange;
    this.segments.push(new Square(position, "#0C5E62", this.moveRange));
  }

  public addSegment = (direction: Direction): void => {
    let lastSegment = this.segments[this.segments.length - 1];

    let newSegment = new Square(null, "#39B4BA", this.moveRange);

    if (this.segments.length < 2) {
      switch (direction) {
        case Direction.Up:
          newSegment.position = {
            x: lastSegment.position.x,
            y: lastSegment.position.y + this.moveRange,
          };
          break;
        case Direction.Down:
          newSegment.position = {
            x: lastSegment.position.x,
            y: lastSegment.position.y - this.moveRange,
          };
          break;
        case Direction.Left:
          newSegment.position = {
            x: lastSegment.position.x + this.moveRange,
            y: lastSegment.position.y,
          };
          break;
        case Direction.Right:
          newSegment.position = {
            x: lastSegment.position.x - this.moveRange,
            y: lastSegment.position.y,
          };
          break;
      }
    } else {
      let penultSegment = this.segments[this.segments.length - 2];

      if (
        penultSegment.position.x === lastSegment.position.x &&
        penultSegment.position.y < lastSegment.position.y
      ) {
        newSegment.position = {
          x: lastSegment.position.x,
          y: lastSegment.position.y + this.moveRange,
        };
      } else if (
        penultSegment.position.x === lastSegment.position.x &&
        penultSegment.position.y > lastSegment.position.y
      ) {
        newSegment.position = {
          x: lastSegment.position.x,
          y: lastSegment.position.y - this.moveRange,
        };
      } else if (
        penultSegment.position.x < lastSegment.position.x &&
        penultSegment.position.y === lastSegment.position.y
      ) {
        newSegment.position = {
          x: lastSegment.position.x + this.moveRange,
          y: lastSegment.position.y,
        };
      } else if (
        penultSegment.position.x > lastSegment.position.x &&
        penultSegment.position.y === lastSegment.position.y
      ) {
        newSegment.position = {
          x: lastSegment.position.x - this.moveRange,
          y: lastSegment.position.y,
        };
      }
    }
    if (newSegment != null) this.segments.push(newSegment);
  };

  public recalculateSegments = (direction: Direction) => {
    let buffor = this.segments[0].position;
    for (let i = 1; i < this.segments.length; i++) {
      let tmp = buffor;
      buffor = this.segments[i].position;
      this.segments[i].position = tmp;
    }

    switch (direction) {
      case Direction.Up:
        this.segments[0].position = {
          x: this.segments[0].position.x,
          y: this.segments[0].position.y - this.moveRange,
        };
        break;
      case Direction.Down:
        this.segments[0].position = {
          x: this.segments[0].position.x,
          y: this.segments[0].position.y + this.moveRange,
        };
        break;
      case Direction.Left:
        this.segments[0].position = {
          x: this.segments[0].position.x - this.moveRange,
          y: this.segments[0].position.y,
        };
        break;
      case Direction.Right:
        this.segments[0].position = {
          x: this.segments[0].position.x + this.moveRange,
          y: this.segments[0].position.y,
        };
        break;
    }
  };

  public detectCollisions = (canvas: HTMLCanvasElement): boolean => {
    //endmap logic
    let segments = this.segments;
    let head = segments[0];

    if (
      head.position.y < 0 ||
      head.position.y >= canvas.height ||
      head.position.x < 0 ||
      head.position.x >= canvas.width
    )
      return true;

    //snake collision detection
    for (let i = 1; i < segments.length; i++) {
      if (
        head.position.x === segments[i].position.x &&
        head.position.y === segments[i].position.y
      ) {
        return true;
      }
    }

    return false;
  };

  public detectedFood = (food: Food): boolean => {
    let head = this.segments[0];

    if (
      head.position.x === food.segment.position.x &&
      head.position.y === food.segment.position.y
    ) {
      return true;
    }

    return false;
  };

  public getSegments = (): Square[] => {
    return this.segments;
  };
}

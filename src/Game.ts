import { generatePosition } from "./helpers/helpers";
import { Direction, IPosition } from "./interfaces/interfaces";
import { Food } from "./objects/Food";
import { Snake } from "./objects/Snake";

export class Game {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private scoreboardHTML: HTMLDivElement;

  //frame settings
  private stop = false;
  private frameCount: number = 0;
  private fps: number;
  private now: number;
  private fpsInterval: number;
  private startTime: number;
  private then: number;
  private elapsed: number;

  //contollers
  private direction: Direction = Direction.Down;
  private pressedKeys: string[] = [];

  // game objects
  private snake: Snake;
  private food: Food;
  private score = 0;

  //settings
  private moveRange: number;

  constructor(moveRange: number) {
    let canvas = document.getElementById("canvas") as HTMLCanvasElement;
    let context = canvas.getContext("2d");
    let scoreboardHTML = document.getElementById(
      "scoreboard"
    ) as HTMLDivElement;

    canvas.width = moveRange * 25;
    canvas.height = moveRange * 25;

    this.canvas = canvas;
    this.context = context;
    this.scoreboardHTML = scoreboardHTML;

    this.moveRange = moveRange;
    this.createUserEvents();
    this.start();
    this.startAnimating(10);
  }

  private startAnimating = (fps: number) => {
    this.fpsInterval = 1000 / fps;
    this.then = Date.now();
    this.startTime = this.then;
    this.animate();
  };

  private animate = () => {
    if (this.stop) {
      return;
    }

    requestAnimationFrame(this.animate);

    this.now = Date.now();
    this.elapsed = this.now - this.then;

    if (this.elapsed > this.fpsInterval) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.then = this.now - (this.elapsed % this.fpsInterval);

      this.setDirection();
      this.snake.recalculateSegments(this.direction);

      if (this.snake.detectedFood(this.food)) {
        this.snake.addSegment(this.direction);
        this.food.generateApple(this.snake, this.canvas, this.moveRange);
        this.score++;
        this.showScore();
      }

      if (this.snake.detectCollisions(this.canvas)) this.start();
      // this.setDirection();
      this.redraw();
    }
  };

  private start = () => {
    this.score = 0;
    this.snake = new Snake(
      {
        x: generatePosition(this.moveRange, 0, this.canvas.width),
        y: generatePosition(this.moveRange, 0, this.canvas.height),
      } as IPosition,
      this.moveRange
    );
    this.food = new Food(this.moveRange);
    this.food.generateApple(this.snake, this.canvas, this.moveRange);
    this.showScore();
  };

  private redraw = () => {
    //background
    for (let i = 0; i < this.canvas.width; i += this.moveRange) {
      for (let j = 0; j < this.canvas.height; j += this.moveRange) {
        this.context.beginPath();
        this.context.lineWidth = 0.5;
        this.context.strokeStyle = "#fff";
        this.context.rect(i, j, this.moveRange, this.moveRange);
        this.context.stroke();
      }
    }

    //food
    this.context.beginPath();
    this.context.fillStyle = this.food.segment.color;
    this.context.fillRect(
      this.food.segment.position.x,
      this.food.segment.position.y,
      this.food.segment.width,
      this.food.segment.height
    );

    //snake
    let segments = this.snake.getSegments();
    for (let i = segments.length - 1; i >= 0; i--) {
      this.context.beginPath();
      this.context.fillStyle = segments[i].color;
      this.context.fillRect(
        segments[i].position.x,
        segments[i].position.y,
        segments[i].width,
        segments[i].height
      );
    }
  };

  //events
  private createUserEvents = () => {
    window.addEventListener("keydown", this.pressKeyEventHandler);
    // window.addEventListener("keyup", this.releaseKeyEventHanlde);
  };

  private pressKeyEventHandler = (e: KeyboardEvent) => {
    this.pressedKeys = [];
    const key = e.key.toLowerCase();

    const find = this.pressedKeys.indexOf(key);
    if (find <= -1) this.pressedKeys.push(key);
  };
  private setDirection = (): void => {
    if (this.pressedKeys.length !== 1) return;

    if (this.pressedKeys[0] === "w" && this.direction != Direction.Down)
      this.direction = Direction.Up;
    else if (this.pressedKeys[0] === "s" && this.direction != Direction.Up)
      this.direction = Direction.Down;
    else if (this.pressedKeys[0] === "a" && this.direction != Direction.Right)
      this.direction = Direction.Left;
    else if (this.pressedKeys[0] === "d" && this.direction != Direction.Left)
      this.direction = Direction.Right;
  };

  private showScore = (): void => {
    let scoreboard = this.scoreboardHTML;

    let result = scoreboard.getElementsByClassName("result")[0];
    result.innerHTML = this.score.toString();
  };
}

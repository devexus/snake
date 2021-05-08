export declare class Game {
    private canvas;
    private context;
    private scoreboardHTML;
    private stop;
    private frameCount;
    private fps;
    private now;
    private fpsInterval;
    private startTime;
    private then;
    private elapsed;
    private direction;
    private pressedKeys;
    private snake;
    private food;
    private score;
    private moveRange;
    constructor(moveRange: number);
    private startAnimating;
    private animate;
    private start;
    private redraw;
    private createUserEvents;
    private pressKeyEventHandler;
    private setDirection;
    private showScore;
}

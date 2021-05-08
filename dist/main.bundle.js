!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var i = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            o,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return o;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 6));
})([
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function () {
      return function (e, t, n) {
        (this.position = e),
          (this.height = n),
          (this.width = n),
          (this.color = t);
      };
    })();
    t.Square = o;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e[(e.Up = 0)] = "Up"),
          (e[(e.Down = 1)] = "Down"),
          (e[(e.Left = 2)] = "Left"),
          (e[(e.Right = 3)] = "Right");
      })(t.Direction || (t.Direction = {}));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.generatePosition = function (e, t, n) {
        (t = Math.ceil(t)), (n = Math.floor(n));
        var o = -1;
        do {
          o = Math.floor(Math.random() * (n - t)) + t;
        } while (o % e);
        return o;
      });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n(1),
      i = n(0),
      s = (function () {
        return function (e, t) {
          var n = this;
          (this.segments = []),
            (this.addSegment = function (e) {
              var t = n.segments[n.segments.length - 1],
                s = new i.Square(null, "#1dea53", n.moveRange);
              if (n.segments.length < 2)
                switch (e) {
                  case o.Direction.Up:
                    s.position = {
                      x: t.position.x,
                      y: t.position.y + n.moveRange,
                    };
                    break;
                  case o.Direction.Down:
                    s.position = {
                      x: t.position.x,
                      y: t.position.y - n.moveRange,
                    };
                    break;
                  case o.Direction.Left:
                    s.position = {
                      x: t.position.x + n.moveRange,
                      y: t.position.y,
                    };
                    break;
                  case o.Direction.Right:
                    s.position = {
                      x: t.position.x - n.moveRange,
                      y: t.position.y,
                    };
                }
              else {
                var r = n.segments[n.segments.length - 2];
                r.position.x === t.position.x && r.position.y < t.position.y
                  ? (s.position = {
                      x: t.position.x,
                      y: t.position.y + n.moveRange,
                    })
                  : r.position.x === t.position.x && r.position.y > t.position.y
                  ? (s.position = {
                      x: t.position.x,
                      y: t.position.y - n.moveRange,
                    })
                  : r.position.x < t.position.x && r.position.y === t.position.y
                  ? (s.position = {
                      x: t.position.x + n.moveRange,
                      y: t.position.y,
                    })
                  : r.position.x > t.position.x &&
                    r.position.y === t.position.y &&
                    (s.position = {
                      x: t.position.x - n.moveRange,
                      y: t.position.y,
                    });
              }
              null != s && n.segments.push(s);
            }),
            (this.recalculateSegments = function (e) {
              for (
                var t = n.segments[0].position, i = 1;
                i < n.segments.length;
                i++
              ) {
                var s = t;
                (t = n.segments[i].position), (n.segments[i].position = s);
              }
              switch (e) {
                case o.Direction.Up:
                  n.segments[0].position = {
                    x: n.segments[0].position.x,
                    y: n.segments[0].position.y - n.moveRange,
                  };
                  break;
                case o.Direction.Down:
                  n.segments[0].position = {
                    x: n.segments[0].position.x,
                    y: n.segments[0].position.y + n.moveRange,
                  };
                  break;
                case o.Direction.Left:
                  n.segments[0].position = {
                    x: n.segments[0].position.x - n.moveRange,
                    y: n.segments[0].position.y,
                  };
                  break;
                case o.Direction.Right:
                  n.segments[0].position = {
                    x: n.segments[0].position.x + n.moveRange,
                    y: n.segments[0].position.y,
                  };
              }
            }),
            (this.detectCollisions = function (e) {
              var t = n.segments,
                o = t[0];
              if (
                o.position.y < 0 ||
                o.position.y >= e.height ||
                o.position.x < 0 ||
                o.position.x >= e.width
              )
                return !0;
              for (var i = 1; i < t.length; i++)
                if (
                  o.position.x === t[i].position.x &&
                  o.position.y === t[i].position.y
                )
                  return !0;
              return !1;
            }),
            (this.detectedFood = function (e) {
              var t = n.segments[0];
              return (
                t.position.x === e.segment.position.x &&
                t.position.y === e.segment.position.y
              );
            }),
            (this.getSegments = function () {
              return n.segments;
            }),
            (this.moveRange = t),
            this.segments.push(new i.Square(e, "#000000", this.moveRange));
        };
      })();
    t.Snake = s;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n(2),
      i = n(0),
      s = (function () {
        return function (e) {
          var t = this;
          (this.generateApple = function (e, n, i) {
            var s,
              r = e.getSegments(),
              a = !1;
            do {
              (a = !1),
                (s = {
                  x: o.generatePosition(i, 0, n.width),
                  y: o.generatePosition(i, 0, n.height),
                });
              for (var c = 0; c < r.length; c++)
                r[c].position.x === s.x && r[c].position.y == s.y && (a = !0);
            } while (a);
            t.segment.position = s;
          }),
            (this.segment = new i.Square(null, "#ff2200", e));
        };
      })();
    t.Food = s;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n(2),
      i = n(1),
      s = n(4),
      r = n(3),
      a = (function () {
        return function (e) {
          var t = this;
          (this.stop = !1),
            (this.frameCount = 0),
            (this.direction = i.Direction.Down),
            (this.pressedKeys = []),
            (this.score = 0),
            (this.startAnimating = function (e) {
              (t.fpsInterval = 1e3 / e),
                (t.then = Date.now()),
                (t.startTime = t.then),
                t.animate();
            }),
            (this.animate = function () {
              t.stop ||
                (requestAnimationFrame(t.animate),
                (t.now = Date.now()),
                (t.elapsed = t.now - t.then),
                t.elapsed > t.fpsInterval &&
                  (t.context.clearRect(0, 0, t.canvas.width, t.canvas.height),
                  (t.then = t.now - (t.elapsed % t.fpsInterval)),
                  t.snake.recalculateSegments(t.direction),
                  t.snake.detectedFood(t.food) &&
                    (t.snake.addSegment(t.direction),
                    t.food.generateApple(t.snake, t.canvas, t.moveRange),
                    t.score++,
                    t.showScore()),
                  t.snake.detectCollisions(t.canvas) && t.start(),
                  t.redraw()));
            }),
            (this.start = function () {
              (t.score = 0),
                (t.snake = new r.Snake(
                  {
                    x: o.generatePosition(t.moveRange, 0, t.canvas.width),
                    y: o.generatePosition(t.moveRange, 0, t.canvas.height),
                  },
                  t.moveRange
                )),
                (t.food = new s.Food(t.moveRange)),
                t.food.generateApple(t.snake, t.canvas, t.moveRange),
                t.showScore();
            }),
            (this.redraw = function () {
              for (var e = 0; e < t.canvas.width; e += t.moveRange)
                for (var n = 0; n < t.canvas.height; n += t.moveRange)
                  t.context.beginPath(),
                    t.context.rect(e, n, t.moveRange, t.moveRange),
                    t.context.stroke();
              t.context.beginPath(),
                (t.context.fillStyle = t.food.segment.color),
                t.context.fillRect(
                  t.food.segment.position.x,
                  t.food.segment.position.y,
                  t.food.segment.width,
                  t.food.segment.height
                );
              var o = t.snake.getSegments();
              for (e = o.length - 1; e >= 0; e--)
                t.context.beginPath(),
                  (t.context.fillStyle = o[e].color),
                  t.context.fillRect(
                    o[e].position.x,
                    o[e].position.y,
                    o[e].width,
                    o[e].height
                  );
            }),
            (this.createUserEvents = function () {
              window.addEventListener("keydown", t.pressKeyEventHandler),
                window.addEventListener("keyup", t.releaseKeyEventHanlde);
            }),
            (this.pressKeyEventHandler = function (e) {
              console.log(e);
              var n = e.key.toLowerCase();
              t.pressedKeys.indexOf(n) <= -1 && t.pressedKeys.push(n),
                t.setDirection();
            }),
            (this.releaseKeyEventHanlde = function (e) {
              var n = e.key.toLowerCase(),
                o = t.pressedKeys.indexOf(n);
              o > -1 && t.pressedKeys.splice(o, 1), t.setDirection();
            }),
            (this.setDirection = function () {
              1 === t.pressedKeys.length &&
                ("w" === t.pressedKeys[0] && t.direction != i.Direction.Down
                  ? (t.direction = i.Direction.Up)
                  : "s" === t.pressedKeys[0] && t.direction != i.Direction.Up
                  ? (t.direction = i.Direction.Down)
                  : "a" === t.pressedKeys[0] && t.direction != i.Direction.Right
                  ? (t.direction = i.Direction.Left)
                  : "d" === t.pressedKeys[0] &&
                    t.direction != i.Direction.Left &&
                    (t.direction = i.Direction.Right));
            }),
            (this.showScore = function () {
              t.scoreboardHTML.getElementsByClassName(
                "result"
              )[0].innerHTML = t.score.toString();
            });
          var n = document.getElementById("canvas"),
            a = n.getContext("2d"),
            c = document.getElementById("scoreboard");
          (n.width = 25 * e),
            (n.height = 25 * e),
            (a.lineCap = "round"),
            (a.lineJoin = "round"),
            (a.strokeStyle = "black"),
            (a.lineWidth = 0.2),
            (this.canvas = n),
            (this.context = a),
            (this.scoreboardHTML = c),
            (this.moveRange = e),
            this.createUserEvents(),
            this.start(),
            this.startAnimating(10);
        };
      })();
    t.Game = a;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), new (n(5).Game)(20);
  },
]);
//# sourceMappingURL=main.bundle.js.map

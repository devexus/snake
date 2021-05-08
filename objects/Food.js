"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Food = void 0;

var _helpers = require("../helpers/helpers");

var _Square = require("./Square");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Food = function Food(_moveRange) {
  var _this = this;

  _classCallCheck(this, Food);

  _defineProperty(this, "segment", void 0);

  _defineProperty(this, "generateApple", function (snake, canvas, moveRange) {
    var segments = snake.getSegments();
    var position;
    var detected = false;

    do {
      detected = false;
      position = {
        x: (0, _helpers.generatePosition)(moveRange, 0, canvas.width),
        y: (0, _helpers.generatePosition)(moveRange, 0, canvas.height)
      };

      for (var i = 0; i < segments.length; i++) {
        if (segments[i].position.x === position.x && segments[i].position.y == position.y) {
          detected = true;
        }
      }
    } while (detected);

    _this.segment.position = position;
  });

  this.segment = new _Square.Square(null, "#FF6A88", _moveRange);
};

exports.Food = Food;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vYmplY3RzL0Zvb2QudHMiXSwibmFtZXMiOlsiRm9vZCIsIm1vdmVSYW5nZSIsInNuYWtlIiwiY2FudmFzIiwic2VnbWVudHMiLCJnZXRTZWdtZW50cyIsInBvc2l0aW9uIiwiZGV0ZWN0ZWQiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwiaSIsImxlbmd0aCIsInNlZ21lbnQiLCJTcXVhcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7Ozs7O0lBRWFBLEksR0FHWCxjQUFZQyxVQUFaLEVBQStCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEseUNBSVIsVUFDckJDLEtBRHFCLEVBRXJCQyxNQUZxQixFQUdyQkYsU0FIcUIsRUFJbEI7QUFDSCxRQUFJRyxRQUFRLEdBQUdGLEtBQUssQ0FBQ0csV0FBTixFQUFmO0FBRUEsUUFBSUMsUUFBSjtBQUVBLFFBQUlDLFFBQVEsR0FBRyxLQUFmOztBQUNBLE9BQUc7QUFDREEsTUFBQUEsUUFBUSxHQUFHLEtBQVg7QUFDQUQsTUFBQUEsUUFBUSxHQUFHO0FBQ1RFLFFBQUFBLENBQUMsRUFBRSwrQkFBaUJQLFNBQWpCLEVBQTRCLENBQTVCLEVBQStCRSxNQUFNLENBQUNNLEtBQXRDLENBRE07QUFFVEMsUUFBQUEsQ0FBQyxFQUFFLCtCQUFpQlQsU0FBakIsRUFBNEIsQ0FBNUIsRUFBK0JFLE1BQU0sQ0FBQ1EsTUFBdEM7QUFGTSxPQUFYOztBQUtBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1IsUUFBUSxDQUFDUyxNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUEwQztBQUN4QyxZQUNFUixRQUFRLENBQUNRLENBQUQsQ0FBUixDQUFZTixRQUFaLENBQXFCRSxDQUFyQixLQUEyQkYsUUFBUSxDQUFDRSxDQUFwQyxJQUNBSixRQUFRLENBQUNRLENBQUQsQ0FBUixDQUFZTixRQUFaLENBQXFCSSxDQUFyQixJQUEwQkosUUFBUSxDQUFDSSxDQUZyQyxFQUdFO0FBQ0FILFVBQUFBLFFBQVEsR0FBRyxJQUFYO0FBQ0Q7QUFDRjtBQUNGLEtBZkQsUUFlU0EsUUFmVDs7QUFpQkEsSUFBQSxLQUFJLENBQUNPLE9BQUwsQ0FBYVIsUUFBYixHQUF3QkEsUUFBeEI7QUFDRCxHQWhDOEI7O0FBQzdCLE9BQUtRLE9BQUwsR0FBZSxJQUFJQyxjQUFKLENBQVcsSUFBWCxFQUFpQixTQUFqQixFQUE0QmQsVUFBNUIsQ0FBZjtBQUNELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZW5lcmF0ZVBvc2l0aW9uIH0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBJUG9zaXRpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IFNuYWtlIH0gZnJvbSBcIi4vU25ha2VcIjtcclxuaW1wb3J0IHsgU3F1YXJlIH0gZnJvbSBcIi4vU3F1YXJlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9vZCB7XHJcbiAgcHVibGljIHNlZ21lbnQ6IFNxdWFyZTtcclxuXHJcbiAgY29uc3RydWN0b3IobW92ZVJhbmdlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuc2VnbWVudCA9IG5ldyBTcXVhcmUobnVsbCwgXCIjRkY2QTg4XCIsIG1vdmVSYW5nZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2VuZXJhdGVBcHBsZSA9IChcclxuICAgIHNuYWtlOiBTbmFrZSxcclxuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXHJcbiAgICBtb3ZlUmFuZ2U6IG51bWJlclxyXG4gICkgPT4ge1xyXG4gICAgbGV0IHNlZ21lbnRzID0gc25ha2UuZ2V0U2VnbWVudHMoKTtcclxuXHJcbiAgICBsZXQgcG9zaXRpb246IElQb3NpdGlvbjtcclxuXHJcbiAgICBsZXQgZGV0ZWN0ZWQgPSBmYWxzZTtcclxuICAgIGRvIHtcclxuICAgICAgZGV0ZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgcG9zaXRpb24gPSB7XHJcbiAgICAgICAgeDogZ2VuZXJhdGVQb3NpdGlvbihtb3ZlUmFuZ2UsIDAsIGNhbnZhcy53aWR0aCksXHJcbiAgICAgICAgeTogZ2VuZXJhdGVQb3NpdGlvbihtb3ZlUmFuZ2UsIDAsIGNhbnZhcy5oZWlnaHQpLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHNlZ21lbnRzW2ldLnBvc2l0aW9uLnggPT09IHBvc2l0aW9uLnggJiZcclxuICAgICAgICAgIHNlZ21lbnRzW2ldLnBvc2l0aW9uLnkgPT0gcG9zaXRpb24ueVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgZGV0ZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSB3aGlsZSAoZGV0ZWN0ZWQpO1xyXG5cclxuICAgIHRoaXMuc2VnbWVudC5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gIH07XHJcbn1cclxuIl19
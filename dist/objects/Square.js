"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Square = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Square = function Square(position, color, moveRange) {
  _classCallCheck(this, Square);

  _defineProperty(this, "position", void 0);

  _defineProperty(this, "height", void 0);

  _defineProperty(this, "width", void 0);

  _defineProperty(this, "color", void 0);

  this.position = position;
  this.height = moveRange;
  this.width = moveRange;
  this.color = color;
};

exports.Square = Square;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vYmplY3RzL1NxdWFyZS50cyJdLCJuYW1lcyI6WyJTcXVhcmUiLCJwb3NpdGlvbiIsImNvbG9yIiwibW92ZVJhbmdlIiwiaGVpZ2h0Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBRWFBLE0sR0FNWCxnQkFBWUMsUUFBWixFQUFpQ0MsS0FBakMsRUFBZ0RDLFNBQWhELEVBQW1FO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2pFLE9BQUtGLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsT0FBS0csTUFBTCxHQUFjRCxTQUFkO0FBQ0EsT0FBS0UsS0FBTCxHQUFhRixTQUFiO0FBQ0EsT0FBS0QsS0FBTCxHQUFhQSxLQUFiO0FBQ0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElQb3NpdGlvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcXVhcmUge1xyXG4gIHB1YmxpYyBwb3NpdGlvbjogSVBvc2l0aW9uO1xyXG4gIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcclxuICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcclxuICBwdWJsaWMgY29sb3I6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocG9zaXRpb246IElQb3NpdGlvbiwgY29sb3I6IHN0cmluZywgbW92ZVJhbmdlOiBudW1iZXIpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIHRoaXMuaGVpZ2h0ID0gbW92ZVJhbmdlO1xyXG4gICAgdGhpcy53aWR0aCA9IG1vdmVSYW5nZTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICB9XHJcbn1cclxuIl19
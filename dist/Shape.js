"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(name, color) {
        this._name = name;
        this._color = color;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
}
exports.Shape = Shape;

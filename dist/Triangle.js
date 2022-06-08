"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
const Shape_1 = require("./Shape");
class Triangle extends Shape_1.Shape {
    constructor(name, color, side1, side2, side3) {
        super(name, color);
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
    }
    get side1() {
        return this._side1;
    }
    set side1(value) {
        this._side1 = value;
    }
    get side2() {
        return this._side2;
    }
    set side2(value) {
        this._side2 = value;
    }
    get side3() {
        return this._side3;
    }
    set side3(value) {
        this._side3 = value;
    }
    get Perimeter() {
        return (this._side1 + this._side2 + this._side3);
    }
    get Area() {
        return (Math.sqrt((this.Perimeter / 2) * ((this.Perimeter / 2) - this._side1) *
            ((this.Perimeter / 2) - this._side2) * ((this.Perimeter / 2) - this._side3)));
    }
}
exports.Triangle = Triangle;

import { NLerp } from "../GlobalFuncs";

export class Vector2 {

    public static Add(a: Vector2, b: Vector2): Vector2 {
        const c = a.clone();
        c.Add(b);
        return c;
    }

    public static Sub(a: Vector2, b: Vector2): Vector2 {
        const c = a.clone();
        c.Sub(b);
        return c;
    }

    public static Mul(a: Vector2, b: number | Vector2): Vector2 {
        const c = a.clone();
        c.Mul(b);
        return c;
    }

    public static Div(a: Vector2, b: number | Vector2): Vector2 {
        const c = a.clone();
        c.Div(b);
        return c;
    }

    public static Neg(a: Vector2): Vector2 {
        return new Vector2(-a.x, -a.y);
    }

    public static Equals(a: Vector2, b: Vector2): boolean {
        return Vector2.Distance(a, b) < 0.0000001;
    }

    public static Distance(a: Vector2, b: Vector2): number {
        return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
    }

    public static Normalize(a: Vector2): Vector2 {
        const c = a.clone();
        c.normalize();
        return c;
    }

    /**
     * Creates a new Vector2 with values (0, 0)
     */
    public static Zero(): Vector2 {
        return new Vector2(0, 0);
    }

    /**
     * Linearly interpolates between two vectors
     * @param from result at t = 0
     * @param to result at t = 1
     * @param t interpolation parameter
     */
    public static lerp(from: Vector2, to: Vector2, t: number) {
        return new Vector2(
            NLerp(from.x, to.x, t),
            NLerp(from.y, to.y, t),
        );
    }

    /**
     * The length of the vector
     */
    public get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * Square of the length of the vector
     */
    get lengthSquared() {
        return this.x * this.x + this.y * this.y;
    }

    /**
     * Angle of the vector in radians
     */
    get angle() {
        return Math.atan2(this.y, this.x);
    }
    /**
     * Creates a new Vector2
     * @param x the `x` component of the vector
     * @param y the `y` component of the vector
     */
    constructor(
        public x: number,
        public y: number,
    ) {

    }

    /**
     * Creates a new Vector2 with values from this vector
     */
    public clone(): Vector2 {
        return new Vector2(this.x, this.y);
    }

    /**
     * Sets the values of the vector
     * @param x the new value of the `x` component
     * @param y the new value of the `y` component
     */
    public set(x: number, y: number): this;
    /**
     * Sets the values of the vector
     * @param value source of the vector values
     */
    public set(value: Vector2): this;
    public set(x: number | Vector2, y?: number) {
        if (typeof x !== "number") {
            this.x = x.x;
            this.y = x.y;
        } else {
            this.x = x;
            this.y = y as number;
        }
        return this;
    }

    /**
     * Compares two vectors, optionally within some margin of error
     * @param value another vector
     * @param precision margin of error
     */
    public equals(value: Vector2, precision?: number) {
        if (precision !== undefined) {
            return Math.abs(this.x - value.x) <= precision &&
                Math.abs(this.y - value.y) <= precision;
        } else {
            return this.x === value.x && this.y === value.y;
        }
    }

    /**
     * Add a vector or scalar to this vector
     * @param value the value to add
     */
    public Add(value: number | Vector2): Vector2 {
        if (typeof value === "number") {
            this.x += value;
            this.y += value;
        } else {
            this.x += value.x;
            this.y += value.y;
        }
        return this;
    }

    /**
     * Subtract a vector or scalar from this vector
     * @param value the value to subtract
     */
    public Sub(value: number | Vector2): Vector2 {
        if (typeof value === "number") {
            this.x -= value;
            this.y -= value;
        } else {
            this.x -= value.x;
            this.y -= value.y;
        }
        return this;
    }

    /**
     * Multiply this vector by a vector or scalar
     * @param value the value to subtract
     */
    public Mul(value: number | Vector2): Vector2 {
        if (typeof value === "number") {
            this.x *= value;
            this.y *= value;
        } else {
            this.x *= value.x;
            this.y *= value.y;
        }
        return this;
    }

    /**
     * Divide this vector by a vector or scalar
     * @param value the value to subtract
     */
    public Div(value: number | Vector2): Vector2 {
        if (typeof value === "number") {
            this.x /= value;
            this.y /= value;
        } else {
            this.x /= value.x;
            this.y /= value.y;
        }
        return this;
    }

    /**
     * Add a premultiplied vector to this vector
     * @param add the vector to be premultiplied and added
     * @param mul the value to multiply by
     */
    public mulAdd(add: Vector2, mul: number | Vector2) {
        if (typeof mul === "number") {
            this.x += add.x * mul;
            this.y += add.y * mul;
        } else {
            this.x += add.x * mul.x;
            this.y += add.y * mul.y;
        }
        return this;
    }

    /**
     * Set the length of this vector while keeping its rotation. If the vector
     * has length 0 it does not change
     * @param length the new length
     */
    public setLength(length: number) {
        return this.setLengthSquared(length * length);
    }

    /**
     * Set the square of the length of this vector while keeping its rotation.
     * If the vector has length 0 it does not change
     * @param length the new length
     */
    public setLengthSquared(value: number) {
        const oldValue = this.lengthSquared;
        return (oldValue === 0 || oldValue === value)
            ? this
            : this.Mul(Math.sqrt(value / oldValue));
    }

    /**
     * Set the length of this vector to 1. If the vector has length 0 it does
     * not change
     * @param length the new length
     */
    public normalize() {
        return this.setLengthSquared(1);
    }

    /**
     * Compute the distance between two vectors
     * @param other the other vector
     */
    public distanceTo(other: Vector2) {
        return this.clone().Sub(other).length;
    }

    /**
     * Compute the square of the distance between two vectors
     * @param other the other vector
     */
    public distanceSquaredTo(other: Vector2) {
        return this.clone().Sub(other).lengthSquared;
    }

    /**
     * Calculates the dot product of two vectors
     * @param other the other vector
     */
    public dot(other: Vector2) {
        return this.x * other.x + this.y * other.y;
    }

    /**
     * Calculates the cross product of two vectors
     * @param other the other vector
     */
    public cross(other: Vector2) {
        return this.x * other.y - this.y * other.x;
    }

    /**
     * Calculates the angle between two vectors in radians
     * @param other the other vector
     */
    public angleTo(other: Vector2) {
        return Math.atan2(this.cross(other), this.dot(other));
    }

    /**
     * Return a string representation of this vector.
     * E.g. `new Vector2(1, 2).toString() === '(1, 2)'`
     */
    public toString() {
        return `(${this.x}, ${this.y})`;
    }
}

import { NClamp, NLerp } from "../GlobalFuncs";

export class Vector2 {

    /**
     * Returns the length of this vector (Read Only).
     *
     * The length of the vector is square root of (x\*x+y\*y).
     *
     * If you only need to compare magnitudes of some vectors, you can compare squared magnitudes of them using sqrMagnitude (computing squared magnitudes is faster).
     */
    public get magnitude(): float {
        return Math.sqrt(this.sqrMagnitude);
    }

    /**
     * Returns this vector with a magnitude of 1 (Read Only).
     *
     * When normalized, a vector keeps the same direction but its length is 1.0.
     *
     * Note that the current vector is unchanged and a new normalized vector is returned. If you want to normalize the current vector, use Normalize function.
     *
     * If the vector is too small to be normalized a zero vector will be returned.
     * @see Normalize
     */
    public get normalized(): Vector2 {
        const v = Vector2.Clone(this);
        v.Normalize();
        return v;
    }

    /**
     * Returns the squared length of this vector (Read Only).
     *
     * Calculating the squared magnitude instead of the magnitude is much faster. Often if you are comparing magnitudes of two vectors you can just compare their squared magnitudes.
     * @see magnitude
     */
    public get sqrMagnitude(): float {
        const x = this.x;
        const y = this.y;
        return x * x + y * y;
    }

    /**
     * Angle of the vector in radians
     */
    public get eulerAngle(): float {
        return Math.atan2(this.y, this.x);
    }

    /**
     * Creates a new Vector2 with values from this vector
     */
    public static Clone(this: void, v: Vector2): Vector2 {
        return new Vector2(v.x, v.y);
    }

    public static Add(this: void, a: Vector2, b: Vector2): Vector2 {
        return Vector2.Clone(a).Add(b);
    }

    public static Sub(this: void, a: Vector2, b: Vector2): Vector2 {
        return Vector2.Clone(a).Sub(b);
    }

    public static Mul(this: void, a: Vector2, b: number): Vector2 {
        return Vector2.Clone(a).Mul(b);
    }

    public static Div(this: void, a: Vector2, b: number): Vector2 {
        return Vector2.Clone(a).Div(b);
    }

    public static Neg(this: void, a: Vector2): Vector2 {
        return new Vector2(-a.x, -a.y);
    }

    /**
     * Returns the unsigned angle in radians between from and to.
     *
     * The angle returned is the unsigned acute angle between the two vectors. This means the smaller of the two possible angles between the two vectors is used. The result is never greater than 180 degrees.
     * @see SignedAngle
     * @param from
     * @param to
     */
    public static Angle(this: void, from: Vector2, to: Vector2): float {
        let x1 = from.x;
        let y1 = from.y;
        let d = Math.sqrt(x1 * x1 + y1 * y1);
        if (d > 0.0000001) {
            x1 = x1 / d;
            y1 = y1 / d;
        } else {
            x1 = 0;
            y1 = 0;
        }
        let x2 = to.x;
        let y2 = to.y;
        d = Math.sqrt(x2 * x2 + y2 * y2);
        if (d > 0.0000001) {
            x2 = x2 / d;
            y2 = y2 / d;
        } else {
            x2 = 0;
            y2 = 0;
        }
        d = x1 * x2 + y1 * y2;
        if (d < -1) {
            d = -1;
        } else if (d > 1) {
            d = 1;
        }
        return Math.acos(d);
    }

    /**
     * Returns a copy of vector with its magnitude clamped to maxLength.
     * @param vector
     * @param maxLength
     */
    public static ClampMagnitude(this: void, vector: Vector2, maxLength: float): Vector2 {
        let x = vector.x;
        let y = vector.y;
        const sqrMag = x * x + y * y;
        if (sqrMag > maxLength * maxLength) {
            const mag = maxLength / Math.sqrt(sqrMag);
            x = x * mag;
            y = y * mag;
            return new Vector2(x, y);
        }
        return new Vector2(x, y);
    }

    /**
     * Returns the distance between a and b.
     *
     * Vector2.Distance(a,b) is the same as (a-b).magnitude.
     * @param a
     * @param b
     */
    public static Distance(this: void, a: Vector2, b: Vector2): float {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * Dot Product of two vectors.
     *
     * Returns lhs . rhs.
     *
     * For normalized vectors Dot returns 1 if they point in exactly the same direction; -1 if they point in completely opposite directions; and a number in between for other cases (e.g. Dot returns zero if vectors are perpendicular).
     *
     * For vectors of arbitrary length the Dot return values are similar: they get larger when the angle between vectors decreases.
     * @param lhs
     * @param rhs
     */
    public static Dot(this: void, lhs: Vector2, rhs: Vector2): float {
        return lhs.x * rhs.x + lhs.y * rhs.y;
    }

    public static Cross(this: void, lhs: Vector2, rhs: Vector2): float {
        return lhs.x * rhs.y - lhs.y * rhs.x;
    }

    /**
     * Linearly interpolates between vectors a and b by t.
     *
     * The parameter t is clamped to the range [0, 1].
     *
     * When t = 0 returns a.
     *
     * When t = 1 return b.
     *
     * When t = 0.5 returns the midpoint of a and b.
     * @see LerpUnclamped
     * @param a
     * @param b
     * @param t
     */
    public static Lerp(this: void, a: Vector2, b: Vector2, t: number): Vector2 {
        t = NClamp(t, 0, 1);
        return new Vector2(
            NLerp(a.x, b.x, t),
            NLerp(a.y, b.y, t),
        );
    }

    /**
     *  Linearly interpolates between vectors a and b by *.
     *
     *  When t = 0 returns a.
     *
     *  When t = 1 return b.
     *
     *  When t = 0.5 returns the midpoint of a and b.
     * @param a
     * @param b
     * @param t
     */
    public static LerpUnclamped(this: void, a: Vector2, b: Vector2, t: number): Vector2 {
        return new Vector2(
            NLerp(a.x, b.x, t),
            NLerp(a.y, b.y, t),
        );
    }

    /**
     * Returns a vector that is made from the largest components of two vectors.
     * @see Min
     * @param lhs
     * @param rhs
     */
    public static Max(this: void, lhs: Vector2, rhs: Vector2): Vector2 {
        return new Vector2(
            Math.max(lhs.x, rhs.x),
            Math.max(lhs.y, rhs.y),
        );
    }

    /**
     * Returns a vector that is made from the smallest components of two vectors.
     * @see Max
     * @param lhs
     * @param rhs
     */
    public static Min(this: void, lhs: Vector2, rhs: Vector2): Vector2 {
        return new Vector2(
            Math.min(lhs.x, rhs.x),
            Math.min(lhs.y, rhs.y),
        );
    }

    /**
     * Moves a point current towards target.
     *
     * This is essentially the same as Vector2.Lerp but instead the function will ensure that the distance never exceeds maxDistanceDelta. Negative values of maxDistanceDelta pushes the vector away from target.
     * @param current
     * @param target
     * @param maxDistanceDelta
     */
    public static MoveTowards(this: void, current: Vector2, target: Vector2, maxDistanceDelta: float): Vector2 {
        const cx = current.x;
        const cy = current.y;
        const x = target.x - cx;
        const y = target.y - cy;
        let s = x * x + y * y;
        if (s > maxDistanceDelta * maxDistanceDelta && s !== 0) {
            s = maxDistanceDelta / Math.sqrt(s);
            return new Vector2(cx + x * s, cy + y * s);
        }
        return Vector2.Clone(target);
    }

    /**
     * Returns the 2D vector perpendicular to this 2D vector. The result is always rotated 90-degrees in a counter-clockwise direction for a 2D coordinate system where the positive Y axis goes up.
     * @param inDirection The input direction.
     * @returns The perpendicular direction.
     */
    public static Perpendicular(this: void, inDirection: Vector2): Vector2 {
        return new Vector2(-inDirection.y, inDirection.x);
    }

    /**
     * Reflects a vector off the vector defined by a normal.
     * @param inDirection
     * @param inNormal
     */
    public static Reflect(this: void, inDirection: Vector2, inNormal: Vector2): Vector2 {
        const dx = inDirection.x;
        const dy = inDirection.y;
        const nx = inNormal.x;
        const ny = inNormal.y;
        const s = -2 * (dx * nx + dy * ny);
        return new Vector2(s * nx + dx, s * ny + dy);
    }

    /**
     * Multiplies two vectors component-wise.
     *
     * Every component in the result is a component of a multiplied by the same component of b.
     * @param a
     * @param b
     */
    public static Scale(this: void, a: Vector2, b: Vector2): Vector2 {
        return new Vector2(a.x * b.x, a.y * b.y);
    }

    /**
     * Returns the signed angle in degrees between from and to.
     *
     * The angle returned is the signed acute clockwise angle between the two vectors. This means the smaller of the two possible angles between the two vectors is used. The result is never greater than 180 degrees or smaller than -180 degrees.
     * @see Angle
     * @param from The vector from which the angular difference is measured.
     * @param to The vector to which the angular difference is measured.
     */
    public static SignedAngle(this: void, from: Vector2, to: Vector2): float {
        return Math.atan2(Vector2.Cross(from, to), Vector2.Dot(from, to));
    }

    /**
     * Gradually changes a vector towards a desired goal over time.
     *
     * The vector is smoothed by some spring-damper like function, which will never overshoot.
     * @param current The current position.
     * @param target The position we are trying to reach.
     * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
     * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
     * @param maxSpeed Optionally allows you to clamp the maximum speed.
     * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
     */
    // public static SmoothDamp(this: void, current: Vector2, target: Vector2, /* ref*/ currentVelocity: Vector2, smoothTime: float, maxSpeed: float = 99999999, deltaTime: float = 0.0166667): Vector2 {

    // }

    public x: float;
    public y: float;

    /**
     * Creates a new Vector2
     * @param x the `x` component of the vector
     * @param y the `y` component of the vector
     */
    constructor(x?: number, y?: number) {
        this.x = x || 0;
        this.y = y || 0;
    }

    /**
     * Returns true if the given vector is exactly equal to this vector.
     *
     * Due to floating point inaccuracies, this might return false for vectors which are essentially (but not exactly) equal.
     * @param v
     */
    public Equals(v: Vector2): boolean {
        return Math.abs(this.x - v.x) <= 0.0000001 && Math.abs(this.y - v.y) <= 0.0000001;
    }

    /**
     * Makes this vector have a magnitude of 1.
     *
     * When normalized, a vector keeps the same direction but its length is 1.0
     *
     * Note that this function will change the current vector. If you want to keep the current vector unchanged, use normalized variable.
     *
     * If this vector is too small to be normalized it will be set to zero.
     * @see normalized
     */
    public Normalize(): Vector2 {
        const x = this.x;
        const y = this.y;
        const mag = Math.sqrt(x * x + y * y);
        if (mag > 0.0000001) {
            this.x = x / mag;
            this.y = y / mag;
        } else {
            this.x = 0;
            this.y = 0;
        }
        return this;
    }

    /**
     * Set x and y components of an existing Vector2.
     * @param x the new value of the `x` component
     * @param y the new value of the `y` component
     */
    public Set(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    /**
     * Returns a nicely formatted string for this vector.
     */
    public ToString(): string {
        return `(${this.x}, ${this.y})`;
    }

    /**
     * Add a vector or scalar to this vector
     * @param value the value to add
     */
    public Add(value: Vector2): Vector2 {
        this.x += value.x;
        this.y += value.y;
        return this;
    }

    /**
     * Subtract a vector or scalar from this vector
     * @param value the value to subtract
     */
    public Sub(value: Vector2): Vector2 {
        this.x -= value.x;
        this.y -= value.y;
        return this;
    }

    /**
     * Multiply this vector by a vector or scalar
     * @param value the value to subtract
     */
    public Mul(value: number): Vector2 {
        this.x *= value;
        this.y *= value;
        return this;
    }

    /**
     * Divide this vector by a vector or scalar
     * @param value the value to subtract
     */
    public Div(value: number): Vector2 {
        this.x /= value;
        this.y /= value;
        return this;
    }
}

import { geometricObject } from "./geometric";
export declare class ractangle extends geometricObject {
    private width;
    private height;
    constructor(width: number, height: number, color: string, filled: boolean);
    getWidth(): number;
    setWidth(width: number): void;
    getHeight(): number;
    setHeight(height: number): void;
    getArea(): number;
    getPerimeter(): number;
}
//# sourceMappingURL=rectangle.d.ts.map
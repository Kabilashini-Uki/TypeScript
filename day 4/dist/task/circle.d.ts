import { shape } from "./shape";
export declare class circle extends shape {
    private radius;
    constructor(radius: number, color: string, filled: boolean);
    getRadius(): number;
    setRadius(radius: number): void;
    getArea(): number;
    getPerimeter(): number;
    printCircle(): string;
}
//# sourceMappingURL=circle.d.ts.map
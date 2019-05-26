declare class BinaryNode {
    element: BinaryNode | null;
    next: BinaryNode | null;
    constructor(element: BinaryNode | null, next: BinaryNode | null);
}
export default class LinkedList {
    length: number;
    head: BinaryNode | null;
    getSize(): number;
    getHead(): BinaryNode | null;
    add(element: any): void;
    remove(element: any): void;
    isEmpty(): boolean;
    indexOf(element: any): number;
    elementAt(index: number): BinaryNode | null | void;
    addAt(index: number, element: BinaryNode): boolean | void;
    removeAt(index: number): BinaryNode | null | void;
}
export {};

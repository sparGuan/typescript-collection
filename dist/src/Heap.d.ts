export default class MinHeap {
    heap: number[];
    insert(num: number): void;
    remove(): number | null;
    sort(): number[];
}
export declare class MaxHeap {
    heap: number[];
    print: () => number[];
    insert(num: number): void;
    remove(): number | null;
}

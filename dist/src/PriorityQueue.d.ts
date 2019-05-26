export default class PriorityQueue {
    collection: any[];
    printCollection(): void;
    enqueue(element: any): void;
    dequeue(): any;
    first(): any;
    last(): any;
    size(): number;
    isEmpty(): boolean;
}

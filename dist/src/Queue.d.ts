export default class Queue {
    collection: any[];
    print(): void;
    enqueue(element: any): void;
    dequeue(): void;
    first(): any;
    last(): any;
    size(): number;
    isEmpty(): boolean;
}

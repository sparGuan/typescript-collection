export default class Stack {
    count: number;
    storage: {
        [key: number]: number | string;
    };
    push(value: number | string): void;
    pop(): any;
    size(): number;
    peek(): any;
}

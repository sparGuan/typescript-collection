"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor() {
        // 栈 就是可伸缩的json
        this.count = 0;
        this.storage = {};
    }
    // Adds a value onto the end of the stack
    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }
    // Removes and returns the value at the end of the stack
    pop() {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    size() {
        return this.count;
    }
    // Returns the value at the end of the stack
    peek() {
        return this.storage[this.count - 1];
    }
}
exports.default = Stack;

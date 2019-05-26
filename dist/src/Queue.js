"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor() {
        // 执行队列
        this.collection = [];
    }
    print() {
        console.log(this.collection);
    }
    enqueue(element) {
        this.collection.push(element);
    }
    dequeue() {
        return this.collection.shift();
    }
    first() {
        return this.collection[0];
    }
    last() {
        return this.collection[this.collection.length - 1];
    }
    size() {
        return this.collection.length;
    }
    isEmpty() {
        return this.collection.length === 0;
    }
}
exports.default = Queue;

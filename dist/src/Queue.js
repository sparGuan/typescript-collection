"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
        // 执行队列
        this.collection = [];
    }
    Queue.prototype.print = function () {
        console.log(this.collection);
    };
    Queue.prototype.enqueue = function (element) {
        this.collection.push(element);
    };
    Queue.prototype.dequeue = function () {
        return this.collection.shift();
    };
    Queue.prototype.first = function () {
        return this.collection[0];
    };
    Queue.prototype.last = function () {
        return this.collection[this.collection.length - 1];
    };
    Queue.prototype.size = function () {
        return this.collection.length;
    };
    Queue.prototype.isEmpty = function () {
        return this.collection.length === 0;
    };
    return Queue;
}());
exports.default = Queue;

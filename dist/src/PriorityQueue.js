"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.collection = [];
    }
    PriorityQueue.prototype.printCollection = function () {
        console.log(this.collection);
    };
    PriorityQueue.prototype.enqueue = function (element) {
        if (this.isEmpty()) {
            this.collection.push(element);
        }
        else {
            var added = false;
            for (var i = 0; i < this.collection.length; i++) {
                if (element[1] < this.collection[i][1]) {
                    // checking priorities
                    this.collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.collection.push(element);
            }
        }
    };
    PriorityQueue.prototype.dequeue = function () {
        var value = this.collection.shift();
        return value[0];
    };
    PriorityQueue.prototype.first = function () {
        return this.collection[0];
    };
    PriorityQueue.prototype.last = function () {
        return this.collection[this.collection.length - 1];
    };
    PriorityQueue.prototype.size = function () {
        return this.collection.length;
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.collection.length === 0;
    };
    return PriorityQueue;
}());
exports.default = PriorityQueue;

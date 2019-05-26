"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack() {
        // 栈 就是可伸缩的json
        this.count = 0;
        this.storage = {};
    }
    // Adds a value onto the end of the stack
    Stack.prototype.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    };
    // Removes and returns the value at the end of the stack
    Stack.prototype.pop = function () {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    };
    Stack.prototype.size = function () {
        return this.count;
    };
    // Returns the value at the end of the stack
    Stack.prototype.peek = function () {
        return this.storage[this.count - 1];
    };
    return Stack;
}());
exports.default = Stack;

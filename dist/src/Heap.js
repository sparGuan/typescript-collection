"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var MinHeap = /** @class */ (function () {
    function MinHeap() {
        this.heap = [];
    }
    MinHeap.prototype.insert = function (num) {
        var _a;
        this.heap.push(num);
        if (this.heap.length > 2) {
            var idx = this.heap.length - 1;
            while (this.heap[idx] < this.heap[Math.floor(idx / 2)]) {
                if (idx >= 1) {
                    _a = __read([
                        this.heap[idx],
                        this.heap[Math.floor(idx / 2)],
                    ], 2), this.heap[Math.floor(idx / 2)] = _a[0], this.heap[idx] = _a[1];
                    if (Math.floor(idx / 2) > 1) {
                        idx = Math.floor(idx / 2);
                    }
                    else {
                        break;
                    }
                }
            }
        }
    };
    MinHeap.prototype.remove = function () {
        var _a, _b, _c;
        var smallest = this.heap[1];
        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1);
            if (this.heap.length === 3) {
                if (this.heap[1] > this.heap[2]) {
                    _a = __read([this.heap[2], this.heap[1]], 2), this.heap[1] = _a[0], this.heap[2] = _a[1];
                }
                return smallest;
            }
            var i = 1;
            var left = 2 * i;
            var right = 2 * i + 1;
            while (this.heap[i] >= this.heap[left] ||
                this.heap[i] >= this.heap[right]) {
                if (this.heap[left] < this.heap[right]) {
                    _b = __read([this.heap[left], this.heap[i]], 2), this.heap[i] = _b[0], this.heap[left] = _b[1];
                    i = 2 * i;
                }
                else {
                    _c = __read([this.heap[right], this.heap[i]], 2), this.heap[i] = _c[0], this.heap[right] = _c[1];
                    i = 2 * i + 1;
                }
                left = 2 * i;
                right = 2 * i + 1;
                if (this.heap[left] === undefined || this.heap[right] === undefined) {
                    break;
                }
            }
        }
        else if (this.heap.length === 2) {
            this.heap.splice(1, 1);
        }
        else {
            return null;
        }
        return smallest;
    };
    MinHeap.prototype.sort = function () {
        var result = new Array();
        while (this.heap.length > 1) {
            result.push(this.remove());
        }
        return result;
    };
    return MinHeap;
}());
exports.default = MinHeap;
var MaxHeap = /** @class */ (function () {
    function MaxHeap() {
        var _this = this;
        this.heap = [];
        this.print = function () { return _this.heap; };
    }
    MaxHeap.prototype.insert = function (num) {
        var _a;
        this.heap.push(num);
        if (this.heap.length > 2) {
            var idx = this.heap.length - 1;
            while (this.heap[idx] > this.heap[Math.floor(idx / 2)]) {
                if (idx >= 1) {
                    _a = __read([
                        this.heap[idx],
                        this.heap[Math.floor(idx / 2)],
                    ], 2), this.heap[Math.floor(idx / 2)] = _a[0], this.heap[idx] = _a[1];
                    if (Math.floor(idx / 2) > 1) {
                        idx = Math.floor(idx / 2);
                    }
                    else {
                        break;
                    }
                }
            }
        }
    };
    MaxHeap.prototype.remove = function () {
        var _a, _b, _c;
        var smallest = this.heap[1];
        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1);
            if (this.heap.length === 3) {
                if (this.heap[1] < this.heap[2]) {
                    _a = __read([this.heap[2], this.heap[1]], 2), this.heap[1] = _a[0], this.heap[2] = _a[1];
                }
                return smallest;
            }
            var i = 1;
            var left = 2 * i;
            var right = 2 * i + 1;
            while (this.heap[i] <= this.heap[left] ||
                this.heap[i] <= this.heap[right]) {
                if (this.heap[left] > this.heap[right]) {
                    _b = __read([this.heap[left], this.heap[i]], 2), this.heap[i] = _b[0], this.heap[left] = _b[1];
                    i = 2 * i;
                }
                else {
                    _c = __read([this.heap[right], this.heap[i]], 2), this.heap[i] = _c[0], this.heap[right] = _c[1];
                    i = 2 * i + 1;
                }
                left = 2 * i;
                right = 2 * i + 1;
                if (this.heap[left] === undefined || this.heap[right] === undefined) {
                    break;
                }
            }
        }
        else if (this.heap.length === 2) {
            this.heap.splice(1, 1);
        }
        else {
            return null;
        }
        return smallest;
    };
    return MaxHeap;
}());
exports.MaxHeap = MaxHeap;

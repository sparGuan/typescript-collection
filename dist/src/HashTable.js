"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hash = function (str, max) {
    var hashed = 0;
    for (var i = 0; i < str.length; i++) {
        hashed += str.charCodeAt(i);
    }
    return hashed % max;
};
var HashTable = /** @class */ (function () {
    function HashTable() {
        this.storage = [];
        this.storageLimit = 14;
    }
    HashTable.prototype.print = function () {
        console.log(this.storage);
    };
    HashTable.prototype.add = function (key, value) {
        var index = hash(key, this.storageLimit);
        if (this.storage[index] === undefined) {
            this.storage[index] = [[key, value]];
        }
        else {
            var inserted = false;
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                this.storage[index].push([key, value]);
            }
        }
    };
    HashTable.prototype.remove = function (key) {
        var index = hash(key, this.storageLimit);
        if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
            delete this.storage[index];
        }
        else {
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    delete this.storage[index][i];
                }
            }
        }
    };
    HashTable.prototype.lookup = function (key) {
        var index = hash(key, this.storageLimit);
        if (this.storage[index] === undefined) {
            return undefined;
        }
        else {
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    return this.storage[index][i][1];
                }
            }
        }
    };
    return HashTable;
}());
exports.default = HashTable;

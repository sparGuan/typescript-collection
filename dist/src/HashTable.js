"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hash = (str, max) => {
    let hashed = 0;
    for (let i = 0; i < str.length; i++) {
        hashed += str.charCodeAt(i);
    }
    return hashed % max;
};
class HashTable {
    constructor() {
        this.storage = [];
        this.storageLimit = 14;
    }
    print() {
        console.log(this.storage);
    }
    add(key, value) {
        const index = hash(key, this.storageLimit);
        if (this.storage[index] === undefined) {
            this.storage[index] = [[key, value]];
        }
        else {
            let inserted = false;
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                this.storage[index].push([key, value]);
            }
        }
    }
    remove(key) {
        const index = hash(key, this.storageLimit);
        if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
            delete this.storage[index];
        }
        else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    delete this.storage[index][i];
                }
            }
        }
    }
    lookup(key) {
        const index = hash(key, this.storageLimit);
        if (this.storage[index] === undefined) {
            return undefined;
        }
        else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    return this.storage[index][i][1];
                }
            }
        }
    }
}
exports.default = HashTable;

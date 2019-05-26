"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomSet {
    constructor() {
        this.collection = [];
    }
    has(element) {
        return this.collection.indexOf(element) !== -1;
    }
    // this method will return all the values in the set
    values() {
        return this.collection;
    }
    // this method will add an element to the set
    add(element) {
        if (!this.has(element)) {
            this.collection.push(element);
            return true;
        }
        return false;
    }
    // this method will remove an element from a set
    remove(element) {
        if (this.has(element)) {
            const index = this.collection.indexOf(element);
            this.collection.splice(index, 1);
            return true;
        }
        return false;
    }
    // this method will return the size of the collection
    size() {
        return this.collection.length;
    }
    // this method will return the union of two sets
    union(otherSet) {
        const unionSet = new CustomSet();
        const firstSet = this.values();
        const secondSet = otherSet.values();
        firstSet.forEach(e => {
            unionSet.add(e);
        });
        secondSet.forEach((e) => {
            unionSet.add(e);
        });
        return unionSet;
    }
    // this method will return the intersection of two sets as a new set
    intersection(otherSet) {
        const intersectionSet = new CustomSet();
        const firstSet = this.values();
        firstSet.forEach(e => {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }
    // this method will return the difference of two sets as a new set
    difference(otherSet) {
        const differenceSet = new CustomSet();
        const firstSet = this.values();
        firstSet.forEach(e => {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }
    // this method will test if the set is a subset of a different set
    subset(otherSet) {
        const firstSet = this.values();
        return firstSet.every(value => {
            return otherSet.has(value);
        });
    }
}
exports.default = CustomSet;

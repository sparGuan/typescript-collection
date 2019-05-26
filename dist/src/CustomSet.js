"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomSet = /** @class */ (function () {
    function CustomSet() {
        this.collection = [];
    }
    CustomSet.prototype.has = function (element) {
        return this.collection.indexOf(element) !== -1;
    };
    // this method will return all the values in the set
    CustomSet.prototype.values = function () {
        return this.collection;
    };
    // this method will add an element to the set
    CustomSet.prototype.add = function (element) {
        if (!this.has(element)) {
            this.collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set
    CustomSet.prototype.remove = function (element) {
        if (this.has(element)) {
            var index = this.collection.indexOf(element);
            this.collection.splice(index, 1);
            return true;
        }
        return false;
    };
    // this method will return the size of the collection
    CustomSet.prototype.size = function () {
        return this.collection.length;
    };
    // this method will return the union of two sets
    CustomSet.prototype.union = function (otherSet) {
        var unionSet = new CustomSet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function (e) {
            unionSet.add(e);
        });
        secondSet.forEach(function (e) {
            unionSet.add(e);
        });
        return unionSet;
    };
    // this method will return the intersection of two sets as a new set
    CustomSet.prototype.intersection = function (otherSet) {
        var intersectionSet = new CustomSet();
        var firstSet = this.values();
        firstSet.forEach(function (e) {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
    // this method will return the difference of two sets as a new set
    CustomSet.prototype.difference = function (otherSet) {
        var differenceSet = new CustomSet();
        var firstSet = this.values();
        firstSet.forEach(function (e) {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };
    // this method will test if the set is a subset of a different set
    CustomSet.prototype.subset = function (otherSet) {
        var firstSet = this.values();
        return firstSet.every(function (value) {
            return otherSet.has(value);
        });
    };
    return CustomSet;
}());
exports.default = CustomSet;

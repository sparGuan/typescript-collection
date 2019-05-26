"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryNode = /** @class */ (function () {
    function BinaryNode(element, next) {
        this.element = element;
        this.next = next;
        this.element = element;
        this.next = null;
    }
    return BinaryNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
        this.head = null;
    }
    LinkedList.prototype.getSize = function () {
        return this.length;
    };
    LinkedList.prototype.getHead = function () {
        return this.head;
    };
    LinkedList.prototype.add = function (element) {
        var node = new BinaryNode(element, null);
        if (this.head === null) {
            this.head = node;
        }
        else {
            var currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.length++;
    };
    LinkedList.prototype.remove = function (element) {
        var currentNode = this.head;
        var previousNode;
        if (currentNode && currentNode.element === element) {
            this.head = currentNode.next;
        }
        else {
            while (currentNode && currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            if (previousNode && currentNode) {
                previousNode.next = currentNode.next;
            }
        }
        this.length--;
    };
    LinkedList.prototype.isEmpty = function () {
        return this.length === 0;
    };
    LinkedList.prototype.indexOf = function (element) {
        var currentNode = this.head;
        var index = -1;
        while (currentNode) {
            index++;
            if (currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    };
    LinkedList.prototype.elementAt = function (index) {
        var currentNode = this.head;
        var count = 0;
        while (count < index) {
            count++;
            if (currentNode) {
                currentNode = currentNode.next;
            }
        }
        if (currentNode) {
            return currentNode.element;
        }
    };
    LinkedList.prototype.addAt = function (index, element) {
        var node = new BinaryNode(element, null);
        var currentNode = this.head;
        var previousNode;
        var currentIndex = 0;
        if (index > this.length) {
            return false;
        }
        if (index === 0) {
            node.next = currentNode;
            this.head = node;
        }
        else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                if (currentNode) {
                    currentNode = currentNode.next;
                }
            }
            node.next = currentNode;
            if (previousNode) {
                previousNode.next = node;
            }
        }
        this.length++;
    };
    LinkedList.prototype.removeAt = function (index) {
        var currentNode = this.head;
        var previousNode;
        var currentIndex = 0;
        if (index < 0 || index >= this.length) {
            return null;
        }
        if (index === 0 && currentNode) {
            this.head = currentNode.next;
        }
        else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                if (currentNode) {
                    currentNode = currentNode.next;
                }
            }
            if (previousNode && currentNode) {
                previousNode.next = currentNode.next;
            }
        }
        this.length--;
        if (currentNode) {
            return currentNode.element;
        }
    };
    return LinkedList;
}());
exports.default = LinkedList;

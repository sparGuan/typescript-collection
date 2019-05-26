"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryNode = /** @class */ (function () {
    function BinaryNode(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.data = data;
        this.left = left;
        this.right = right;
    }
    return BinaryNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.add = function (data) {
        var node = this.root;
        if (node === null) {
            this.root = new BinaryNode(data, undefined, undefined);
            return;
        }
        else {
            var searchTree_1 = function (node) {
                if (data && node && node.data) {
                    if (data < node.data) {
                        if (node.left === null) {
                            node.left = new BinaryNode(data, undefined, undefined);
                            return;
                        }
                        else if (node.left) {
                            return searchTree_1(node.left);
                        }
                    }
                    else if (data > node.data) {
                        if (node.right === null) {
                            node.right = new BinaryNode(data, undefined, undefined);
                            return;
                        }
                        else if (node.right) {
                            return searchTree_1(node.right);
                        }
                    }
                    else {
                        return null;
                    }
                }
                return searchTree_1(node);
            };
        }
    };
    BinarySearchTree.prototype.findMin = function () {
        var current = this.root;
        while (current && current.left !== null) {
            current = current.left;
        }
        if (current) {
            return current.data;
        }
    };
    BinarySearchTree.prototype.findMax = function () {
        var current = this.root;
        while (current && current.right !== null) {
            current = current.right;
        }
        if (current) {
            return current.data;
        }
    };
    BinarySearchTree.prototype.find = function (data) {
        var current = this.root;
        if (current) {
            while (current && current.data !== data) {
                if (current.data && data < current.data) {
                    current = current.left;
                }
                else {
                    current = current.right;
                }
                if (current === null) {
                    return null;
                }
            }
            return current;
        }
    };
    BinarySearchTree.prototype.isPresent = function (data) {
        var current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (current && data && current.data && data < current.data) {
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
        return false;
    };
    BinarySearchTree.prototype.remove = function (data) {
        var removeNode = function (node, data) {
            if (node == null) {
                return null;
            }
            if (data === node.data) {
                // node has no children
                if (node.left == null && node.right == null) {
                    return null;
                }
                // node has no left child
                if (node.left == null) {
                    return node.right;
                }
                // node has no right child
                if (node.right == null) {
                    return node.left;
                }
                // node has two children
                var tempNode = node.right;
                while (tempNode.left) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            }
            else if (data && node && node.data && data < node.data) {
                if (node && node.left) {
                    node.left = removeNode(node.left, data);
                }
                return node;
            }
            else {
                if (node.right) {
                    node.right = removeNode(node.right, data);
                }
                return node;
            }
        };
        if (this.root) {
            this.root = removeNode(this.root, data);
        }
    };
    BinarySearchTree.prototype.isBalanced = function () {
        return this.findMinHeight() >= this.findMaxHeight() - 1;
    };
    BinarySearchTree.prototype.findMinHeight = function (node) {
        if (node === void 0) { node = this.root; }
        if (node == null) {
            return -1;
        }
        var left = this.findMinHeight(node.left);
        var right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        }
        else {
            return right + 1;
        }
    };
    BinarySearchTree.prototype.findMaxHeight = function (node) {
        if (node === void 0) { node = this.root; }
        if (node == null) {
            return -1;
        }
        var left = this.findMaxHeight(node.left);
        var right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        }
        else {
            return right + 1;
        }
    };
    BinarySearchTree.prototype.inOrder = function () {
        if (this.root == null) {
            return null;
        }
        else {
            var result_1 = new Array();
            var traverseInOrder_1 = function (node) {
                node.left && traverseInOrder_1(node.left);
                result_1.push(node.data);
                node.right && traverseInOrder_1(node.right);
            };
            traverseInOrder_1(this.root);
            return result_1;
        }
    };
    BinarySearchTree.prototype.preOrder = function () {
        if (this.root == null) {
            return null;
        }
        else {
            var result_2 = new Array();
            var traversePreOrder_1 = function (node) {
                result_2.push(node.data);
                node.left && traversePreOrder_1(node.left);
                node.right && traversePreOrder_1(node.right);
            };
            traversePreOrder_1(this.root);
            return result_2;
        }
    };
    BinarySearchTree.prototype.postOrder = function () {
        if (this.root == null) {
            return null;
        }
        else {
            var result_3 = new Array();
            var traversePostOrder_1 = function (node) {
                node.left && traversePostOrder_1(node.left);
                node.right && traversePostOrder_1(node.right);
                result_3.push(node.data);
            };
            traversePostOrder_1(this.root);
            return result_3;
        }
    };
    BinarySearchTree.prototype.levelOrder = function () {
        var result = [];
        var Q = [];
        if (this.root != null) {
            Q.push(this.root);
            while (Q.length > 0) {
                var node = Q.shift();
                if (node) {
                    result.push(node.data);
                }
                if (node && node.left != null) {
                    Q.push(node.left);
                }
                if (node && node.right != null) {
                    Q.push(node.right);
                }
            }
            if (result && result.length > 0) {
                return result;
            }
        }
        else {
            return null;
        }
    };
    return BinarySearchTree;
}());
exports.default = BinarySearchTree;

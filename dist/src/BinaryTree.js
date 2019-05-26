"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BinaryNode {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new BinaryNode(data, undefined, undefined);
            return;
        }
        else {
            const searchTree = (node) => {
                if (data && node && node.data) {
                    if (data < node.data) {
                        if (node.left === null) {
                            node.left = new BinaryNode(data, undefined, undefined);
                            return;
                        }
                        else if (node.left) {
                            return searchTree(node.left);
                        }
                    }
                    else if (data > node.data) {
                        if (node.right === null) {
                            node.right = new BinaryNode(data, undefined, undefined);
                            return;
                        }
                        else if (node.right) {
                            return searchTree(node.right);
                        }
                    }
                    else {
                        return null;
                    }
                }
                return searchTree(node);
            };
        }
    }
    findMin() {
        let current = this.root;
        while (current && current.left !== null) {
            current = current.left;
        }
        if (current) {
            return current.data;
        }
    }
    findMax() {
        let current = this.root;
        while (current && current.right !== null) {
            current = current.right;
        }
        if (current) {
            return current.data;
        }
    }
    find(data) {
        let current = this.root;
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
    }
    isPresent(data) {
        let current = this.root;
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
    }
    remove(data) {
        const removeNode = (node, data) => {
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
                let tempNode = node.right;
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
    }
    isBalanced() {
        return this.findMinHeight() >= this.findMaxHeight() - 1;
    }
    findMinHeight(node = this.root) {
        if (node == null) {
            return -1;
        }
        const left = this.findMinHeight(node.left);
        const right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        }
        else {
            return right + 1;
        }
    }
    findMaxHeight(node = this.root) {
        if (node == null) {
            return -1;
        }
        const left = this.findMaxHeight(node.left);
        const right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        }
        else {
            return right + 1;
        }
    }
    inOrder() {
        if (this.root == null) {
            return null;
        }
        else {
            const result = new Array();
            const traverseInOrder = (node) => {
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                node.right && traverseInOrder(node.right);
            };
            traverseInOrder(this.root);
            return result;
        }
    }
    preOrder() {
        if (this.root == null) {
            return null;
        }
        else {
            const result = new Array();
            const traversePreOrder = (node) => {
                result.push(node.data);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right);
            };
            traversePreOrder(this.root);
            return result;
        }
    }
    postOrder() {
        if (this.root == null) {
            return null;
        }
        else {
            const result = new Array();
            const traversePostOrder = (node) => {
                node.left && traversePostOrder(node.left);
                node.right && traversePostOrder(node.right);
                result.push(node.data);
            };
            traversePostOrder(this.root);
            return result;
        }
    }
    levelOrder() {
        const result = [];
        const Q = [];
        if (this.root != null) {
            Q.push(this.root);
            while (Q.length > 0) {
                const node = Q.shift();
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
    }
}
exports.default = BinarySearchTree;

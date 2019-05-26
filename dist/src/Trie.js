"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor() {
        this.keys = new Map();
        this.end = false;
    }
    isEnd() {
        return this.end;
    }
    setEnd() {
        this.end = true;
    }
}
class Trie {
    constructor() {
        // 字典树
        this.root = new Node();
    }
    add(input, node = this.root) {
        if (input.length === 0) {
            node.setEnd();
            return;
        }
        else if (!node.keys.has(input[0])) {
            node.keys.set(input[0], new Node());
            return this.add(input.substr(1), node.keys.get(input[0]));
        }
        else {
            return this.add(input.substr(1), node.keys.get(input[0]));
        }
    }
    isWord(word) {
        let node = this.root;
        while (word.length > 1) {
            if (!node.keys.has(word[0])) {
                return false;
            }
            else {
                node = node.keys.get(word[0]);
                word = word.substr(1);
            }
        }
        return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false;
    }
    print() {
        const words = new Array();
        const search = (node, str) => {
            if (node.keys.size !== 0) {
                for (const letter of node.keys.keys()) {
                    search(node.keys.get(letter), str.concat(letter));
                }
                if (node.isEnd()) {
                    words.push(str);
                }
            }
            else {
                return str.length > 0 && words.push(str);
            }
        };
        search(this.root, '');
        return words.length > 0 ? words : null;
    }
}
exports.default = Trie;

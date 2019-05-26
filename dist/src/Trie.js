"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node() {
        this.keys = new Map();
        this.end = false;
    }
    Node.prototype.isEnd = function () {
        return this.end;
    };
    Node.prototype.setEnd = function () {
        this.end = true;
    };
    return Node;
}());
var Trie = /** @class */ (function () {
    function Trie() {
        // 字典树
        this.root = new Node();
    }
    Trie.prototype.add = function (input, node) {
        if (node === void 0) { node = this.root; }
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
    };
    Trie.prototype.isWord = function (word) {
        var node = this.root;
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
    };
    Trie.prototype.print = function () {
        var words = new Array();
        var search = function (node, str) {
            var e_1, _a;
            if (node.keys.size !== 0) {
                try {
                    for (var _b = __values(node.keys.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var letter = _c.value;
                        search(node.keys.get(letter), str.concat(letter));
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
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
    };
    return Trie;
}());
exports.default = Trie;

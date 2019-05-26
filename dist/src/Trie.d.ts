interface NodeType {
    keys: Map<any, any>;
    end: boolean;
    isEnd: () => boolean;
    setEnd: () => void;
}
declare class Node implements NodeType {
    keys: Map<any, any>;
    end: boolean;
    isEnd(): boolean;
    setEnd(): void;
}
export default class Trie {
    root: Node;
    add(input: string, node?: Node): void;
    isWord(word: string): boolean;
    print(): any[] | null;
}
export {};

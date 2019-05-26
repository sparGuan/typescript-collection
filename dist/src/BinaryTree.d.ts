declare class BinaryNode {
    data: BinaryNode | null | undefined;
    left: BinaryNode | null | undefined;
    right: BinaryNode | null | undefined;
    constructor(data: BinaryNode | null | undefined, left: BinaryNode | null | undefined, right: BinaryNode | null | undefined);
}
export default class BinarySearchTree {
    root: BinaryNode | null | undefined;
    constructor();
    add(data: any): BinaryNode | null | undefined;
    findMin(): BinaryNode | null | undefined;
    findMax(): BinaryNode | null | undefined;
    find(data: any): BinaryNode | null | undefined;
    isPresent(data: any): boolean;
    remove(data: any): BinaryNode | null | void;
    isBalanced(): boolean;
    findMinHeight(node?: BinaryNode | null | undefined): number;
    findMaxHeight(node?: BinaryNode | null | undefined): number;
    inOrder(): any[] | null;
    preOrder(): any[] | null;
    postOrder(): any[] | null;
    levelOrder(): any[] | null | undefined;
}
export {};

export default class CustomSet {
    collection: any[];
    has(element: number): boolean;
    values(): any[];
    add(element: number): boolean;
    remove(element: any): boolean;
    size(): number;
    union(otherSet: any): CustomSet;
    intersection(otherSet: any): CustomSet;
    difference(otherSet: any): CustomSet;
    subset(otherSet: any): boolean;
}

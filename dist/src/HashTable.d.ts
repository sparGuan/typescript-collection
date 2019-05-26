export default class HashTable {
    storage: string[][][];
    storageLimit: number;
    print(): void;
    add(key: string, value: string): void;
    remove(key: string): void;
    lookup(key: string): number | string | undefined;
}

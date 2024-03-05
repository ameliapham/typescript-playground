export type MyArray<T> = {
    toString: () => string;
    push: (element: T) => void;
    pushArray: (...elements: T[]) => void;
    pop: () => void;
    length: number;
    removeElement: (index: number) => void;
    getElement: (index: number) => T;
    setElement: (index: number, newElement: T) => void;
    lastElement: T;
    getSum: () => number;
    findSmallestElement: () => { smallestNumber: number, index: number };
    sort: () => void;
    forEach: (callback: (element: T, index: number) => void) => void;
    map: (callback: (element: T, index: number) => T) => MyArray<T>;
    filter: (predicate: (element: T, index: number) => boolean) => MyArray<T>;
}
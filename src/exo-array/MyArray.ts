
export type MyArray<T> = {
    toString: () => string;
    myPush: (elem: T) => void;
    pop: () => void;
    removeElementAtIndex: (indexOfElementToRemove: number)=> void;
    myLength: number;
    getElement: (index: number) => T;
    lastElement: T | undefined;
    pushArray: (...elems: T[]) => void;
    getSum: () => number;
    findSmallerElement: () => { smallestNumber: number, index: number };
    sort: () => void
}

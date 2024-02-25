
export type MyArray<T> = {
    myToString: () => string;
    myPush: (elem: T) => void;
    pop: () => void;
    removeElementAtIndex: (indexOfElementToRemove: number)=> void;
    myLength: number;
    getElement: (index: number) => T;
    lastElement: T | undefined;
    pushArray: (...elems: T[]) => void;
    getSum: () => number;
    findSmallerElement: () => { smallestNumber: number, index: number };
    sort: () => void;
    forEach: (callback: (element: T)=>void)=>void;
    map: (fn: (element: T) => T) => MyArray<T>;
    filter: (predicate: (element: T, index: number) => T) => MyArray<T>
}

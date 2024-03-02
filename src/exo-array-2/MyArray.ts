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
}
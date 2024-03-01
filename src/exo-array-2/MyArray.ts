export type MyArray<T> = {
    toString: () => string;
    push: (element: T) => void;
    pop: () => void;
    length: number;
    removeElement: (index: number) => void;
    getElement: (index: number) => T
}
type MyArray<T> = {
    toString: () => string;
    push: (element: T) => void;
    pop: () => void;
    length: number;
}
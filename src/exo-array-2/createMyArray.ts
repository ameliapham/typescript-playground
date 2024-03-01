import { MyArray } from "./MyArray"

export function createMyArray<T>(...elements: T[]): MyArray<T> {

    const internalArray = elements

    const initialLength = internalArray.length

    const myArray: MyArray<T> = {
        "toString": () => internalArray.join(" - "),
        "length": initialLength,
        "push": (element) => {
            internalArray.push(element);
            myArray.length += 1;
        },
        "removeElement": (index) => {
            internalArray.splice(index, 1)
            myArray.length -= 1
        },
        "pop": () => {
            myArray.removeElement(myArray.length - 1)
        }
    }

    return myArray

}
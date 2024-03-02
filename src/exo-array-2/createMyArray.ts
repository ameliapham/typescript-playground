import { MyArray } from "./MyArray"

export function createMyArray<T>(...elements: T[]): MyArray<T> {

    const internalArray = elements

    const initialLength = internalArray.length

    let initialLastElement = internalArray[initialLength -1]

    const myArray: MyArray<T> = {
        "toString": () => internalArray.join(" - "),
        "length": initialLength,
        "push": (element) => {
            internalArray[myArray.length] = element;
            myArray.length += 1;
        },
        "removeElement": (index) => {
            if (index >= myArray.length) {
                throw new Error(`Warning : You ask for index ${index} but the array has only ${myArray.length} element`)
            }

            internalArray.splice(index, 1)
            myArray.length -= 1
        },
        "pop": () => {
            if (myArray.length === 0){
                
                return
            }
            myArray.removeElement(myArray.length - 1)
        },
        "getElement": (index) => {
            if (index >= myArray.length) {
                throw new Error(`Warning : You ask for index ${index} but the array has only ${myArray.length} element`)
            }
            const gottenElement = internalArray[index];
            return gottenElement
        },

        "setElement": (index, newElement) => {
            if (index >= myArray.length) {
                throw new Error(`Warning : You ask for index ${index} but the array has only ${myArray.length} element`)
            }
            internalArray[index] = newElement
        },
        "lastElement": initialLastElement
    }

    return myArray

}
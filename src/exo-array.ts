import { assert, Equals } from "tsafe"

type MyArray<T> = {
    toString: () => string;
    push: (elem: T) => void;
    pop: () => void;
    length: number;
    getElement: (index: number) => T;
    lastElement: T | undefined;
    pushArray: (...elems: T[]) => void
}

function createMyArray<T>(...elements: T[]): MyArray<T> {

    const internalArray = elements

    const initialLength = internalArray.length

    const initialLastElement = internalArray[initialLength - 1]

    const myArray: MyArray<T> = {
        "toString": () => internalArray.join(" - "),
        "push": (elem) => {
            internalArray.push(elem);
            myArray.length += 1;
            myArray.lastElement = elem
        },
        "pop": () => {
            if (myArray.length <= 0) {
                // do nothing
            } else {
                internalArray.pop();
                myArray.length -= 1;
                myArray.lastElement = internalArray[myArray.length - 1]
            }
        },
        "length": initialLength,
        "getElement": (index) => {
            if (index > myArray.length) {
                throw new Error(`Warning you asked for the ${index} element but there is only ${myArray.length} element`)
            } else {
                return internalArray[index]
            }
        },
        "lastElement": initialLastElement,

        "pushArray": (...elems) => {
            const newAdjustArray = elems
            for (let i = 0; i < newAdjustArray.length; i++) {
                internalArray.push(newAdjustArray[i])
                myArray.length += 1
                myArray.lastElement = internalArray[myArray.length-1]
            }
        }


    }

    return myArray

}

const myArray = createMyArray("🦁", "🐷", "🦊")
console.log(`length's array is ${myArray.length}`)

myArray.push("🦁")
console.log(myArray.toString())

console.log(`length's array is ${myArray.length}`)

console.log(`last element of my array is ${myArray.lastElement}`)

myArray.push("🐥")
myArray.push("🐰")
myArray.push("🐱")
console.log(`I get element ${myArray.getElement(5)}`)

console.log(myArray.toString())

myArray.pop()
console.log(myArray.toString())

myArray.pop()

console.log(myArray.toString())

console.log(`length's array is ${myArray.length}`)

console.log(`last element of my array is ${myArray.lastElement}`)

myArray.pushArray("a","b","c")

console.log(myArray.toString())
console.log(`length's array is ${myArray.length}`)
console.log(`last element of my array is ${myArray.lastElement}`)





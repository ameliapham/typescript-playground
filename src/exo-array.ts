import { assert } from "tsafe"

type MyArray = {
    toString: () => string;
    push: (elem: string) => void;
    pop: () => void;
    length: number;
    getElement: (index: number) => string
}

function createMyArray(...elements: string[]): MyArray {

    const internalArray = elements

    const initialLength = internalArray.length

    const myArray: MyArray = {
        "toString": () => internalArray.join(" - "),
        "push": (elem) => {
            internalArray.push(elem);
            myArray.length += 1;
        },
        "pop": () => {
            if (myArray.length <= 0) {
                // do nothing
            } else {
                internalArray.pop();
                myArray.length -= 1;
            }
        },
        "length": initialLength,
        "getElement": (index) => {
            if (index > myArray.length) {
                throw new Error(`Warning you asked for the ${index} element but there is only ${myArray.length} element`)
            } else {
                return internalArray[index]
            }
        }

    }

    return myArray

}

const myArray = createMyArray("🦁", "🐷", "🦊")
console.log(myArray.length)

myArray.push("🦁")
console.log(myArray.length)

myArray.push("🐥")
myArray.push("🐰")
myArray.push("🐱")

console.log(myArray.toString())

myArray.pop()
console.log(myArray.toString())
console.log(myArray.length)

console.log(myArray.getElement(5))





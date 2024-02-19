import { assert } from "tsafe"

type MyArray = {
    toString: () => string;
    push: (elem: string) => void;
    pop: () => void;
    length: number;
}

function createMyArray(...elements: string[]): MyArray {

    const internalArray = elements

    const initialLength = internalArray.length

    const myArray: MyArray = {
        "toString": () => internalArray.join(" - "),
        "push": (elem) => internalArray.push(elem),
        "pop": () => internalArray.pop(),
        "length": initialLength

    }

    return myArray

}

const myArray = createMyArray("🦁", "🐷", "🦊")

myArray.push("🦁")
myArray.push("🐥")
myArray.push("🐰")
myArray.push("🐱")

console.log(myArray.toString())

myArray.pop()
console.log(myArray.toString())





import { assert, Equals } from "tsafe"
import { is } from "tsafe/is";

type MyArray<T> = {
    toString: () => string;
    myPush: (elem: T) => void;
    pop: () => void;
    myLength: number;
    getElement: (index: number) => T;
    lastElement: T | undefined;
    pushArray: (...elems: T[]) => void;
    getSum: () => number
}

function createMyArray<T>(...elements: T[]): MyArray<T> {

    const internalArray = elements

    const initialLength = internalArray.length

    const initialLastElement = internalArray[initialLength - 1]

    const myArray: MyArray<T> = {
        "toString": () => internalArray.join(" - "),
        "myPush": (elem) => {
            internalArray.push(elem);
            myArray.myLength += 1;
            myArray.lastElement = elem
        },
        "pop": () => {
            if (myArray.myLength <= 0) {
                // do nothing
                return;
            }
            internalArray.pop();
            myArray.myLength -= 1;
            myArray.lastElement = internalArray[myArray.myLength - 1]
        },
        "myLength": initialLength,
        "getElement": (index) => {
            if (index > myArray.myLength) {
                throw new Error(`Warning you asked for the ${index} element but there is only ${myArray.myLength} element`)
            } else {
                return internalArray[index]
            }
        },
        "lastElement": initialLastElement,

        "pushArray": (...elements) => {

            for (let i = 0; i < elements.length; i++) {
                myArray.myPush(elements[i]);
                // internalArray.push(elements[i])
            }

            //myArray.myLength+= elements.length;
            //myArray.lastElement = internalArray[myArray.myLength - 1]

        },
        "getSum": () => {
            
            // const internalArrayNumber: number[] = [];
            /*
            for (let i = 0; i < myArray.myLength; i++){
                const num = internalArray[i];
                if (typeof num !== "number"){
                    throw new Error(`This function required an array of number`);
                }
                internalArrayNumber.push(num);
            }*/

            /* internalArray.forEach(element => {
                if (typeof element !== "number") {
                    throw new Error(`This function required an array of number`);
                }
                internalArrayNumber.push(element);
            })*/

            /* const internalArrayNumber = internalArray.map(element => {
                if( typeof element !== "number"){
                    throw new Error(`This function required an array of number`)
                }
                return element;
            })            
            */

            if( internalArray.length === 0 ){
                throw new Error("There is no smallest element, it's an empty array");
            }

            if (!internalArray.every(element => typeof element === "number")) {
                throw new Error(`This function required an array of number`)
            }

            const internalArrayNumber: number[]= internalArray as any;
            
            const sum = internalArrayNumber.reduce((sum, cur) => {
                return sum + cur;
            }, 0);

            return sum;
        }



    }

    return myArray

}


const myArray = createMyArray("🦁", "🐷", "🦊")
console.log(`length's array is ${myArray.myLength}`)

myArray.myPush("🦁")
console.log(myArray.toString())

console.log(`length's array is ${myArray.myLength}`)

console.log(`last element of my array is ${myArray.lastElement}`)

myArray.myPush("🐥")
myArray.myPush("🐰")
myArray.myPush("🐱")
console.log(`I get element ${myArray.getElement(5)}`)

console.log(myArray.toString())

myArray.pop()
console.log(myArray.toString())

myArray.pop()

console.log(myArray.toString())

console.log(`length's array is ${myArray.myLength}`)

console.log(`last element of my array is ${myArray.lastElement}`)

myArray.pushArray("a", "b", "c")

console.log(myArray.toString())
console.log(`length's array is ${myArray.myLength}`)
console.log(`last element of my array is ${myArray.lastElement}`)






const myArrayNumber = createMyArray(3, 1, 4, 2, 6, 5)

console.log(myArrayNumber.toString())
console.log(`length's array is ${myArrayNumber.myLength}`)

console.log(myArrayNumber.getSum())
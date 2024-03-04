import { MyArray } from "./MyArray"

export function createMyArray<T>(...elements: T[]): MyArray<T> {

    const internalArray = elements

    const initialLength = internalArray.length

    let initialLastElement = internalArray[initialLength - 1]

    const myArray: MyArray<T> = {
        "toString": () => internalArray.join(" - "),
        "length": initialLength,
        "push": (element) => {
            internalArray[myArray.length] = element;
            myArray.length += 1;
            myArray.lastElement = element
        },
        "pushArray": (...elements) => {
            const newArr = elements;
            for (let i = 0; i < newArr.length; i++) {
                myArray.push(newArr[i])
            }
        },
        "removeElement": (index) => {
            if (index >= myArray.length) {
                throw new Error(`Warning : You ask for index ${index} but the array has only ${myArray.length} element`)
            }

            internalArray.splice(index, 1)
            myArray.length -= 1

            if (index === myArray.length) {
                myArray.lastElement = internalArray[myArray.length - 1]
            }
        },
        "pop": () => {
            if (myArray.length === 0) {

                return
            }
            myArray.removeElement(myArray.length - 1)
            myArray.lastElement = internalArray[myArray.length - 1]
        },
        "getElement": (index) => {
            if (index >= myArray.length) {
                throw new Error(`Warning : You ask for index ${index} but the array has only ${myArray.length} element`)
            }
            return internalArray[index];
        },

        "setElement": (index, newElement) => {
            if (index >= myArray.length) {
                throw new Error(`Warning : You ask for index ${index} but the array has only ${myArray.length} element`)
            }
            internalArray[index] = newElement
        },
        "lastElement": initialLastElement,
        "getSum": () => {

            const newInternalArray: number[] = []

            if (myArray.length === 0) {
                throw new Error(`This array is empty`)
            }

            myArray.forEach(element => {
                if (typeof element !== "number") {
                    throw new Error(`This function required an array of number`)
                }
                newInternalArray.push(element)
            });

            const sum = newInternalArray.reduce((acc, curr) => {
                return acc + curr
            }, 0)

            return sum
        },
        "findSmallestElement": () => {
            const newInternalArray: number[] = []

            if (myArray.length === 0) {
                throw new Error(`This array is empty`);
            }

            myArray.forEach(element => {
                if (typeof element !== "number") {
                    throw new Error(`This function required an array of number`)
                }
                newInternalArray.push(element)
            })

            let index = 0

            for (let i = 0; i < newInternalArray.length; i++) {
                if (newInternalArray[i + 1] < newInternalArray[index]) {
                    index = i + 1
                }
            }

            return {
                "smallestNumber": newInternalArray[index],
                "index": index
            }
        },
        "sort": () => {
            const sortedArray: number[] = []

            while(true){
                if (myArray.length === 0) {
                    break;
                }

                const {smallestNumber, index} = myArray.findSmallestElement()
                sortedArray.push(smallestNumber)
                myArray.removeElement(index)

            }

            sortedArray.forEach(element => {
                myArray.push(element as any)
            })


        },
        "forEach": (callback) => {
            for (let i = 0; i < myArray.length; i++){
                // const element = internalArray[i]
                const element = myArray.getElement(i)
                callback(element, i)
            }
        },
        "map": (callback) => {

            const newArr = createMyArray<T>()

            myArray.forEach((element, index) => {
                
                const newElement = callback(element,index)
                newArr.push(newElement)

            })
            return newArr
        }
    }

    return myArray

}
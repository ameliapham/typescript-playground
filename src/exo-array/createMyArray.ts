import { MyArray } from "./MyArray";

export function createMyArray<T>(...elements: T[]): MyArray<T> {

    const internalArray = elements

    const initialLength = internalArray.length

    const initialLastElement = internalArray[initialLength - 1]


    const myArray: MyArray<T> = {
        "myToString": () => internalArray.join(" - "),
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
        "removeElementAtIndex": indexOfElementToRemove => {
            internalArray.splice(indexOfElementToRemove, 1);
            myArray.myLength = myArray.myLength - 1;
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

            if (internalArray.length === 0) {
                throw new Error("There is no smallest element, it's an empty array");
            }

            if (!internalArray.every(element => typeof element === "number")) {
                throw new Error(`This function required an array of number`)
            }

            const internalArrayNumber: number[] = internalArray as any;

            const sum = internalArrayNumber.reduce((sum, cur) => {
                return sum + cur;
            }, 0);

            return sum;
        },
        "findSmallerElement": () => {

            /*
            if (internalArray.length === 0) {
                throw new Error("There is no smallest element, it's an empty array");
            }

            if (!internalArray.every(element => typeof element === "number")) {
                throw new Error(`This function required an array of number`)
            }
            const internalArrayNumber: number[] = internalArray as any;
            */


            const internalArrayNumber: number[] = [];

            internalArray.forEach(element => {
                if (typeof element !== "number") {
                    throw new Error(`This function required an array of number`)
                }

                internalArrayNumber.push(element);

            });

            let index = 0;

            for (let i = index + 1; i < myArray.myLength; i++) {
                if (internalArrayNumber[i] < internalArrayNumber[index]) {
                    index = i
                }
            }

            const smallestNumber = internalArrayNumber[index]
            return { "smallestNumber": smallestNumber, "index": index };

        },
        "sort": () => {

            internalArray.forEach(element => {
                if (typeof element !== "number") {
                    throw new Error(`This function required an array of number`);
                }
            })

            const sortedArray = createMyArray<number>();

            while (true) {

                if (myArray.myLength === 0) {
                    break;
                }

                const { smallestNumber, index } = myArray.findSmallerElement();

                sortedArray.myPush(smallestNumber);

                myArray.removeElementAtIndex(index)

            }

            for (let i = 0; i < sortedArray.myLength; i++) {
                const element = sortedArray.getElement(i);
                myArray.myPush(element as any)
            }

            /*for (let i = 0; i < myArray.myLength; i++) {
                let min = i
                for (let k = i + 1; k < myArray.myLength; k++) {
                    if (internalArray[k] < internalArray[min]) {
                        min = k
                    }
                }

                if (min !== i) {
                    let res = internalArray[i]
                    internalArray[i] = internalArray[min]
                    internalArray[min] = res
                }
            }*/
        },       
        "forEach": (fn) => {
            for (let i = 0; i < myArray.myLength; i++) {

                const elem = myArray.getElement(i)

                fn(elem)
            }
        },
        "map": (fn) => {
            const newArr = createMyArray<T>()

            myArray.forEach(element => {

                const newElem = fn(element)
                newArr.myPush(newElem)

            })
            return newArr
        },
        "filter": (fn) => {

            const newArr = createMyArray<T>()

            myArray.forEach(element => {

                if (fn(element) === true){
                    newArr.pushArray(element)
                }

            })
            return newArr
        }
        
    }


    return myArray

}

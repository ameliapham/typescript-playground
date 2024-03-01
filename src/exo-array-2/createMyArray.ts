import {MyArray} from "./MyArray"

function createMyArray<T>(...elements: T[]): MyArray<T>{

    const internalArray = elements

    const myArray: MyArray<T> = {
        "toString": () => internalArray.join(" - "),

    }

    return myArray

}
import { createMyArray } from "./createMyArray"
import assert from "assert"

{
    // Test toString

    const myArray = createMyArray("Huong", "is", "so", "strong")

    const got = myArray.toString()

    const expected = "Huong - is - so - strong"

    assert(got === expected, "Warning : test fail ❌")

    console.log("Test toString passed ✅")

}

{
    // Test push

    const myArray = createMyArray("Huong", "is", "so", "strong")

    myArray.push("Yeah!")

    const got = myArray.toString()

    const expected = createMyArray("Huong", "is", "so", "strong", "Yeah!").toString()

    assert(got === expected, "Warning : test fail ❌")

    console.log("Test push passed ✅")

}


{
    // Test length

    const myArray = createMyArray("Huong", "is", "so", "strong")

    myArray.push("Yeah!")
    myArray.push("Yeah!")
    myArray.push("Yeah!")

    myArray.removeElement(5)
    myArray.pop()

    const got = myArray.length

    const expected = 5

    assert(got === expected, "Warning : test fail ❌")

    console.log("Test length passed ✅")

}


{
    // Test removeElement

    const myArray = createMyArray("Huong", "is", "so", "strong")

    myArray.removeElement(2)

    const got = myArray.toString()

    const expected = createMyArray("Huong", "is", "strong").toString()

    assert(got === expected, "Warning : test fail ❌")

    console.log("Test removeElement passed ✅")

}

{
    // Test pop

    const myArray = createMyArray("Huong", "is", "so", "strong", "Yeah!!!")

    myArray.pop()

    const got = myArray.toString()

    const expected = createMyArray("Huong", "is", "so", "strong").toString()

    assert(got === expected, "Warning : test fail ❌")

    console.log("Test pop passed ✅")

}

{
    // Test getElement

    const myArray = createMyArray("Huong", "is", "so", "strong", "Yeah!!!")

    const got = myArray.getElement(0)

    const expected = "Huong"

    assert(got === expected, "Warning : test fail ❌")

    console.log("Test getElement passed ✅")

}

{
    // Test setElement

    const myArray = createMyArray("Huong", "is", "so", "strong")

    myArray.setElement(3, "smart")

    const got = myArray.toString()

    const expected = createMyArray("Huong", "is", "so", "smart").toString()

    assert(got === expected, "Warning : test fail ❌")

    console.log("Test setElement passed ✅")

}

{
    // Test lastElement

    const myArray = createMyArray("Huong", "is", "so", "strong")

    myArray.push("Yeah!")
    myArray.push("Hello!")
    myArray.push("Ah Oh!")
    myArray.removeElement(6)

    const got = myArray.lastElement

    const expected = "Hello!"

    assert(got === expected, "Warning : test fail ❌")

    console.log("Test lastElement passed ✅")
}

{
    // Test pushArray

    const myArray = createMyArray("Huong", "is", "so", "strong")

    myArray.pushArray("and", "she", "is", "very", "smart")

    const got = myArray.toString()

    const expected = createMyArray("Huong", "is", "so", "strong", "and", "she", "is", "very", "smart").toString()

    assert(got === expected, "Warning : test fail ❌")

    console.log("Test pushArray passed ✅")

}


{
    // Test getSum

    const myArray = createMyArray(1,2,3,4,5)

    const got = myArray.getSum()

    const expected = 15

    assert(got === expected, "Warning : test fail ❌")

    console.log("Test getSum passed ✅")

}

{
    // Test findSmallestElement

    const myArray = createMyArray(4, 5, 100, 2, 6)

    const got = myArray.findSmallestElement().smallestNumber

    const expected = 2

    assert(got === expected, "Warning : test fail ❌")

    console.log("Test findSmallestElement passed ✅")

}

{
    // Test forEach

    const myArray = createMyArray(4, 5, 100, 2, 6)

    const newArr = createMyArray()

    myArray.forEach(element => {
        newArr.push(element + 1)
    })

    const got = newArr.toString()

    const expected = createMyArray(5, 6, 101, 3, 7).toString()

    assert(got === expected, "Warning : test fail ❌")

    console.log("Test forEach passed ✅")

}
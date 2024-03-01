import {createMyArray} from "./createMyArray"
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

    const got = myArray.length

    const expected = 7

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

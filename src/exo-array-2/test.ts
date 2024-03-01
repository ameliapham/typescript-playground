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
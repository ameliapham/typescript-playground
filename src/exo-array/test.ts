import { createMyArray } from "./createMyArray";
import { assert } from "tsafe"


{

    const myArray = createMyArray(3, 2, 4, 1)

    console.log(myArray.myToString())

    const got = myArray.findSmallerElement();

    const expected = {
        "smallerElementNumber": 1,
        "index": 3
    };

    assert(got.smallestNumber === expected.smallerElementNumber, "Fail ❌");
    assert(got.index === expected.index, "Fail ❌");

    console.log("Pass ✅")

}

{

    const myArray = createMyArray(3, 1, 4, 2)

    const got = myArray.findSmallerElement();

    const expected = {
        "smallerElementNumber": 1,
        "index": 1
    };

    assert(got.smallestNumber === expected.smallerElementNumber, "Fail ❌");
    assert(got.index === expected.index, "Fail ❌");

    console.log("Pass ✅")

}

{

    const myArray = createMyArray(100_000)

    const got = myArray.findSmallerElement();

    const expected = {
        "smallerElementNumber": 100_000,
        "index": 0
    };

    assert(got.smallestNumber === expected.smallerElementNumber, "Fail ❌");
    assert(got.index === expected.index, "Fail ❌");

    console.log("Pass ✅")

}

{

    const myArray = createMyArray(3, 2, 4, 1)

    myArray.sort();

    const got = myArray.myToString();

    const expected = createMyArray(1, 2, 3, 4).myToString();

    assert(got === expected, `Fail ❌ got: ${got}, expected: ${expected}`);

    console.log("Pass ✅")

}


{

    const myArray = createMyArray(3, 2, 4, 1)

    const newArr = createMyArray<number>()

    myArray.forEach((element) => { newArr.myPush(element + 1) })

    const got = newArr.myToString();

    const expected = createMyArray(4, 3, 5, 2).myToString()

    assert(got === expected, "Fail ❌");

    console.log("Pass ✅")

}

{
    const myArray = createMyArray(3, 2, 4, 1)
    const newArr: number[] = []
    myArray.forEach((element) => { newArr.push(element + 1) })
    console.log(newArr)

}

{
    const myArray = createMyArray(1, 2, 3, 4)

    const newArr = myArray.map((element) => {
        return element + 1
    })

    const got = newArr.myToString()

    const expected = createMyArray(2, 3, 4, 5).myToString()

    assert(got === expected, "Fail ❌")

    console.log("Pass ✅")
}

{ 
    const myArray = createMyArray(2, 10, 13, 34, 5, 4)

    const newArr = myArray.filter((element) => {
        return element <= 10
    })

    const got = newArr.myToString()

    const expected = createMyArray(2, 10, 5, 4).myToString()

    assert ( got === expected, "Fail ❌")

    console.log("Pass ✅")
}

{ 
    const myArray = createMyArray("o", "o", "f", "b", "o", "o", "f", "a")

    const target = "abcd"

    const newArr = myArray.filter((_element, index) => {
        return index >= target.length
    })

    const got = newArr.myToString()

    const expected = createMyArray("o", "o", "f", "a").myToString()

    assert ( got === expected, "Fail ❌")

    console.log("Pass ✅")
}


{ 
    const myArray = createMyArray("a", "b", "c", "d")

    myArray.setElement(2, "gotcha!")

    const got = myArray.myToString()

    const expected = createMyArray("a", "b", "gotcha!", "d").myToString()

    assert ( got === expected, "Fail ❌")

    console.log("Pass ✅")
}
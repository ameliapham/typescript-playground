// number or string ?

function printID(params: {
    name: string,
    id: number | string
}) {
    const { name, id } = params
    if (typeof id === "string") {
        console.log(`${name}'s ID is ${id.toUpperCase()}`)
    } else {
        console.log(`${name}'s ID is ${id}`)
    }
}

const myID = printID({
    "name": "Huong",
    "id": "xd103"
})
const hisID = printID({
    "name": "Joseph",
    "id": 88
})





// string or array of string ?

function welcomePeople(params: {
    names: string | string[]
}) {
    const { names: x } = params
    if (Array.isArray(x)) {
        console.log(`Hello ${x.join(" and ")}`)
    } else {
        console.log(`Welcome lone traveler ${x}`)
    }
}

const listTraveler = welcomePeople({ "names": ["Huong", "Joseph"] })
const listTraveler2 = welcomePeople({ "names": "Anto" })





// Functions that only accept a certain set of known values

function objectPosition(params: {
    objectName: string,
    alignment: "left" | "right"
}) {
    const { objectName, alignment } = params
    console.log(`${objectName} is on the ${alignment} side of the table`)
}

const chair = objectPosition({
    "objectName": "chair",
    "alignment": "left"
})


function compare(params: {
    a: string,
    b: string
}): -1 | 0 | 1 {
    const { a, b } = params
    return a === b ? 0 : a > b ? 1 : -1
}

const test = compare({
    "a": "Hello",
    "b": "Coucou"
})
console.log(test)



type Options = {
    width: number
}

function combine(x : Options | "auto" ){
    console.log(x)
}

combine({"width": 100})
combine("auto")
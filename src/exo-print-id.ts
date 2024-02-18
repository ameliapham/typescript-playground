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

const listTraveler = welcomePeople({"names": ["Huong", "Joseph"] })
const listTraveler2 = welcomePeople({"names" : "Anto"})

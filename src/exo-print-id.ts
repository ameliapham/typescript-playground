function printID(params: {
    name: string,
    id: number | string
}) {
    const { name, id } = params
    if (typeof id === "string"){
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

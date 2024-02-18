function printID(params: {
    name: string,
    id: number | string
}) {
    const { name, id } = params
    console.log(`${name}'s ID is ${id}`)
}

const myID = printID({
    "name": "Huong",
    "id": "103"
})
const hisID = printID({
    "name": "Joseph",
    "id": 88
})

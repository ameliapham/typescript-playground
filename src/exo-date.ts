import { assert } from "tsafe"

// Check type of Date

function logValue(x : Date | string){
    if (x instanceof Date){
        console.log(x.toUTCString())
    } else {
        console.log(x.toUpperCase())
    }
}

const myDate = logValue(new Date())

const time= (new Date()).getTime();

const nowAsString = (new Date()).toString();
const nowAsString2 = Date();


// Counting how many seconds between startDate and endDate

const startDate = new Date();

console.log(startDate.getTime());

let counter=0;

for(let i = 0; i < 10000; i++){
	for(let j = 0; j < 1000; j++){
		for(let k = 0; k < 1000; k++){
			counter++;
		}

	}
}

const endDate= new Date();

const durationMs = endDate.getTime() - startDate.getTime();

const durationSecond = durationMs / 1000;


console.log(`Le program a mis ${durationSecond} secondes a s'executer`);


// Example of using DOM with TypeScript

const x: Date= new Date(1708292559093);

const elapsedSecond = ((new Date()).getTime() - x.getTime())/1000;

console.log(`${elapsedSecond / 60} seconds`)

console.log(x.toUTCString());

const element= document.getElementById("my-button")

assert(element !== null);

element.style.backgroundColor = "black"
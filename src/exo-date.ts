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
function alwaysThrows(){
    throw new Error("OH NOES")
}
function iterate(arg){
    console.log(arg)
    return arg+1
}
const promise = Promise.resolve(1)
promise.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null,(err)=>console.log(err.message))
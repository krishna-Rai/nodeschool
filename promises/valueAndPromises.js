
function attachTitle(arg){
    return "DR. "+arg;
}

var promise = Promise.resolve('MANHATTAN')

promise.then(attachTitle).then(console.log)
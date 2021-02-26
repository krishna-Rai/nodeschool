'use strict';

    var promise = new Promise(function (fulfill, reject) {
        setTimeout(()=>{
            fulfill('FULFILLED!')
        },300)
    });

    // Your solution here

    promise.then((res)=>console.log(res))
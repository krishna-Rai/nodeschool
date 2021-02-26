function all(p1,p2){
    const promise = new Promise((fulfill,reject)=>{
        let counter = 0
        let v1,v2
        p1.then((value1) => {
            v1=value1
            counter++
            if(counter==2)
                fulfill([v1, v2])
        })
        p2.then((value2) => {
            v2=value2
            counter++
            if(counter==2)
                fulfill([v1,v2])
        })
        
    })
    return promise
}

all(getPromise1(),getPromise2()).then(console.log)
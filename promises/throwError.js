function parsePromised(){
    return new Promise((fulfill,reject)=>{
        try {
            
            const data = JSON.parse(process.argv[2])
            fulfill(data)
        } catch (error) {
            reject(error.message)
        }
    })
}
parsePromised().then(null,console.log)

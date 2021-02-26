let data = ""

process.stdin.on('data',(chunk)=>data+=chunk.toString())
process.stdin.on('end',()=>{
    data=data.split('').reverse().join('')
    process.stdout.write(data)
})
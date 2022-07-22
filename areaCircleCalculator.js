const arguments =  process.argv.slice(2)
const radius = arguments[0] || 0

function area(radius){
    return (Math.pow(radius, 2) * Math.PI)
}

console.log(area(radius));
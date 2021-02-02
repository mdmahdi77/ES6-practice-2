const numbers = [3, 4, 5, 6, 7, 8]
// const output = []
// for(let i = 0; i<numbers.length; i++){
//     const element = numbers[i]
//     const result = element * element
//     output.push(result)
// }                          //****step-1 */


// function square(element){
//     return element * element
// }


// numbers.map(function(element, index, array){
//     console.log(element, index, array)
// })


// const square = element => element * element
// const square = x => x * x


// const result = numbers.map(function(element){
//     return element * element
// })

// const result = numbers.map(x => x * x) // map function use kore sohoje output paua jai
// console.log(result)

const bigger = numbers.filter( x => x > 5) //array er modde 5 er chaite boro jegula ace segula show korbe
const isThere = numbers.find(x => x < 5) //find hocce 5 er niche jeta ace sudu deta dekhabe mane 1ta element dekhabe r filter sobgula dekhai
console.log(isThere)
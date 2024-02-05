// let string = prompt('Enter a string');
// let reverse = "";
// for (let i = string.length - 1; i >= 0; i--) {
//     reverse += string[i];
// }
// console.log(reverse); 


// let a = prompt('Enter a string');
// let b = "";
// for (let i = a.length - 1; i >= 0; i--) {
//     b += a[i];
// }
// console.log(b)

// if (a==b){
//     console.log("Palindrome Number")
// }else{
//     console.log("Not Palindrome Number")
// }


// for (let i = 1; i<= 200; i++) {
//     if (i % 3 == 0){
//         console.log([i])}
//     else if (i % 5 == 0){
//         console.log([i])
//     }
// }


let inp = Number(prompt("Enter your number"))
let fact =1
for(let i=1; i<inp; i++) {
    fact = fact*i
}
console.log(fact)
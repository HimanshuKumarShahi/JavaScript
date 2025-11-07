// let number=parseInt(prompt("Enter Your Number."));;


// if(number>0){
//     console.log(`${number} is positive number.`)
// }
// else if(number<0){
//     console.log(`${number} is negaive number.`)
// }
// else
// {
//     console.log("the number is Zero.");
    
// }


let letter=prompt("Enter Your character.. :")
let array=['a','e','i','o','u','A','E','I','O','U']

if(letter.length==1){
    if(array.includes(letter)){
        console.log(`${letter} is a vowel.`);
    }
    else{
        console.log(`${letter} is a consonant`);
        
    }
}
else{
    console.log("Please Enter A single Character.")
}
<<<<<<< HEAD
// function name(){
//     console.log("Apple");
//     console.log("Ball");
    
// }
// name();
// function sum(a,b){
//     return a+b;
// }
// console.log("The sum of two number is:_",sum(3,5));
// console.log(sum(3,"5"));
// console.log(sum(3,"a"));

// function userlogin(username,userid){
//     if(username===undefined || userid===undefined){
//         return "please enter valid user name and id";
//     }
//     else
//     return `hello dear ${username}, you are logged in and your id is:${userid}`;
// }
// function userlogin(username="tony"){
//     if(!username ){
//         return "please enter valid user name and id";
//     }
//     else
//     return `hello dear ${username}, you are logged in `;
// }
// console.log(userlogin());   

function carttotal(...num){
    return num;
}
// console.log(carttotal(200,350,566,743,2000,1999));

const user={
    name:"tony",
    price:399
}
function cartdetail(anyobj){
    return `user name is:${anyobj.name} and price is :${anyobj.price}`;
}
// console.log(cartdetail(user));


const price=[299,430,540,999,600];
function totalprice(orderpice){
    return orderpice[0]+orderpice[1]+orderpice[2]+orderpice[3]+orderpice[4];
}
console.log(totalprice(price));
=======
// function name(){
//     console.log("Apple");
//     console.log("Ball");
    
// }
// name();
// function sum(a,b){
//     return a+b;
// }
// console.log("The sum of two number is:_",sum(3,5));
// console.log(sum(3,"5"));
// console.log(sum(3,"a"));

// function userlogin(username,userid){
//     if(username===undefined || userid===undefined){
//         return "please enter valid user name and id";
//     }
//     else
//     return `hello dear ${username}, you are logged in and your id is:${userid}`;
// }
// function userlogin(username="tony"){
//     if(!username ){
//         return "please enter valid user name and id";
//     }
//     else
//     return `hello dear ${username}, you are logged in `;
// }
// console.log(userlogin());   

function carttotal(...num){
    return num;
}
// console.log(carttotal(200,350,566,743,2000,1999));

const user={
    name:"tony",
    price:399
}
function cartdetail(anyobj){
    return `user name is:${anyobj.name} and price is :${anyobj.price}`;
}
// console.log(cartdetail(user));


const price=[299,430,540,999,600];
function totalprice(orderpice){
    return orderpice[0]+orderpice[1]+orderpice[2]+orderpice[3]+orderpice[4];
}
console.log(totalprice(price));
>>>>>>> 03c9b715ad9e687a50f670647c785f257207ac65

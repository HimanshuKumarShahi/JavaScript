// var c = 300;
// let a = 100;
// const b = 20;
// function scopes() {
//     if (true) {
//        return a;
//         // b;
//         // c = 30;
//     }
// }
// console.log(a);
// console.log(b);
// console.log(c);


// function one(){
//     username="himanshu"
//     function two(){
//         id=101
//         console.log(username);
//         console.log(id);
//     }
    // two();
//     console.log(username);
    
// }
// one();

// if(true){
//     username="Himanshu"
//     if(username==="Himanshu")
//         {
//         const website = "_youtube"
//         console.log(username + website);
//     }
//     console.log(username);
    
// }

// console.log("---------arrow functin & this keyword--------");

// const user={
//     username:"Himanshu",
//     price:1000,
//     duration:"4 day ago",
//     welcome:function(){
//          console.log( `welcome_ ${this.username} , in the store ! hope you pay your bill ${this.price}.`);
//         //  console.log(this);
         
//     }
// }
// user.welcome();
// user.username="ram";
// user.welcome();

// console.log(this);

// function chai(){
//     username="ram"
//     console.log(this.username);
    
// }
// chai();

// const chai=()=>{
//     username="raju"
//     console.log(this.username);
//     console.log(this);
   
// }
// chai();

// const sum=(a,b)=>{
//     return a+b;
// }
// console.log(sum(5,68));

const sum=(a,b)=>a+b;
console.log(sum(99,34));

const name=()=>(username="himanshu")
console.log(name());
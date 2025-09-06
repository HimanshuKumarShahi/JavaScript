// const user={
//     username:"himanshu",
//     islogin: true,

//     getdata: function(){
//         console.log("DB transfer data ...");
//         console.log(`username: ${this.username}`); 
//         console.log(this); 
//     }
// }
// console.log(user.username);
// console.log(user.islogin);
// console.log(user.getdata());


function user(username,islogin){
    this.username=username
    this.islogin=islogin

    this.greeting=()=>{
        console.log(`Wel-come dear ${this.username}`);
        
    }
    return this
}
// const user1= user("himanshu",false);
// const user2= user("chai",true);
// console.log(user1);
// console.log(user2);


const user1= new user("himanshu",false);
const user2= new user("chai",true);
console.log(user1.constructor);
console.log(user1.username);
console.log(user1.islogin);
// console.log(user2);
// console.log(user2.username);
// console.log(user2.islogin);

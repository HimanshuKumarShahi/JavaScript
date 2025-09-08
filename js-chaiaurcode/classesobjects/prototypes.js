// let name="Himanshu Kumar";
// console.log(name.length);
// console.log(name.truelength);


// let hero=["thor","ironman","hulk"];

// const power={
//     thor:"hammer",
//     ironman:"jarvis",
//     hulk:"size increase",

// heropower:function(){
//     console.log(`the power of thre is: ${this.thor}`);
    
// }
// }
// Object.prototype.himanshu=function(){
//     console.log("you have power to ruinde it");
    
// }
// Array.prototype.greet=function(){
//     console.log("hellow Dear !!!");
    
// }

// power.himanshu();
// power.greet();
// hero.greet();

                // old method 
// const teacher={
//     makevideo:true,
//     project:javaScript
// }
// const user={
//     name:"student1",
//     email:"test@test"
// }
// const staff={
//     fulltime:true,
//     present:false,
//     __proto__:teacher
// }

// teacher.__proto__=user;

            // new method

    // Object.setPrototypeOf(teacher,user);

    let newuser="Hello Dear ";

    String.prototype.totallength=function(){
        // console.log(this);
        // console.log(this.newuser);
        console.log(this.trim().length);
        
    }
    newuser.totallength();

    // "I LOVE JAVASCRIPT..".totallength();

    // let name="INDIA";
    // console.log(name.trim().length);

    "hellodear".totallength();
    "learn javaScript ".totallength();
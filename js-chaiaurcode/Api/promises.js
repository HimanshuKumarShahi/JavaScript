<<<<<<< HEAD
// const promiseone=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         console.log("async is working...");
//         resolve();
//     },1000)

// });

// promiseone.then(()=>{
//     console.log("hello settimeout is working...");

// })

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("working setTimeout...");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("hello all good workind...");

// })

// const promisesthree=new Promise(function(resolve,reject){
//   setTimeout(function(){
//     // console.log("it working...");
//   },1000)
//   resolve({username:"himanshu",email: "test@example.com"})
// })

// promisesthree.then(function(user){
//     console.log(user);

// })


// const promisesfour=new Promise((resolve,reject)=>{
//     let error=true;
//     if(!error){
//         console.log("no error");
//         resolve({username:"himanshu",password:"123"})   
//     }else {
//         reject(()=>{
//             console.log("ERROR....FOUND");

//         })
//     }
// })
// promisesfour.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);

// }).catch(()=>{
//     console.log("no data found ERROR.....");

// })


// const promisesfour=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=false;
//     if(!error){
//         console.log("no error");
//         resolve({username:"himanshu",password:"123"})   
//     }else {
//         reject(()=>{
//             console.log("ERROR....FOUND");

//         })
//     }
// })
//     },1000)

// promisesfour
// .then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then((username)=>{
//     console.log(username);

// })
// .catch(()=>{
//     console.log("no data found ERROR.....");

// })
// .finally(()=>{
//     console.log("RESOLVE OR REJECTED both are completed...");

// })


// const promisefive = new Promise((resolve, reject) => {
//      setTimeout(()=>{
//     let error=true;
//     if(!error){
//         console.log("no error");
//         resolve({username:"himanshu",password:"123"})   
//     }
//     else {
//         reject(()=>{
//             console.log("ERROR....FOUND");

//         })
//     }
// },1000)
// })

// async function newpromisefive(){
//     try{
//         let data=await promisefive
//         console.log(data);
//     }
//     catch(error){
//         console.log("error...",error);

//     }
// }
// newpromisefive();

// async function getuserdata(){
//     let responce= await fetch('https://api.github.com/users/Himanshukumarshahi')
//     try {
//         const data=await responce.json()
//         console.log(data);

//     } 
//     catch (error) {
//        console.log("e",error);

//     }
// }
// getuserdata()

// fetch('https://api.github.com/users/Himanshukumarshahi')
//     .then((responce) => {
//         return responce.json();
//     })
//     .then((data) => {
//         console.log(data);

//     })

//     .catch(() => {
//         console.log("error...");
//     })

=======
// const promiseone=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         console.log("async is working...");
//         resolve();
//     },1000)

// });

// promiseone.then(()=>{
//     console.log("hello settimeout is working...");

// })

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("working setTimeout...");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("hello all good workind...");

// })

// const promisesthree=new Promise(function(resolve,reject){
//   setTimeout(function(){
//     // console.log("it working...");
//   },1000)
//   resolve({username:"himanshu",email: "test@example.com"})
// })

// promisesthree.then(function(user){
//     console.log(user);

// })


// const promisesfour=new Promise((resolve,reject)=>{
//     let error=true;
//     if(!error){
//         console.log("no error");
//         resolve({username:"himanshu",password:"123"})   
//     }else {
//         reject(()=>{
//             console.log("ERROR....FOUND");

//         })
//     }
// })
// promisesfour.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);

// }).catch(()=>{
//     console.log("no data found ERROR.....");

// })


// const promisesfour=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=false;
//     if(!error){
//         console.log("no error");
//         resolve({username:"himanshu",password:"123"})   
//     }else {
//         reject(()=>{
//             console.log("ERROR....FOUND");

//         })
//     }
// })
//     },1000)

// promisesfour
// .then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then((username)=>{
//     console.log(username);

// })
// .catch(()=>{
//     console.log("no data found ERROR.....");

// })
// .finally(()=>{
//     console.log("RESOLVE OR REJECTED both are completed...");

// })


// const promisefive = new Promise((resolve, reject) => {
//      setTimeout(()=>{
//     let error=true;
//     if(!error){
//         console.log("no error");
//         resolve({username:"himanshu",password:"123"})   
//     }
//     else {
//         reject(()=>{
//             console.log("ERROR....FOUND");

//         })
//     }
// },1000)
// })

// async function newpromisefive(){
//     try{
//         let data=await promisefive
//         console.log(data);
//     }
//     catch(error){
//         console.log("error...",error);

//     }
// }
// newpromisefive();

// async function getuserdata(){
//     let responce= await fetch('https://api.github.com/users/Himanshukumarshahi')
//     try {
//         const data=await responce.json()
//         console.log(data);

//     } 
//     catch (error) {
//        console.log("e",error);

//     }
// }
// getuserdata()

// fetch('https://api.github.com/users/Himanshukumarshahi')
//     .then((responce) => {
//         return responce.json();
//     })
//     .then((data) => {
//         console.log(data);

//     })

//     .catch(() => {
//         console.log("error...");
//     })

>>>>>>> 6fdb8a8 (Save my local changes)

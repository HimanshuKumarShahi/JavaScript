// const promiseone=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         console.log("async is working...");
//         resolve();
//     },1000)

// });

// promiseone.then(()=>{
//     console.log("hello settimeout is working...");
    
// })

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("working setTimeout...");
        resolve()
    },1000)
}).then(function(){
    console.log("hello all good workind...");
    
})
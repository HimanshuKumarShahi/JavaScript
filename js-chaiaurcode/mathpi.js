console.log(Math.PI);
Math.pi=45;
console.log(Math.pi);


// older version to change pi value 

const descriptor=Object.getOwnPropertyDescriptor(Math,'pi')
console.log(descriptor);


const user={
    username:"rajesh",
    email:'raj@sh.com'
}
console.log(Object.getOwnPropertyDescriptor(user,"email"));
Object.defineProperty(user,"email",{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(user,"email"));


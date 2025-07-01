// const student={
//     fullname:"Hmanshu",
//     Rollno:14,
//     Marks:94.2,
//     printmarks:function(){
//         console.log("marks:",this.Marks);
//     }
// };
// const employee={
//     calctax(){
//         console.log("tax rate is 10%");
//     },
// }
// const boss={
//    salary:50000,
// const boss1={
// };
//    salary:25000,
// };
// const boss2={
//    salary:75000,
// };
// const boss3={
//    salary:49000,
// };
// boss.__proto__=employee ;
// boss1.__proto__=employee ;
// boss2.__proto__=employee ;
// boss3.__proto__=employee ;
// -------------class and Object----------
// class Toyotacar {
//     constructor(brand,millege,speed,hp)
//     {
//         console.log("creating new object.");
//         this.brand=brand;
//         this.millege=millege;
//         this.speed=speed;
//         this.hp=hp;
//     }
//     start(){
//         console.log("Start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     // setbrand(brand){
//     //     this.brandname=brand;
//     // }
// }
// let fortuner=new Toyotacar("fortuner",28,"120km/hr",485);
//fortuner.setbrand("fortuner");
// let laxus=new Toyotacar( "laxus",55,"80km/hr",320);
// laxus.setbrand("laxus");
// class parent{
//     hello(){
//         console.log("hello dear!");
//     }
// }
// class child extends parent{
//     FullName="Himanshu."
// }
// let obj=new child();
// class person{
//     constructor(){
//        this.category ="General";
//     }
//     eat()
//     {
//         console.log("every body eat food.");
//     }
//     sleep()
//     {
//         console.log("every body sleep .");
//     }
//     work()
//     {
//         console.log("do nothing.");
//     }
// }
// class Engineer extends person{
//     work(){
//         console.log("every Engineer want good package.");
//     }
// }
// class Doctor extends Engineer {
//     work(){
//         console.log("every Doctor learn Everyday.");
//     }
// }
// let obj=new Engineer();
// let obj2=new Doctor();
// -----------use of super to inherit-----------
// class person{
//     constructor(){
//        this.category ="General";
//     }
//     eat()
//     {
//         console.log("every body eat food.");
//     }
//     sleep()
//     {
//         console.log("every body sleep .");
//     }
//     work()
//     {
//         console.log("do nothing.");
//     }
// }
// class Engineer extends person{
//     constructor(branch){
//         super();
//         this.branch=branch;
//     }
//     work(){
//         console.log("every Engineer want good package.");
//     }
// }
// class Doctor extends Engineer {
//     work(){
//         super.eat().sleep();
//         console.log("every Doctor learn Everyday.");
//     }
// }
// let obj=new Engineer("CS");
// let obj2=new Doctor();
// class user{
//     constructor(name,email)
//     {
//         this.name=name;
//         this.email=email;
//     }
//    viewdata(){
//     console.log(`name:${this.name} and email: ${this.email}`);
//    }
// }
// let student1=new user("Himanshu","hk@123.gamil.com");
// let student2=new user("Rahul","@124.gamil.com");

// class user{
//     constructor(name,email)
//     {
//         this.name=name;
//         this.email=email;
//     }
//    viewdata(){
//     console.log(`name:${this.name} and email: ${this.email}`);
//    }
// }
// class Admin extends user{
//     constructor(name,email){
//         super(name,email);
//     }
//     editdata(){
//         console.log("you can edit");
//     }
// }
// let admin1=new Admin("suresh","kiku@3345gmail.com");
// let student1=new user("keshav","yellow@12345gmail.com");

// console.log("one");
// console.log("two");
// setTimeout(()=>{
//     console.log("i am b/w 2-3.");
// },4000);
// console.log("three");
// console.log("four");

// function sum (a,b){
//    console.log(a+b);
// };
// function calculator( a ,b,sumcallback)
// {
// sumcallback(a,b);
// }
// const hello=()=>{
//         console.log("JAI SHREE RAM.");
// };
// setTimeout(hello , 3000);

// function getdata(dataid,getnextdata){
//     setTimeout(()=>{
//         console.log("Data is:",dataid);
//         if(getnextdata){
//             getnextdata ();
//         }
//     },2000);
// }
// // callback hell
// getdata(1,()=>{
//     console.log("please wait! Getting 2nd data .....");
//     getdata(2,()=>{
//         console.log("please wait! Getting 3rd data .....");
//         getdata(3,()=>{
//             console.log("please wait! Getting 4th data .....");
//             getdata(4);
//         })
//     })
// })

// ----Promise----
// let promise = new Promise( (resolve) => {
//     console.log("hello ")
//     console.log("Iam promice.");
//     resolve("324");
//  } )
//  let promise = new Promise( (resolve) => {
//     console.log("rerrr")
//  })
//  let promise = new Promise( (reject) => {
//     console.log("rerrr")
//  })

// async function hello(){
//     console.log("hello");
// }

// ----------Api usages----------


// const url = "https://cat-fact.herokuapp.com/facts"; 
// const factdata=document.querySelector("#facts");
// const btn=document.querySelector("#btn");


// const getfacts= async()=>{
//     console.log("Getting Data.......");
//     let responce = await fetch(url);
//     console.log(responce);
//     let data= await responce.json();
//     factdata.innerText=data[0].text; 
//     factdata.innerText=data[1].text;    
// };
// btn.addEventListener("click",getfacts);
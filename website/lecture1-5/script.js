 // document.getElementById("one").textContent=`hello` ;
// document.getElementById("two").textContent=` I love pizza ` ;

// let x;
// x=100;
// let y;
// y=56;
// console.log(x);
// console.log(y);
// console.log(x+y);
// console.log(x*y);
// console.log(`x+y`);

// let age=20;
// let price=100;
// let cgpa=7.9;
// let Firstname=`Himanshu`;
// let Lastname=`Kumar Shahi`;
// let email=`kh419368@gmail.com`;

// console.log(age);
// console.log(`your age is ${age}`);
// console.log(`your monthly income is $${price}`);
// console.log(`your cgpa is ${cgpa}`);
// console.log(typeof email)
// console.log(Firstname);
// console.log(`MY name is ${Firstname}`);
// console.log(`MY last is ${Lastname}`);
// console.log(`MY email is ${email}`);

// let online=false;
// console.log(`Himanshu is your name ${online}`);
// let onlin=true;
// console.log(`Himanshu is your name ${onlin}`);
//  let fullname=`Himanshu kumar shahi`;
//  let age1 =21;
//  let student=`True`;
//  document.getElementById("p1").textContent = `your name is ${fullname}`;
//  document.getElementById("p2").textContent = `your age is ${age1}`;
//  document.getElementById("p3").textContent = `you are the student of bca :${student}`;
// -------assigning-----
// const Item={
//     Title:"ball pen",
//     Ratting:5,
//     Offer:15,
//     Price:250
// };
// console.log(Item.Title);
// console.log(Item.Ratting);
// console.log(Item.Offer);
// console.log(Item.Price);
// -----------operator---------
// let a=10;
// console.log(`a =`,a);
// console.log(`a =`,a++);
// console.log(`a =`,a);
// console.log(`a =`,++a);
// console.log(`a =`,a);
// console.log(`a =`,a--);
// console.log(`a =`,a);
// console.log(`a =`,--a);
// console.log(`a =`,a);
// ------if-else ,else if---------
// let mode = "light";
// let color;
// if (mode === "dark") {
//   color = "black";
// }
// if (mode === "light") {
//   color = "dark";
// }
// else{
//     color="white";
// }
// console.log(color);

// let age="10";
//    let result= age >=50? "adult":"child";
//     console.log("output is",result);

// let num= prompt("Enter your number:");
//     if(num%5 === 0)
//     {
//         console.log(num ,"is divisible by 5");
//     }
//     else{
//         console.log(num ,"is not divisible by 5");
//     }
// let num= prompt("Enter your number:");
//     if(num%3 === 0)
//     {
//         console.log(num ,"is divisible by 3");
//     }
//     else{
//         console.log(num ,"is not divisible by 3");
//     }
// -----using prompt to take input---------
// let marks= prompt("Pleae enter your arks:");

//      if(marks >= 80 && marks <=100)
//      {
//         console.log("you got",marks,"marks so you got grade A++");
//      }
//      else if(marks >= 60 && marks <=79 )
//      {
//         console.log("you got",marks,"marks so you got grade A");
//      }
//      else if(marks >= 40 && marks <=59  )
//      {
//         console.log("you got",marks,"marks so you got grade B");
//      }
//     else if(marks >= 0 && marks <= 39)
//      {
//         console.log("you got",marks,"marks so you are fail");
//      }
//      else
//      {
//         console.log("please enter marks in limit (0,100)");
//      }
// ----------loops-----------
// for loop
// for(let i=1;i<=10;i++)
// {
//     console.log("hello");
// }
// ------sum of number-----
// let input=prompt("enter number for sum:");
// let sum=0;
// for(let i=1;i<=input;i++)
// {
//     sum=sum+i;
// }
// console.log("sum:",sum);
// console.log("sum is calculated.");
// ----while loop---
// let i=1;
// while(i <= 10)
// {
//     console.log("hello dear ");
//     i++;
// }
// ---do while loop----
// let i=10;
// do{
//     console.log("hello");
//     i++;
// }while(i<=5);
// ----print even no----
// for(let i=0; i<=100;i++)
// {
//     // console.log(i);
//     if(i%2===0)
//     {
//         console.log(i,"the no is even.");
//     }
//    else{
//     console.log(i,"the no is odd");
//    }
// }
// ----game random no ----
// let gameno="20";
// let userno= prompt("Enter your gusee number:");
// while(userno != gameno)
// {
//     userno=prompt("Again enter the guess no.Try again:");
// }
// console.log("congratulation you choose correct number and number is:",gameno);

// ---usages of templete laterals---
// let obj ={
//     item:"rose",
//     rate:10
// }
// console.log("the",obj.item,"and price is:",obj.rate);
// let input= `the product is ${obj.item} and the price is:${obj.rate}`;
// console.log(input);
// let input=prompt("enter your name:");
// console.log('@'+ input,input.length);
// --------Array ------
// let marks = [98, 68, 75, 47, 90];
// console.log(marks);
// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);
// console.log(marks[4]);
// console.log(marks.length);
// console.log(marks[3]=91);
// console.log(marks);
// console.log((marks[5] = 100));
// console.log(marks);
// for(let i=0;i<marks.length;i++)
// {
//     console.log(marks[i]);
// }
// -----special for loop (in,of)--------
// for (let mar of marks) {
//     console.log(mar);
// }
// let city=['mumbai','navi-mumbai','chennai','delhi','Thane','Patna','Muzaffarpur'];
//     for(let cit of city){
//         console.log(cit);
//         console.log(cit.toUpperCase());
//     }

// let stmarks=[96,86,79,68,35,91];
// let sum=0;
// for(let marks of stmarks)
// {
//    sum+=marks;
// }
// let avg=sum/stmarks.length;
// console.log(`student's marks=${sum},and the average marks is${avg}.`);
// ------problem------
// let items=[200,500,350,780,900,37];
// for( let i=0;i<items.length;i++)
// {
//     let offer=items[i] / 10;
//      items[i]-=offer;
// }
// console.log(items);
// console.log(`the prices are 10% of ${items}.`);
// let storecompanies=["Boolberg","microsoft",'uber','google','IBM','netflix'];
// console.log(storecompanies);
// storecompanies.shift();
// storecompanies.push("Amazon");
// storecompanies.slice(2,1,"ola");
// console.log(storecompanies);
// ---------FUNCTIONS---------
// function home()
// {
//     console.log("hello! dear your most welcome😊");
//     alert("welcome.");
// }
// home();
// function sum(x,y)
// {
//     return x+y;
// }
// function mult(x,y)
// {
//     return x*y;
// }
// function sub(x,y)
// {
//     return x-y;
// }
// function div(x,y)
// {
//     return x/y;
// }
// -----arrow function ----
// sum arrow function---
// const arrowsum=(x,y)=>{
//     return x+y;
// };
// multiply arrow function---
// const mult=(x,y)=>{
//     return x*y
// };
// let count=0;
// function vowelcheck(str)
// {
//     for(const char of str)
//     {
//         if(char==="a"||char==="A"||char==="e"||char==="E"||char==="i"||char==="I"||char==="o"||char==="O"||char==="u"||char==="U")
//         {
//             count++;
//         }
//     }
//     return count;
// };
// const vowelch=(str)=>{
//     let count=0;
//     for(const char of str)
//         {
//             if(char==="a"||char==="A"||char==="e"||char==="E"||char==="i"||char==="I"||char==="o"||char==="O"||char==="u"||char==="U")
//             {
//                 count++;
//             }
//         }
//         return count;
// }
// -----for each function------
// let item=[1,2,3,4,5];
// item.forEach(function printval(val){

//     console.log(val);
// })
// let city=['pune','navimumbai','delhi','patna'];
// city.forEach((val,idx)=>{
//     console.log(val.toUpperCase(),`::: the index are:${idx}`);
// })
// ------practic------
// let num=[2,5,6,35,89,15,3];
// num.forEach((val)=>{
//     console.log(`the number is ${val}.and the square is ${val*val}`);
// } )
// -------map use in arry-----
// let num=[34,2,56,76,95];
// let newarr=num.map((val)=>{
//   return val*val;
// })
// console.log(newarr);
// -------using filter in array----
//     let num=[34,56,27,55,90,95,145,8913,73,26,56,0];
//    let newnum= num.filter((val)=>{
//         return val%2===0;
//     })
//     console.log(newnum);
// ------reduce in array-----
// let num = [34, 23, 56, 78, 47, 89];
// const output=num.reduce((cur,val)=>{
//     return cur+val;
// })
// console.log(output);
// -----greatest one-----
// let num = [34, 23, 56, 178, 470, 89];
// const output=num.reduce((cur,val)=>{
//     return cur>val?cur:val;
// })
// console.log(output);
// ------problem----
// let marks=[77,85,90,92,99,53,79,9];
// const lmark=marks.filter((val)=>{
//     return val>90;
// })
// console.log(lmark);
// let num=prompt("enter the number");
// let arr=[];
// for(let i=1;i<=num;i++)
// {
//     arr[i-1]=i;
// }
// console.log(arr);
// let sum=arr.reduce((val,car)=>{
//     return val+car;
// })
// console.log("sum:",sum);
// console.log(arr);
// const mul=arr.reduce((val,car)=>{
//     return val*car;
// })
// console.log("multiply:",mul);
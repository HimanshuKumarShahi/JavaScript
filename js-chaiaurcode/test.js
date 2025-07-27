// console.log("Himanshu");
// // variables
// const accountId=234678;
// var accountName="ace123";
// let accountEmail="abc@gmail.com";
// console.log(accountId);
// // accountId=2341;
// // console.log(accountId);
// console.log(accountName);
// accountName="ram2323";
// console.log(accountName);
// console.log(accountEmail);
// accountEmail="Laila@123";
// console.log(accountEmail);
// console.table({accountId, accountName, accountEmail});

// //datatypes
// let name="Himanshu";
// let age=20;
// let isloggedIn=false;


// let score=22;
// console.log(typeof score);
// console.log(score);

// let no="45";
// console.log(typeof no);
// let number=Number(no);
// let st=String(no);
// let boo=Boolean(no);
// console.log(typeof number);
// console.log(number);
// console.log(st);
// console.log(boo);

// let x=2;
// console.log(x);
// x--;
// console.log(x);
// x++;
// console.log(x);


// console.log("2" == 2);
// console.log("2" === 2);

// call by value stack memory = Number, String, Boolean, undefined, null, Symbol
// call by reference heap memory = Object, Array, Function

// let Name="Himanshu";
// let repo=45;
// console.log(`${Name} has ${repo}.`);

// let Word = new String("himanshu shahi");
// console.log(Word.toLowerCase());
// console.log(Word.toUpperCase());
// console.log(Word.length);
// console.log(Word.charAt(2));
// console.log(Word.indexOf("s"));

// const newword =Word.slice(0, 14);
// console.log(newword);

// ++++++++++++++++++++++++++++
//             Number
// let score = 456;
// console.log(score);
// let amount=new Number(9843.765);
// console.log(amount);
// console.log(amount.toString().length);
// console.log(amount.toFixed(2));
// console.log(amount.toPrecision(5));

// const price=10000000;
// console.log(price.toLocaleString("en-IN"));


// +++++++++++++++++++++++++++++++++++
//           Math
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.round(95.89));
// console.log(Math.abs(-45));

// console.log((Math.random()*10 )+1 );
// console.log(((Math.random() * 100) + 1).toFixed(0));

// console.log(Math.floor(Math.random()*10 ) +1 );

// const min=10;
// const max=30;
// console.log(Math.floor(Math.random() *( max-min +1) + min));


//        Date 

let mydate=new Date();
// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toDateString());
// console.log(mydate.toTimeString());
// console.log(mydate.toLocaleString());

// const newdate= new Date("2023-04-23");
// const newdate= new Date("05-23-2023");
// const newdate= new Date(2023,4,23);
// console.log(newdate.toDateString());
// console.log(newdate.toDateString());

// const mytime= new Date();
// console.log(mytime.getTime());
// console.log(Math.floor(mytime.getTime()/1000));

console.log(mydate.toLocaleString('default',{
    weekday:"long",
    day:"numeric",
    month:"long",
}));
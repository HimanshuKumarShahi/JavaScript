
// for loop

// for (let a = 1; a <= 10; a++) {
//     const element = a;
//     console.log(element);
// }

// for (let i = 1; i <=3; i++) {
//    console.log(`outer loop value ${i}`);
//    for(let j=1;j<=10;j++){
//     console.log(`innerloop value j:${j} , outer loop i:${i} `);
//     console.log( i + `*` + j + `=` + (i*j));
    
//    }
// }

// let arr=[23,78,99,45,345,98,765,0];
//     console.log(arr.length);
    
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);   
// }

// for (let i = 1; i <= 20; i++) {
//     if(i == 12){
//         console.log(`the number is detected ${i}`);
//         break;
        
//     }
//     console.log(i);
// }


// for (let i = 1; i <= 20; i++) {
//     if(i == 12){
//         console.log(`the number is detected ${i}`);
//         continue;
        
//     }
//     console.log(i);
// }

// console.log(`------while loop ---------`);

// let i=1;
// while (i<=25) {
//     console.log(`the numbers : ${i}`);
//     i+=2;
// }

// let arr=["ram","sita","laxman","bharat","shatrughan"];
// let i=0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i=i+1    
// }

// let i=20;
// do{
//     console.log(`The num is: ${i}`);
//     i--;
    
// }while(i >= 0);

// console.log(`----loops for,in,of ------`);

// let arr=[2,6,45,7,87,9,3,76]

// for (const value of arr) {
//     console.log(value);
// }

// let word="javascript is best language";

// for (const char of word){
//     console.log(`the char is:${char.toUpperCase()}`);
    
// }

// const map = new Map();
// map.set(`IN`,`india`)
// map.set(`USA`,`america`)
// map.set(`uk`,`england`)
// map.set(`fr`,`france`)

// console.log(map);

// for(const [id,value] of map){
//     console.log(id + `:-` + value);
    
// }

// for loop

// for (let a = 1; a <= 10; a++) {
//     const element = a;
//     console.log(element);
// }

// for (let i = 1; i <=3; i++) {
//    console.log(`outer loop value ${i}`);
//    for(let j=1;j<=10;j++){
//     console.log(`innerloop value j:${j} , outer loop i:${i} `);
//     console.log( i + `*` + j + `=` + (i*j));
    
//    }
// }

// let arr=[23,78,99,45,345,98,765,0];
//     console.log(arr.length);
    
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);   
// }

// for (let i = 1; i <= 20; i++) {
//     if(i == 12){
//         console.log(`the number is detected ${i}`);
//         break;
        
//     }
//     console.log(i);
// }


// for (let i = 1; i <= 20; i++) {
//     if(i == 12){
//         console.log(`the number is detected ${i}`);
//         continue;
        
//     }
//     console.log(i);
// }

// console.log(`------while loop ---------`);

// let i=1;
// while (i<=25) {
//     console.log(`the numbers : ${i}`);
//     i+=2;
// }

// let arr=["ram","sita","laxman","bharat","shatrughan"];
// let i=0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i=i+1    
// }

// let i=20;
// do{
//     console.log(`The num is: ${i}`);
//     i--;
    
// }while(i >= 0);

// console.log(`----loops for,in,of ------`);

// let arr=[2,6,45,7,87,9,3,76]

// for (const value of arr) {
//     console.log(value);
// }

// let word="javascript is best language";

// for (const char of word){
//     console.log(`the char is:${char.toUpperCase()}`);
    
// }

// const map = new Map();
// map.set(`IN`,`india`)
// map.set(`USA`,`america`)
// map.set(`uk`,`england`)
// map.set(`fr`,`france`)

// console.log(map);

// for(const [id,value] of map){
//     console.log(id + `:-` + value);
    
// }


// let coding=[`java`,`javascript`,`ruby`,`cpp`];

// let values=coding.forEach( (items)=>{
//     console.log(items);
    
// } )

// console.log(values);

// const number=[3,6,76,5,55,34,98,20];

// let num=number.filter((number)=> number>33)
// let num=number.filter((number)=> {
//     return number>=34;
// })

// const num=[];

// number.forEach((item)=>{
//     if(item>=34){
//         num.push(item);
//     }
// })

// console.log(num);

// A library object that contains a collection of books
// const books= [
//     {
//       title: "Eloquent JavaScript",
//       author: "Marijn Haverbeke",
//       publisher: "No Starch Press",
//       pages: 450
//     },
//     {
//       title: "You Don’t Know JS",
//       author: "Kyle Simpson",
//       publisher: "O’Reilly Media",
//       pages: 50
//     },
//     {
//       title: "You Don’t Know JS",
//       author: "Kyle Simpson",
//       publisher: "O’Reilly Media",
//       pages: 3500
//     },
//     {
//       title: "You Don’t Know JS",
//       author: "Kyle Simpson",
//       publisher: "O’Reilly Media",
//       pages: 62
//     },
//     {
//       title: "You Don’t Know JS",
//       author: "Kyle Simpson",
//       publisher: "O’Reilly Media",
//       pages: 30
//     },
//     {
//       title: "You Don’t Know JS",
//       author: "Kyle Simpson",
//       publisher: "O’Reilly Media",
//       pages: 180
//     },
//     {
//       title: "You Don’t Know JS",
//       author: "Kyle Simpson",
//       publisher: "O’Reilly Media",
//       pages: 359
//     },
//     {
//       title: "You Don’t Know JS",
//       author: "Kyle Simpson",
//       publisher: "O’Reilly Media",
//       pages: 1050
//     },
//     {
//       title: "JavaScript: The Good Parts",
//       author: "Douglas Crockford",
//       publisher: "O’Reilly Media",
//       pages: 176
//     }
//   ];

//   let data= books.filter((items)=> items.title === `JavaScript: The Good Parts`)
//   data = books.filter((item)=>{
//      return item.pages >=30 && item.title=== `Eloquent JavaScript` })
//   console.log(data);
  

//   const flipkartStore= [
//     {
//       id: 1,
//       name: "Apple iPhone 14",
//       brand: "Apple",
//       price: 71999,
//       rating: 4.6,
//       reviews: 15234
//     },
//     {
//       id: 2,
//       name: "Samsung Galaxy S23",
//       brand: "Samsung",
//       price: 64999,
//       rating: 4.5,
//       reviews: 9876
//     },
//     {
//       id: 3,
//       name: "OnePlus Nord CE 3",
//       brand: "OnePlus",
//       price: 24999,
//       rating: 4.3,
//       reviews: 8432
//     },
//     {
//       id: 4,
//       name: "Sony WH-1000XM5 Headphones",
//       brand: "Sony",
//       price: 29999,
//       rating: 4.7,
//       reviews: 4123
//     },
//     {
//       id: 5,
//       name: "boAt Airdopes 141",
//       brand: "boAt",
//       price: 1299,
//       rating: 4.2,
//       reviews: 27890
//     },
//     {
//       id: 6,
//       name: "HP Pavilion Laptop",
//       brand: "HP",
//       price: 58999,
//       rating: 4.4,
//       reviews: 3567
//     },
//     {
//       id: 7,
//       name: "ASUS ROG Strix Gaming Laptop",
//       brand: "ASUS",
//       price: 124999,
//       rating: 4.6,
//       reviews: 1845
//     },
//     {
//       id: 8,
//       name: "LG 55-inch 4K Smart TV",
//       brand: "LG",
//       price: 62999,
//       rating: 4.5,
//       reviews: 2978
//     },
//     {
//       id: 9,
//       name: "Canon EOS 1500D DSLR Camera",
//       brand: "Canon",
//       price: 38999,
//       rating: 4.4,
//       reviews: 1987
//     },
//     {
//       id: 10,
//       name: "Nike Air Zoom Running Shoes",
//       brand: "Nike",
//       price: 4999,
//       rating: 4.3,
//       reviews: 5432
//     }
//   ];

// let flipkartitems= flipkartStore.filter((item)=>{
//      return item.price > 5000 && item.rating >= 4.50;
// })

//     console.log(flipkartitems);

    //  const number=[3,6,76,5,55,34,98,20];

    //  const num=number.map((item)=>(item+10));
    //  const num=number.map((item)=>{return item+10});
    //  console.log(num);
     

//     const books = {
//   collection: [
//     {
//       title: "Eloquent JavaScript",
//       author: "Marijn Haverbeke",
//       subject: "Programming",
//       pages: 450,
//       publish: "No Starch Press",
//       distributed: "Worldwide"
//     },
//     {
//       title: "You Don’t Know JS Yet",
//       author: "Kyle Simpson",
//       subject: "JavaScript",
//       pages: 350,
//       publish: "O’Reilly Media",
//       distributed: "Global"
//     },
//     {
//       title: "JavaScript: The Good Parts",
//       author: "Douglas Crockford",
//       subject: "Programming",
//       pages: 176,
//       publish: "O’Reilly Media",
//       distributed: "International"
//     },
//     {
//       title: "Clean Code",
//       author: "Robert C. Martin",
//       subject: "Software Engineering",
//       pages: 464,
//       publish: "Prentice Hall",
//       distributed: "Worldwide"
//     },
//     {
//       title: "Introduction to Algorithms",
//       author: "Thomas H. Cormen",
//       subject: "Computer Science",
//       pages: 1312,
//       publish: "MIT Press",
//       distributed: "Global"
//     },
//     {
//       title: "Python Crash Course",
//       author: "Eric Matthes",
//       subject: "Programming",
//       pages: 544,
//       publish: "No Starch Press",
//       distributed: "Worldwide"
//     },
//     {
//       title: "Operating System Concepts",
//       author: "Abraham Silberschatz",
//       subject: "Computer Science",
//       pages: 976,
//       publish: "Wiley",
//       distributed: "International"
//     },
//     {
//       title: "Database System Concepts",
//       author: "Henry F. Korth",
//       subject: "Database",
//       pages: 1376,
//       publish: "McGraw-Hill",
//       distributed: "Global"
//     },
//     {
//       title: "Artificial Intelligence: A Modern Approach",
//       author: "Stuart Russell & Peter Norvig",
//       subject: "AI / Machine Learning",
//       pages: 1132,
//       publish: "Pearson",
//       distributed: "Worldwide"
//     },
//     {
//       title: "The Pragmatic Programmer",
//       author: "Andrew Hunt & David Thomas",
//       subject: "Software Development",
//       pages: 352,
//       publish: "Addison-Wesley",
//       distributed: "Global"
//     }
//   ]
// };

// let impbook= books.collection.filter((item)=>{
//     return item.pages>=200 && item.distributed === `Global`;
// })

// console.log(impbook);


// let numbers = [5, 12, 8, 20, 3, 15, 7, 25, 18, 10];

// let num= numbers
//                 .map((item)=>(item*10))
//                 .map((item)=>(item+5))
//                 .filter((item)=>(item%5 === 0))

// console.log(`the number is divisivle by 5 : ${num}`);
// console.log(num);

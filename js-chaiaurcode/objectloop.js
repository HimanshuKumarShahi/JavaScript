//  const myobj={
//     name:"chai",
//     experience:"4yrs",
//     role:"developer",
//     charges:"$400"
//  }

// for (const key in myobj){
//     // console.log(`key is: ${myobj[key]}`);
//     console.log(`${key} :- ${myobj[key]}`);
//  }

// const arr=["javascript","python","java","cpp"];

// for (const value in arr){
//     console.log(value);
//     console.log(arr[value]);   
// }

// arr.forEach(function (value,keys){
//     console.log(value , keys);
    
// })

// arr.forEach( (value)=>{
//     console.log(value );
    
// })

// function fun(items){
//     console.log(items);
    
// }
// arr.forEach(fun);

// arr.forEach((items,index,arr)=>{
//     console.log(items,index,arr);
    
// })


let coding=[
    {
        language:`javascript`,
        filename:`js`
    },
    {
        language:`java`,
        filename:`java`
    },
    {
        language:`python`,
        filename:`py`
    },
    {
        language:`cpp`,
        filename:`c++`
    }
]
coding.forEach((value)=>{
    console.log(`${value.language} :- ${value.filename}`);
    // console.log(value.filename);
    
})
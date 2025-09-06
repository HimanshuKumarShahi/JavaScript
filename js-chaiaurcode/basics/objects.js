// const mysym=Symbol("@")

// const user={
//     name:"himanshu",
//     "fullname":"Himanshu Kumar",
//     mysym:"@",
//     age:20,
//     location: "India",
//     isloggedin:false,
//     email:"himanshu@google.com",
//     lastseen:"10/10/2023",
//     lastdayvisited:"monday"
// }
// console.log(user)
// console.log(user["email"])
// console.log(user.fullname);
// console.log(user["fullname"]);
// console.log(user.mysym);
// user.email="HK@gmail.com"
// Object.freeze(user)
// user.email="H@gml.com"
// console.log(user.email)
// console.log(typeof mysym)

// user.add=()=>{
//     console.log(`hello welcome ${user.name}`);
//     console.log(`hello welcome ${user.fullname}`);
// }
// console.log(user.add());



// const tinderuser= new Object(); // singleton object
const tinderuser = {} //non singleton object

tinderuser.name = "smaeer"
tinderuser.id = "abc43"
tinderuser.isloogedin = false
tinderuser.age = 25

// console.log(tinderuser);

const regularuser = {
    name: "himanshu",
    fullname: {
        idname: {
            firstname: "himanshu",
            lastname: "kumar"

        }

    }
}
// console.log(regularuser);
// console.log(regularuser.name);
// console.log(regularuser?.fullname);
// console.log(regularuser.fullname.idname);


// const obj1={1:"a",2:"b",3:"c"}
// console.log(obj1);
// const obj2={4:"d",5:"e",6:"f"}
// console.log(obj2);
// const obj={7:"g",8:"h",9:"i"}

// const obj3={obj1,obj2}
// console.log(obj3);

// const obj4={...obj1,...obj2,...obj}
// console.log(obj4);

// console.log("---------------------");

// const obj5=Object.assign({},obj1,obj2,obj)
// console.log(obj5);

// console.log("--------------------");
// console.log("when data come from dbms");

const dbms=[
    {id:1,
    email:"hk@123"
    },
    {id:2,
    email:"hk@123"
    },
    {id:3,
    email:"hk@123"
    },
    {id:4,
    email:"hk@123"
    }
]

// console.log(dbms[1].id);
// console.log(dbms[1].email);
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty("age"));

// const course={
//     teachername:"hitesh choudhary",
//     price:"99",
//     coursename:"learn  javascript",
//     hours:"20 hrs"

// }
// console.log(course.teachername);

// const {price,teachername:a,hours}=course
// console.log(price,hours);
// console.log(a.toUpperCase());


// {
//     "name":"Himanshu",
//     "age":"20",
//     "location":"India"
// }


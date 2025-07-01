// let detail=document.getElementById("one");
// console.dir(detail);

// let details=document.getElementById("two");
// console.dir(details);
// let info=document.getElementsByClassName("sum");
// console.dir(info);
// document.getElementsByTagName("p");
// let info=document.querySelector("p");
// console.dir(info);
// let inf=document.querySelectorAll("p");
// console.dir(inf);
// let inf=document.querySelectorAll(".sum");
// console.dir(inf);
// let data=document.querySelector("h1");
// data.innerText=data.innerText+"I also love making website";
// console.dir(data.innerText);
// let boxs=document.querySelectorAll(".box");
// let count=1;
//     for(div of boxs)
//     {
//         div.innerText=`"hello I am Himanshu.${count}"`;
//         count++;
//     }

// boxs[0].textContent="wel-come to the 1 div";
// boxs[1].textContent="wel-come to the 2 div";
// boxs[2].textContent="wel-come to the 3 div";

// let val =document.querySelector("div");
// console.log(val);
// let id=val.getAttribute("id");
// console.log(id);
// let name=val.getAttribute("name");
// console.log(name);

// let pare=document.querySelector("p");
// console.log(pare.getAttribute("class"));

// let pare=document.querySelector("p");
// console.log(pare.setAttribute("class","newclass"));

// let newbtn=document.createElement("button");
// newbtn.innerText=  "click me!";
// console.log(newbtn);
// let val=document.querySelector("div");
// val.append(newbtn);
// let va=document.querySelector("ul");
// va.before(newbtn);

// let btn=document.createElement("button");
// btn.innerText="Click me!";
// btn.style.color="white";
// btn.style.backgroundColor="red";
// document.querySelector("body").prepend(btn);

// let heading=document.createElement("h1");
// heading.innerText="Wel-Come To The Web-site.";

// let para=document.querySelector("p");
// para.innerText="I am Pro-Coder.";

// let btn=document.querySelector("button");
// btn.onclick=()=>{
//     console.log("you ckick a button.");
//     let a=2;
//     a++;
//     console.log(a);
// }
// let div=document.querySelector("div");
// div.onmouseenter=()=>{
//     console.log("hello!dear");
//     div.style.backgroundColor="red";
// }
// div.onmouseout=()=>{
//     console.log("By dear");
//     div.style.backgroundColor="green";
// }
// const data=()=>{
//     console.log("hello dear you click button😊");
// }
// btn.addEventListener("click",data);

// btn.addEventListener("click",()=>{
//     console.log("hello dear.");
// });
    // console.log(event);
    // console.log(event.type);
    // console.log(event.target);

// btn.removeEventListener("click",data);
let btn=document.querySelector("#btn");
let mode="light";
let body= document.querySelector("body");

    btn.addEventListener("click",()=>{
        if(mode==="light"){
            mode ="dark";
           body.classList.add("dark");
           body.classList.remove("light");
        }
        else{
            mode ="light";
          
            body.classList.add("light");
            body.classList.add("dark");
        }
        console.log(mode);
    }) 
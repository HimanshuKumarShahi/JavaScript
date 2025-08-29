#hello world
## i am learning js.

``` java code
    console.log ("hello world");
     const button=document.querySelectorAll(".button");
        const body=document.querySelector("body");
        
        button.forEach((button)=>{
            button.addEventListener("click",(e)=>{
                // console.log(e.target.id);
                if(e.target.id === "grey")
            {
                body.style.backgroundColor='grey';
            }
            else if(e.target.id === 'white'){
                body.style.backgroundColor='white';
            }
            else if(e.target.id === 'orange'){
                body.style.backgroundColor='orange';
            }
            else if(e.target.id === 'yellow'){
                body.style.backgroundColor='yellow';
            }
            else if(e.target.id === 'green'){
                body.style.backgroundColor='green';
            }
            else if(e.target.id === 'cyan'){
                body.style.backgroundColor='cyan';
            }
            
            })
            
        })


    style.css


      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .canvas {
        height: 700px;
        width: 100%;
        font-size: 25px;
        font-family: 'Times New Roman', Times, serif;
    }

    .button {
        height: 90px;
        width: 180px;
        border: 2px solid black;
    }
    .box{
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    #grey {
        background-color: grey;
    }

    #white {
        background-color: white;
    }

    #orange {
        background-color: orange;
    }

    #yellow {
        background-color: yellow;
    }
    #green{
        background-color: green;
    }
    #cyan {
        background-color: cyan;
    }
```
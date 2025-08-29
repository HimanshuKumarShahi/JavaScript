#hello world
## i am learning js.

``` javascript code

    html code

    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>js project_01</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="canvas">
        <h1>choose color for background change...</h1>
        <div class="box">
            <div class="button" id="grey"></div>
            <div class="button" id="white"></div>
            <div class="button" id="orange"></div>
            <div class="button" id="yellow"></div>
            <div class="button" id="green"></div>
            <div class="button" id="cyan"></div>
        </div>
        <br>
        <h2>here you chose the button with color change background.</h2>
    </div>
</body>
    <script src="script.js"></script>
</html>


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
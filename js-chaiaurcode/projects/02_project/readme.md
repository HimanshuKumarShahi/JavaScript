# here project 2 whole code.
## in which project calculate BMI.

``` javascript code

    Html code

    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>02_project for BMI </title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box1">
        <div class="all">

            <h1>BMI calculator</h1>
            <form>
                <p><label>Height in cm:</label><input type="number" id="height" placeholder="height in cm"></p>
                <p><label>weight in kg:</label><input type="number" id="weight" placeholder="weight in kg"></p>
                <hr>
                <button>calculate</button>
                <div id="result"></div>
                <div id="guide">
                    <h2>Weight guide.</h2>
                    <p> ⁕ Normal weight : b/w 18.6 to 24.9</p>
                    <p> ⁕ overeight weight : after 24.9 </p>
                    <p> ⁕ under weight : less than 18.6</p>
                </div>
            </form>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>


style.css


 * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body {
        width: 100%;
        height: 100%;
        background-color: rgb(0, 0, 0);
        color: white;
    }

    .all {
        height: 50%;
        width: 80%;
        /* background-color: blue; */
        justify-items: center;

    }

    .box1 h1 {
        font-size: 40px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    }

    .box1 p {
        font-size: 30px;
        font-family: cursive;
        padding: 15px;
        margin: 10px;
    }

    .box1 input {
        padding: 10px 20px;
        font-size: 16px;
        font-family: cursive;
        font-weight: 700;
    }

    .box1 button {
        padding: 10px 20px;
        margin: 20px;
        font-size: 28px;
        font-family: cursive;
        font-weight: 600;
        cursor: pointer;
        border: none;
    }

    .box1 button:hover {
        background-color: rgb(34, 35, 35);
        color: white;
    }

    #result {
        font-size: 30px;
        padding: 10px 20px;
        margin: 20px;
        font-family: cursive;
    }

    #guide {
        background-color: wheat;
        color: black;
    }

    #guide h2 {
        font-size: 30px;
        font-weight: 900;
    }


    javascript code


     const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const height = parseInt(document.querySelector('#height').value)
        const weight = parseInt(document.querySelector('#weight').value)
        const result = document.querySelector('#result')

        if (height < 0 || isNaN(height)) {
            result.innerHTML = `please enter proper height ${height}`;

        }
        else if (weight < 0 || isNaN(weight)) {
            result.innerHTML = `Please enter proper weight ${weight}`
        }
        else {
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);
             let choice='';
            if(bmi<18.9){
                choice="under Weight";
            }
            else if(bmi>=19 && bmi<=24.9){
                choice="normal weight";
            }
            else if(bmi>24.9){
                choice="over Weight";
            }
            else {
                choice="obse";
            }
            result.innerHTML = `<span>${bmi} "${choice}"</span>`;
            
        }
    })

```

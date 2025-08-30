<<<<<<< HEAD
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
=======
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
>>>>>>> 99307f0e464aa904162579bd94ac1850598d77f3
    })
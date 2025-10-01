
fetch('https://api.github.com/users/Himanshukumarshahi')
    .then((responce) => {
        return responce.json();
    })
    .then((data) => {
        console.log(data);

    })
    .catch(() => {
        console.log("error...");
    });

    // the working of fetch is priority task that work first then setTimeout or others.

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

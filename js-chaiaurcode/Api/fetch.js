<<<<<<< HEAD
fetch('https://api.github.com/users/Himanshukumarshahi')
    .then((responce) => {
        return responce.json();
    })
    .then((data) => {
        console.log(data);

    })

    .catch(() => {
        console.log("error...");
=======
fetch('https://api.github.com/users/Himanshukumarshahi')
    .then((responce) => {
        return responce.json();
    })
    .then((data) => {
        console.log(data);

    })

    .catch(() => {
        console.log("error...");
>>>>>>> 6fdb8a8 (Save my local changes)
    })
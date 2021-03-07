const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("got the user");
        resolve({ user: "kris" });
    }, 2000);
    });

promise.then(user => {
    console.log(user);
});   

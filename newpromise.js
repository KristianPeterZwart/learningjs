const promise = new Promise((resolve, reject) => {
    setTimeout((() => {
        resolve({ user: "kris" });
    }, 2000);
    });
}
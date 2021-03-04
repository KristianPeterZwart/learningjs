console.log("Start");

function loginUser(email, password){
    setTimeout(() => {
        console.log("Now we have the data");
        return { userEmail: email };
    }, 5000);
}

const user = loginUser = ("krisz@gmail.com", 123456);
console.log(user);

console.log("Finish");
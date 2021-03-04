console.log("Start");

function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log("Now we have the data");
        callback({ userEmail: email });
    }, 5000);
}

function getUserVideos(email){
    setTimeout(() => {
        return ["video1", "video2", "video3"];
    }, 1000);
}

const user = loginUser = ("krisz@gmail.com", 123456, user => {
    console.log(user);
});

console.log("Finish");
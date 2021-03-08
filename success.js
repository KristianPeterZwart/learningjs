console.log("Start");

function loginUser(email, password, onSuccess, onFailure) {

    setTimeout(() => {
        console.log("Now we have the data");
        callback({ userEmail: email });
    }, 5000);
}

function getUserVideos(email, callback) {
    setTimeout(() => {
        callback (["video1", "video2", "video3"]);
    }, 1000);
}
function videoDetails(video, callback){
    setTimeout(() => {
        callback (["title of the video"]);
    }, 1000);
}

const user = loginUser = ("krisz@gmail.com", 123456, user => {
    console.log(user);
    getUserVideos(user,userEmail, videos => {
    });
    videoDetails(videos[0], title => {
        console.log(title);
    });
});

console.log("Finish");

const yt = new Promise(resolve => {
    setTimeout(() => {
        console.log("getting stuff from youtube");
        resolve({ videos: [1, 2, 3, 4, 5] });
    }, 2000);
    });

    const fb = new Promise(resolve => {
        setTimeout(() => {
            console.log("getting stuff from facebook");
            resolve({ user: "name" });
        }, 2000);
        });

        Promise.
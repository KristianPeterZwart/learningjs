// Deconstruct - Spread and Rest Operator

// const items = ["banana", "chocolate", "apple", "cheese"];
// 
// const [banana, ...rest] = items;

// saved everything to a variable

// console.log(rest);
// 
// const newItems = [...items, "peanut"];

// console.log(newItems);

const user = {
    name: "Kris",
    photos: [1, 2, 3, 4, 5, 6],
    age: 44,
    analytics: {
        subscribers: 2500,
        videos: 250
    }
};

// const photos = user.analytics.subscribers

// console.log(photos);

const {subscribers} = user.analytics; 

console.log(subscribers);
// OUTSIDE FUNCTION 
function user(){
    const name = "Kris";
// INNER FUNCTION    
    const displayName = function(greeting) {
        console.log(greeting + name);
    };
    return displayName;
}

const say = user();

say("How are you?")

console.log(say);
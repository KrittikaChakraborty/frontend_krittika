const rd= require("readline");

const k = rd.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("hi, I am Krittika");

function check(a) {
    if (a % 2 === 0)  
        console.log("yes, even");  
    else
        console.log("not even");  
}

k.question("Enter value: ", function(m) {
    check(parseInt(m)); 
    k.close();

});
0.
// Create new Date object
const d = new Date();
// Store the value of getHours in variable
let hour = d.getHours();

console.log(hour);
//hour=20;
if (hour<12) {
    console.log("Good Morning");
// Morning
document.getElementById("Greeting").innerText="Good Morning";
document.getElementById("image").src="";


}
 else if (hour<17) {
    console.log("Good Afternoon");
    document.getElementById("Greeting").innerText="Good Afternoon";
    document.getElementById("image").src=""
// Afternoon
}
else {
    console.log("GoodNight");
    document.getElementById("Greeting").innerText="Good Night";
    document.getElementById("image").src=""
// Night
}
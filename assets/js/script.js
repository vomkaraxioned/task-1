/* Author: 

*/
let btn = document.forms["input-form"]["submit"];
btn.addEventListener("click", change);

function change() {
    let data = document.forms["input-form"]["data"];
    let heading = document.getElementById("output");
    let temp = data.value;
    heading.innerHTML = temp;
    data.value = "";
}
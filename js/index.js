function forminputchangecolor() {
    console.log(1111)
    var first = document.getElementById("first");
    if (first.value == "0") {
        first.classList.remove("blue_border");
    } else {
        first.classList.add("blue_border");
    }

}
function onkeyupFunction() {
    console.log(222222)
    var second = document.getElementById("second");
    if (second.value == "0") {
        document.getElementById("second_name").innerHTML = "This field is required";
        second.classList.add("red_border");
    } else {
        document.getElementById("second_name").innerHTML = "";
        second.classList.remove("red_border");
    }
}   
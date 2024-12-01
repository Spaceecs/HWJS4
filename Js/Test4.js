function calculateArea(length, width) {
    if (length == null && width != null) {
        return width ** 2;
    } else if (length != null && width == null) {
        return length ** 2;
    } else if (length != null && width != null) {
        return length * width;
    } else {
        alert("Error: Both parameters are null");
        return null;
    }
}
let length = parseInt(prompt("Enter length"));
let width = parseInt(prompt("Enter width"));
if (isNaN(length)) length = null;
if (isNaN(width)) width = null;
let result = calculateArea(length, width);
if (result !== null) {
    alert(`The area is: ${result}`);
} else {
    alert("Calculation failed. Invalid input.");
}

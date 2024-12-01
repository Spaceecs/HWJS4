function convertTime(hours,minutes,seconds)
{
    let result = parseInt(seconds)
    result = result + (minutes*60)
    result = result + (hours*60*60)
    return result
}
let hours = prompt("Enter hours")
let minutes = prompt("Enter minutes")
let seconds = prompt("Enter seconds")
let result = convertTime(hours,minutes,seconds)
prompt(result)
function showTime(hours,minutes,seconds)
{
    if(hours==null)
    {
        hours="00"
    }
    if(minutes==null)
    {
        minutes="00"
    }
    if(seconds==null)
    {
        seconds="00"
    }
    while (seconds>60)
    {
        seconds = seconds-60
        minutes++
    }
    while (minutes>60)
    {
        minutes = minutes - 60
        hours++
    }
    if(hours<10)
    {
        hours = "0"+hours
    }
    if(minutes<10)
    {
        minutes = "0"+minutes
    }
    if(seconds<10)
    {
        seconds = "0"+seconds
    }
    alert(`${hours}:${minutes}:${seconds}`)
}
let hours = prompt("Enter hours")
let minutes = prompt("Enter minutes")
let seconds = prompt("Enter seconds")
showTime(hours,minutes,seconds)
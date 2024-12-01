function convertTime(seconds)
{
    if(seconds==null)
    {
        seconds="00"
    }
    let minutes = "00", hours = "00"
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
    if(minutes==null)
    {
        minutes="00"
    }
    if(seconds==null)
    {
        seconds="00"
    }
    alert(`${hours}:${minutes}:${seconds}`)
}
let seconds = prompt("Enter seconds")
convertTime(seconds)
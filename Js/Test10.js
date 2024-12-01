function convertTimeToSeconds(hours, minutes, seconds) {
    let result = parseInt(seconds);
    result += parseInt(minutes) * 60;
    result += parseInt(hours) * 60 * 60;
    return result;
}

function convertTimeFromSeconds(totalSeconds) {
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return `${hours}:${minutes}:${seconds}`;
}

function timeDifference(h1, m1, s1, h2, m2, s2) {
    let time1InSeconds = convertTimeToSeconds(h1, m1, s1);
    let time2InSeconds = convertTimeToSeconds(h2, m2, s2);
    let differenceInSeconds = Math.abs(time1InSeconds - time2InSeconds);
    return convertTimeFromSeconds(differenceInSeconds);
}

// Example usage
let h1 = prompt("Enter hours for the first time:");
let m1 = prompt("Enter minutes for the first time:");
let s1 = prompt("Enter seconds for the first time:");

let h2 = prompt("Enter hours for the second time:");
let m2 = prompt("Enter minutes for the second time:");
let s2 = prompt("Enter seconds for the second time:");

let result = timeDifference(h1, m1, s1, h2, m2, s2);
alert(`The difference between the times is: ${result}`);

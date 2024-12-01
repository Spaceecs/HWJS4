function isPerfectNumber(number) {
    if (number <= 0) {
        return false;
    }
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;
}
function perfectNumberOnDiapason(start,end)
{
    let res= []
    for(let i=start;i<=end;i++)
    {
        if(isPerfectNumber(i))
        {
            res.push(i)
        }
    }
    return res
}
let start = parseInt(prompt("Enter start"))
let end = parseInt(prompt("Enter end"))
let res = perfectNumberOnDiapason(start,end)
alert(res)
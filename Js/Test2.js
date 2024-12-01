function Factorial(num)
{
    let result = 1
    for (let i = 1;i<=num;i++)
    {
        result*=i
    }
    return result
}
let num=parseInt(prompt("Enter number"))
let result = Factorial(num)
alert(result)
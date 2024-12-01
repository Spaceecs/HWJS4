function Connect(f,s,t)
{
    let res = f+s+t
    res = parseInt(res)
    return res
}
let f = prompt("Enter first number")
let s = prompt("Enter second number")
let t = prompt("Enter third number")
let res = Connect(f,s,t)
alert(res)
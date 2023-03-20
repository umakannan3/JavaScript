function evalNumbers(num1,num2,calculate)
{
    switch (calculate)
    {
        case "add":
            console.log(num1+num2);
            break;
        case "subtract":
            console.log(num1-num2);
            break;
        case "multiply":
            console.log(num1*num2);
            break;
        case "divid":
            console.log(num1/num2);
            break;
        case "modulus":
            console.log(num1%num2);
            break;
        default:
            console.log("Invalid Operation");            
    }
}evalNumbers(5,6,"add");
evalNumbers(15,6,"subtract");
evalNumbers(5,6,"multiply");
evalNumbers(30,6,"divid");
evalNumbers(75,5,"modulus");
evalNumbers(5,6,"root");
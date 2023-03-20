var num1 = 789, num2 = 1090, GCD;
for(var i=1 ; i <= num1 && i <= num2 ; i++)
{
    if(num1%i == 0 && num2%i == 0)
    {
        GCD = i;
    }   
}
console.log(`GCD of ${num1} and ${num2} is ${GCD}.`);

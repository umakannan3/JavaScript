function findLargest(num1,num2,num3)
{
    if(num1>num2 && num1>num3)
    {
        console.log("the largest no is" +num1);
        return num1;
    }else if(num2>num1 && num2>num3)
    {
        console.log("the largest no is " +num2);
        return num2;
    }else
    {
        console.log("the largest no is " +num3);
        return num3; 
    }
}findLargest(300,200,800);
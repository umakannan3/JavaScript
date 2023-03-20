function checkInRange(start,end,num)
{
    for(var i = start;i<=end;i++)
    {
         if(num>=start && num<=end)
         {
            console.log("Between the range");
         }else
         {
            console.log("Outside the range");
         }
    }

}checkInRange(0,50,25);
checkInRange(10,40,50);
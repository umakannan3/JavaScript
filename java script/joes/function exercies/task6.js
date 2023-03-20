function checkLeapYear(year)
{
    if(year%4 == 0 && year%100 !=0 || year%400 == 0)
    {
        console.log("Leap Year");
    }else
        {
            console.log("not Leap Year");
        }

}checkLeapYear(2020);
checkLeapYear(2000);
checkLeapYear(2021);
checkLeapYear(2050);

function calulate(range)
{
for(var i=1;i<=range;i++)
{
    var text = i.toString();
    const myarr = text.split();
    var sum = myarr[0]+myarr[11];
    if(sum == 5)
    {
        console.log(" ");
    }else
    {
        console.log(i);
    }
}
}console.log(calulate(20));
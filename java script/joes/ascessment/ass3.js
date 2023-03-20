function print(range)
var sum=0;
for(var i=1;i<=range;i++)
{
    if (i < 9)
    {
        if (i == 5)
        {
            console.log(" ");
        }else
        {
            console.log(i);
        }
    }else{
        for(var j = 10;j<=range;j++)
        var m = j%10;
        sum = sum+m;
        var r = j/10;
        if(sum == 5)
        {
            console.log(" ");
        }else{
            console.log(j);
        }

    }
}console.log(100);
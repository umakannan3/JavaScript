var s = 0, i;
for(i=1;i<10;i++)
{
    if(i%3 === 0 || i%5 === 0)
    {
        s=s+i;
    }
}
console.log(s);
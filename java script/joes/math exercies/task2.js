function decimals(val,pv)
{
    if(pv == 0 && pv == " ")
    {
        pv = 2;
    }else if(val == 0)
    {
        return 0;
    }
    val = val.toFixed(pv);
    return val;
}console.log(decimals(2.100212,2));
console.log(decimals(2.100212,3));
console.log(decimals(2100,2));
console.log(decimals(2100));
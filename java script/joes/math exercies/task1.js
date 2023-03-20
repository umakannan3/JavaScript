function rand(min,max)
{
    if(min == null && max == null)
    {
    return 0;
    }else if(min > max || max == null)
    {
        max = min;
    }
    var random_no = Math.floor(Math.random() * max);
    return random_no;
}
console.log(rand(20,1));
console.log(rand(1,10));
console.log(rand(6));
console.log(rand());
function call()
{
    var z = {};
    var y = [];
    for(var i=1;i<=10;i++)
    {
         z = {id:i}
         y.push(z);
    }console.log(JSON.stringify(y)); 
}
call();
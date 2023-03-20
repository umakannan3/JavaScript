function max(arr)
{
    
    // var arr;
    var maxno = 0;
    for(let i = 0; i < arr.length; i++)
    {
        // console.log(maxno);
        if(maxno < arr[i])
        {
            maxno = arr[i];
        }
    }
   return maxno;
}
console.log(max([2,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));
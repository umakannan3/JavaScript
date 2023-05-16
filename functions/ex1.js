let sys = [10,20,30,40]
let sys1 = sys.map(val => val*2)
console.log(sys1);


sys1 = sys.map(multiply)
    function multiply(val){
        return val*2
    }
console.log(sys1)

 const input = [
    {sno : 1 , name : "uma"},
    {sno : 2 , name : "sumathi"},
    {sno : 3 , name : "ruba"},
    {sno : 4 , name : "priyadharshini"},
    {sno : 5 , name : "priya"},
    {sno : 6 , name : "geethamani"}
 ]

 var friends = input.map(x => x.name)
 console.log(friends)

 const cost = [100,200,300,400,500]
 let grand = cost.filter(x => x<301)
 console.log(grand)

 let grtotal = cost.reduce((tot,ele)=>tot+ele,1000)
 console.log(grtotal)
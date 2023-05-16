function Rightangle(n){
    let print="";
    for(let i=0;i<n;i++){
        for(let j=0;j<=i;j++){
            print+="*";
        }print+="\n";
    }console.log(print);
}Rightangle(5);
function Recibrocal(n){
    let print="";
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i;j++){
            print+="*";
        }print+="\n";
    }console.log(print);
}Recibrocal(5);
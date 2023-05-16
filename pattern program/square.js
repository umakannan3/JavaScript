function Square(n){
    let print = "";
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            print+="*";
        }
        print+="\n";
    }
    console.log(print);
}Square(5);
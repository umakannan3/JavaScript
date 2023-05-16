function Right(n){
    let print = "";
    for(let i = 1; i<=n;i++){
        for(let j=0;j<n-i;j++){
            print+=" "
        }
            for(let k=0;k<i;k++){
                print+="*";
            }
        print+="\n";
    }console.log(print);
}Right(5);
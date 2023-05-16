function Hallowsquare(n){
    var print="";
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(i==0 || i==(n-1)){
                print+="*";
            }else{
                if(j==0 || j==(n-1)){
                    print+="*"
                }else{
                    print+=" "
                }
            }
        }print+="\n";

    }console.log(print);
} Hallowsquare(5);
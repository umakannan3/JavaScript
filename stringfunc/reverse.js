function Reverse(str){
    const arr = str.split("");
    arr.reverse();
    str = arr.join("");
    console.log(str);
}Reverse("apple");
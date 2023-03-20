function calc(){
var n = (document.getElementById("name").value);
var r = (document.getElementById("Rno").value);
var m1 = parseInt(document.getElementById("m1").value);
var m2 = parseInt(document.getElementById("m2").value);
var m3 = parseInt(document.getElementById("m3").value);
(document.getElementById("name2").value) =n;
(document.getElementById("Rno1").value) = r;
(document.getElementById("m11").value) = m1;
(document.getElementById("m21").value) = m2;
(document.getElementById("m31").value) = m3;
var tot = m1+m2+m3;
(document.getElementById("m32").value) = tot;
var avg = tot/3;
(document.getElementById("m33").value) = avg;
if (m1>=40 && m2>=40 && m3>=40)
{
    var res="pass";
    document.getElementById("m34").value = res;
}else{
    var res1="fail";
    document.getElementById("m34").value = res1;
}
var grade;
if(avg>=90){grade = "A"}
else if (avg>=80 && avg<90){grade = "B"}
else if (avg>=70 && avg<80){grade = "C"}
else if (avg>=60 && avg<70){grade = "D"}
else (grade = "E");
switch (grade)
{
    case "A":
        document.getElementById("m35").value ="A";
        break;
    case "B":
        document.getElementById("m35").value ="B";
        break;
    case "C":
        document.getElementById("m35").value ="C";
        break;
    case "D":
        document.getElementById("m35").value ="D";
        break;
    default:
        document.getElementById("m35").value = "E";    

}
}
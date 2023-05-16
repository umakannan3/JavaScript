var today = new Date();
var day = today.getDay();
var dayList = ["Sunday","Monday","Tuesday","Wednesday","thursday","Friday","Saturday"];
var hours = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();
var calculate = (hours >= 12)? "PM" : "AM";
hours = (hours >= 12)? (hours-12) : hours;
if (hours === 0 && calculate === "PM"){
    if(min === 0 && sec === 0){
        hours = 12; calculate == "Noon";
    }else{
        hours = 12; calculate == "PM";
    }
}
if (hours === 0 && calculate === "AM"){
    if(min === 0 && sec === 0){
        hours = 12; calculate == "Midnight";
    }else{
        hours = 12; calculate == "AM";
    }
}

console.log("Current Time : "+hours +calculate +":"+min+":"+sec);

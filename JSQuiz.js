var results=[1,2,2,3,1];
var options=["first","second","third","fourth","fifth"];
var finalResult=0;
document.getElementById('submit').onclick=function(){
    for (let i=0;i<results.length;i++) {
        if (document.getElementById(`${options[i]}-${results[i]}`).checked===true) {
            finalResult++;
        }else{
            finalResult=finalResult;
        }
    }
    document.getElementById('questions').style.display="none";
    document.getElementById('results').style.display="block";
    var percent=(finalResult/5)*100;
    if (percent>75) {
        document.getElementById('results').innerHTML="Your Result is "+percent+"%"+"<br>"+"YOU ARE A PRO !!!";
        
    }else if (percent>50) {
        document.getElementById('results').innerHTML="Your Result is "+percent+"%"+"<br>"+"YOU ARE AVERAGE !!!";

    }else{
        document.getElementById('results').innerHTML="Your Result is "+percent+"%"+"<br>"+"YOU NEED MORE PRACTICE !!!";

    }
};
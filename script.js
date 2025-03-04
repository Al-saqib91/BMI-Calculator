function calculate(){
    let H= parseFloat(document.getElementById("height").value);
    let W= parseFloat(document.getElementById("weight").value);
    H=H/100;
    let result = (W/(H*H));
    let roundValue=Math.round(result*100)/100;
    
    if(!H || !W){
        document.getElementById("bmi").innerHTML= "Enter Valid Inputs";
        document.getElementById("bmi").style.color= "#420303";
        return;
    }
    let category="";
    let color="";
    
    if(result<16){
        category="Severe Thin";
        color="#990e0e";
    }
    else if(result > 16 && result < 17){
        category="Moderate Thin";
        color="#945f09";
    }
    else if(result > 17 && result < 18.5){
        category="Mild Thin";
        color="#fadf7f";
    }
    else if(result > 18.5 && result < 25){
        category="Normal";
        color="#0b6e13";
    }
    else if(result > 25 && result < 30){
        category="Overweight";
        color="#f7cf19";
    }
    else if(result > 30 && result < 35){
        category="In : Obese Class I";
        color="#d16638";
    }
    else if(result > 35 && result < 40){
        category="In : Obese Class II";
        color="#bf1515";
    }
    else if(result >40){
        category="In : Obese Class III";
        color="#8c0f0f";
    }
    
    let resulttext = "Your BMI : " + roundValue;
    let messagetext = "You Are " + category;
    
    document.getElementById("bmi").innerHTML= resulttext;
    document.getElementById("category").innerHTML= messagetext;
    document.getElementById("bmi").style.color= color;
    document.getElementById("category").style.color= color;
    }
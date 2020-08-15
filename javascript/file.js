console.log("this is js file")
// bmr calculator start
function BMR() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let age = document.getElementById("age").value;
    let male = document.getElementById("male")
    let female = document.getElementById("female")
    if (male.checked == true) {
        bmr = 66.5 + (13.75 * weight) + (5.003 * height) - (6.755 * age)
        document.getElementById("bmrmessage").innerHTML = "Your BMR is "+bmr;
    }
    else if (female.checked == true) {
        bmr = 655 + (9.563 * weight) + (1.850 * height) - (4.676 * age)
        document.getElementById("bmrmessage").innerHTML = "Your BMR is "+bmr;
    }
    else{
        alert("enter your gender")
    }
    if(age<=15||age>=80){
        alert("Your age should in the range of 15-80 years")
    }
}

// bmr calculator end

// height converter start
function convertheight() {
    let h = document.getElementById("h").value;
    heightincm = h*30.48
    document.getElementById("heightmessage").innerHTML = "Your height in centimeter is  "+heightincm;
    
}

// height converter end


// calaries counter 
function convertcalaries(){
    let light = document.getElementById("light");
    let moderate = document.getElementById("moderate");
    let highlyactive = document.getElementById("highlyactive");
    let bmr = document.getElementById("bmr").value;
    if (light.checked==true){
        calarieintake =bmr*1.53
        document.getElementById("calariemessage").innerHTML = "Your daily Energy Expenditure be around  "+calarieintake;
    }
    else if (moderate.checked==true){
        calarieintake =bmr*1.76
        document.getElementById("calariemessage").innerHTML = "Your daily Energy Expenditure be around  "+calarieintake;
    }
    else if (highlyactive.checked==true){
        calarieintake =bmr*2.25
        document.getElementById("calariemessage").innerHTML = "Your daily Energy Expenditure be around  "+calarieintake;
    }
    else{
        alert("Select any of the lifestyle to know your energy expenditure");
    }
    }
// calaries counter 
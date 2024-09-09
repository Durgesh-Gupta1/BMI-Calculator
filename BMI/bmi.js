let height=document.getElementById("height");
let weight=document.getElementById("weight");
let calculate=document.getElementById("calc");
let relode=document.getElementById("relode");
let bmi=document.getElementById("bmi");
let catg=document.getElementById("catg");

calculate.addEventListener("click",function(){
    // BMI Formula weight (kg) / [height (m)]2
    let mt=height.value * 0.3048;
    let sqmt=mt*mt;
    let bmicalc=(weight.value/sqmt).toFixed(2);

    bmi.innerHTML="Your BMI is : "+ bmicalc

    if (bmicalc < 18.5 ){
        catg.innerHTML="You are Underweight"
        catg.style.color="#34d8eb"
    }
    else if(bmicalc>=18.5 && bmicalc< 24.9){
        catg.innerHTML="You are Normal weight"
        catg.style.color="#36d916"
    }
    else if(bmicalc>=25 && bmicalc< 29.9){
        catg.innerHTML="You are Overweight"
        catg.style.color="#d9a216"
    }
    else{
        catg.innerHTML="You are Obesity"
        catg.style.color="#d94416"
    }
})

relode.addEventListener("click",function(){
   window.location.reload()
})

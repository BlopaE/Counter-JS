const value = document.getElementById("value");
const btnDecrease = document.getElementById("btnDecrease");
const btnReset = document.getElementById("btnReset");
const btnIncrease = document.getElementById("btnIncrease");

btnReset.addEventListener('click',()=>{
    value.textContent=0;
    value.style.color = "#000"
});

btnDecrease.addEventListener('click',()=>{
    value.textContent = parseInt(value.textContent)-1;
    getColor();
});

btnIncrease.addEventListener('click',()=>{
    value.textContent = parseInt(value.textContent)+1;
    getColor();
});

function getColor(){
    if (parseInt(value.textContent)<0){
        value.style.color = "red";
    }else if(parseInt(value.textContent)>0){
        value.style.color = "green";
    }else{
        value.style.color = "#000"
    }
}
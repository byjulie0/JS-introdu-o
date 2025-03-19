const inputs = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');

function nameValidate(){
    if(inputs[0].value.length<3){
        setErro(0);
    }
    else{
        removeErro(0);
    }
}

function passwordValidate1(){
    if(inputs[1].value.length<8){
        setErro(1);
    }
    else{
        removeErro(1);
    }
}
function passawordValidate2(){
    if(inputs[2].value.length<=8 && inputs[1].value == inputs[2].value){
        removeErro(2);
    }
    else{
        setErro(2);
    }
}

function setErro(index){
    spans[index].style.display = 'block';
}
function removeErro(index){
    spans[index].style.display = 'none';
}
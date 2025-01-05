let resultField = document.getElementById("result");
function appendChar(char){
    resultField.value +=char;
}
// Clean the Screan..
function clearScrean(){
    resultField.value = '0';
}
function deleteChar(){
    resultField.value.slince(0,-1);

}
function calculate(){
    try{resultField.value = eval(resultField.value);}
    catch(error){ resultField.value = 'wrong';}
    
}
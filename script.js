function onLoad(){

    const inputArray = document.getElementsByTagName("input");
    for(var i = 0; i < inputArray.length; i++){
            inputArray[i].addEventListener('change', calculateSum);
        }
        calculateSum();
    } 

function calculateSum(){
    
    var tableBody = document.getElementById("tableBody");

    var value = Number(0);

    if(tableBody){
        for(var i = 0; i < tableBody.rows.length; i++){
            if(tableBody.rows[i].cells[0].firstChild.tagName == "INPUT" && tableBody.rows[i].cells[0].firstChild.checked){
               value += Number(tableBody.rows[i].cells[1].firstChild.value);
            }
        }
    
        document.getElementById("sumValue").className = "";
        document.getElementById("sumValue").value = value;
    
        if(value < 750){
            document.getElementById("sumValue").classList.add("valueRed");
        }else {
            document.getElementById("sumValue").classList.add("valueGreen");
        }
    }
}
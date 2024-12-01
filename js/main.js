




document.querySelectorAll("button").forEach(function(element){


    element.onclick = function(event){
        document.querySelector("#mohamed").style.color = element.dataset.color;
        document.querySelector("#mohamed").style.textAlign = element.dataset.text

       } 

}
)

function workcount(){

var works = document.querySelector("#works").value;
var result = document.querySelector("#result");
if(works==""){
    return false;
}else{


var myli = document.createElement("li");
myli.innerHTML =works;
result.append(myli);
document.querySelector("#works").value="";
return false;
 }

 
}

 





    
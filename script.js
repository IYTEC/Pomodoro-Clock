var numsession = document.getElementById("numsession");

function checker(object){
    /**************************************
    // Allow You change counting parameters
    *************************************/
    
    if(object.id === "sessionminus"){
        var data = document.getElementById("numsession").textContent;
        data--; 
        document.getElementById("numsession").textContent = data;
    }
    if(object.id === "sessionplus"){
         value = numsession.textContent;
         value++; 
         numsession.innerHTML = value;  
    }
    if(object.id == "breakplus"){
        var value = document.getElementById("numbreak").innerHTML;
        parseInt(value); value++;
        document.getElementById("numbreak").innerHTML = value;
    }
    if(object.id == "breakminus"){
        var value = document.getElementById("numbreak").innerHTML;
        parseInt(value); value--;
        document.getElementById("numbreak").innerHTML = value;
    }
}

var second = 60;
var minute = numsession.textContent;
minute = parseInt(minute);
var flag = false;
var pause = true;
var interval;

function start(){
    interval = setInterval(timer, 1000, pause);
    document.getElementById("start").className += " disabled";
    document.getElementById("resume").className += " disabled";        
}
function reset(){
    document.getElementById("numbreak").innerHTML = 5;
    document.getElementById("numsession").innerHTML = 25;
    minute = document.getElementById("minutes").innerHTML = 24;
    second = document.getElementById("seconds").innerHTML = 59;
    document.getElementById("start").classList.remove("disabled");
    document.getElementById("reset").className += " disabled";
    document.getElementById("resume").className += " disabled";
    clearInterval(interval);

}
function stop(){
   reset();  
}
function paused(){
    clearInterval(interval);
    document.getElementById("resume").classList.remove("disabled");
    document.getElementById("pause").className += " disabled"; 
    document.getElementById("start").className += " disabled"; 
    
}

function resumed(){
    interval = setInterval(timer, 1000, pause);
    document.getElementById("pause").classList.remove("disabled");
    document.getElementById("resume").className += " disabled"; 
}

function timer(pause){
    var checksecs = document.getElementById("seconds").textContent;
    var checkmins = document.getElementById("minutes").textContent;
    if(pause === true){
        if(checksecs <= 1){
            minute--;
            second = 59;
        }else{
            second--;
        }
        if(checkmins <= 1){
            minute = numsession.textContent - 1;
        }
        document.getElementById("seconds").innerHTML = second;
        document.getElementById("minutes").innerHTML = minute;
    }else{
        document.getElementById("sessionword").innerHTML = "Paused";
        //document.getElementById("seconds").innerHTML = second;
        //document.getElementById("minutes").innerHTML = minute;
    }
}

document.getElementById("pause").addEventListener("click", paused);
document.getElementById("resume").addEventListener("click", resumed);
document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);








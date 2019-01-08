function moveTo(eid){
    window.scrollTo(0,eid.offsetTop-60);
}


function showTime() {
    var d = new Date();
    var e = d.toLocaleTimeString();
    document.getElementById("time").innerHTML = e;
    setTimeout(function(){ showTime() }, 500);
}

function greet(time){
    var grt = "Hello, how are the stars tonight? ";
    if (time > 21 )
        grt = "Hello, how are the stars tonight?";
    else if(time > 16)
        grt = "Good Evening";    
    else if(time > 11)
        grt = "Good Afternoon";
    else if(time > 4)
        grt = "Good Morning";
    document.getElementById("greeting").innerHTML = grt;
}

var de = new Date();
greet(de.getHours());
showTime();

console.log("Working");
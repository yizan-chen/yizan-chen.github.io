function moveTo(eid){
    window.scrollTo(0,eid.offsetTop-60);
}

// function showTime() {
//     var d = new Date();
//     var e = d.toLocaleTimeString();
//     document.getElementById("time").innerHTML = e;
//     setTimeout(function(){ showTime() }, 500);
// }

window.onscroll = function changeNav(){
    if( window.pageYOffset > 50){
        document.getElementById("nav").classList.add("scrolled");
    }else{
        document.getElementById("nav").classList.remove("scrolled");
    }
}


var de = new Date();
//showTime();

console.log("Working");
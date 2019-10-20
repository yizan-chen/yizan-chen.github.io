var numlist = [0,0,0,0,0,0,0,0,0,0]

function makeNum(){
    var value = Math.ceil(Math.random() * 6)
    document.getElementById("number").innerHTML = value;
    numlist.shift();
    numlist.push(value);
    getnum();

}

function changepic(){
    document.getElementById('pic').src = 'img/2.jpg';
}

function getnum(){
    document.getElementById('numlist').innerText = numlist.join(' - ');    
}

getnum();
makeNum();
var numlist = [0,0,0,0,0,0,0,0,0,0];
var money = 3;
var operation = '+';

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
    var list = numlist.join('  -  ');
    document.getElementById('numlist').textContent = list;    
}

function changeOp(flag){
    if(flag==1){
        operation = '+';
    }else operation = '-';
    document.getElementById('operation').innerText=operation;
}

function doCal(val){
    if(operation == '+'){
        money += val;
    }else money -= val;
    document.getElementById('money').innerText='$ ' + money;
}
function clearM(){
    money = 0;
    document.getElementById('money').innerText='$ ' +money;

}
function DoMTen(){
    money -=10;
    document.getElementById('money').innerText='$ ' +money;
}

getnum();
makeNum();

document.getElementById('money').innerText='$ ' +money;
document.getElementById('operation').innerText=operation;
var hp = 100;
function random(lower, upper) {
return Math.floor(Math.random() * (upper - lower+1)) + lower;
}
function attack() {
    var rand = random(5,20);
    hp -= rand;
    if(hp <=0 ){
        hp = 0;
    }
    document.getElementById("hp-bar").style.width = hp + '%';
}
// 红灯时间
var redLightTime = 10;
// 绿灯时间
var greenLightTime = 10;
// 黄灯时间
var yellowLightTime = 3;
// 当前的倒计时
var currentTime = 0;

// 红绿灯元素
var $trafficLight = $("#traffic-light");
// 红绿灯的数字(十位)元素
var $digitronFirst = $("#digitron-first");
// 红绿灯的数字(个位)元素
var $digitronSecond = $("#digitron-second");

// 计时器
var timer;
// 红绿灯的状态
var lightStatus={
    red:"red",
    green:"green",
    yellow:"yellow"
}
// 当前红绿灯的颜色(默认是红色)
var currentColor = lightStatus.red;

// 初始化显示
setDigitalNumber(redLightTime);

// 设置计时器
currentTime = redLightTime;
timer = setInterval(function(){
    if(currentTime===0){
        changeLightStatus();
    }
    // 黄灯的时候不显示数字
    switch(currentColor){
        case lightStatus.red:
            setDigitalNumber(currentTime);
            break;
        case lightStatus.green:
            setDigitalNumber(currentTime,lightStatus.green);
            break;
    }
    currentTime--;
},1000);

// 变更灯的状态
function changeLightStatus(){
    switch(currentColor){
        case lightStatus.red:
            currentColor = lightStatus.green;
            currentTime = greenLightTime;
            $trafficLight.attr('class','traffic-light-container '+lightStatus.green);
            break;
        case lightStatus.yellow:
            currentColor = lightStatus.red;
            currentTime = redLightTime;
            $trafficLight.attr('class','traffic-light-container '+lightStatus.red);
            break;
        case lightStatus.green:
            currentColor = lightStatus.yellow;
            currentTime = yellowLightTime;
            $trafficLight.attr('class','traffic-light-container '+lightStatus.yellow);
            // 黄灯的时候不显示数字            
            $digitronFirst.attr('class','digitron');
            $digitronSecond.attr('class','digitron');
            break;
    }
}


/**
 * 设置数字
 * @param {Number} n 要显示的数字
 * @param {String} color 数字的颜色
 */
function setDigitalNumber(n,color){
    color = color === undefined ? "red" : color;
    if(n>99 || n<0){
        console.error("你设置的数字不对吧");
        return;
    }
    // 取个位数
    var single = n % 10;
    // 取十位数
    var tens = Math.floor(n / 10);
    if(n>=10){
        $digitronFirst.attr('class','digitron num-'+tens+" "+color);
    }else{
        // 如果只有个位就不要显示十位的灯
        $digitronFirst.attr('class','digitron');
    }
    $digitronSecond.attr('class','digitron num-'+single+" "+color);
}
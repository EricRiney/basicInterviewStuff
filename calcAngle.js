// Write a function to calculate the angle between 
// the hour hand and the minute hand of a clock

function calcAngle(hour, min) {
    if (hour < 0 || min < 0 || hour > 12 || min > 60) {
        console.log('err');
    }
    if (hour == 12){
        hour = 0;
    }
    if (min == 60){
        min = 0;
    }
    // Calculate the angles moved by hour and minute hands
    // with reference to 12:00
    var hourAngle   = (0.5 * (hour * 60 + min));
    var minuteAngle = (6 * min);

    // Find the difference between two angles
    var angle = Math.abs(hourAngle - minuteAngle);

    // smaller angle of two possible angles
    return Math.min(360 - angle, angle);
 }

console.log(calcAngle(9, 60)+" degree");
let angle1 = 30;
let angle2 = 60;
let angle3 = 90;

console.log("Is it a valid triangle?")

const isTriangle =
    (angle1 > 0 && angle2 > 0 && angle3 > 0) &&
    (angle1 + angle2 + angle3 == 180);

console.log(isTriangle);
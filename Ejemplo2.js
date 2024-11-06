const g = 9.81;
var   t = 0;
var   y = 12;
var   yo = 12;
let dt = 0.1;

while (y>0){
    y = yo - 0.5*9.81*t**2;
    t += dt;
    console.log("y(t=",t, "> = ", y)
}

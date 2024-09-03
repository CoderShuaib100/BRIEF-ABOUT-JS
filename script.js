function greeter(){
    var greeting;
    var time = new Date().getHours();
    // it will set time value from 0-24
    if (time<10){
        greeting = "Good Morning";
    }

    else if (time<20){
        greeting = "Good Afternoon";
    }

    else {
        greeting = "Good Night";
    }

    document.getElementById("e1").innerHTML = "Now the current hour is " + time;
    document.getElementById("e2").innerHTML = greeting;
}

console.log(greeter);

i = 1;
num = 36;
document.write("<br>" + "Multiplication Table of " + num);
while (i<=12){
    document.write("<br>" + num + " X " + i + "=" + num * 1 + "<br>");
    i++;
}


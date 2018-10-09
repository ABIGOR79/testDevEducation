/*First task*/
var a;
var b;
if (a % 2 == 0){
    a*b;
} else {
    a+b;
}

/*second task*/
function secondTask(){
    var x = Number(prompt('x'));
    var y = parseInt(prompt('y'));

    if (x > 0, y > 0) {
        alert('first quarter');
    } else if ( x < 0, y > 0) {
        alert('second quarter');
    } else if ( x < 0, y < 0 ) {
        alert('third quarter');
    }  else {
        alert('fourth quarter');
    }
}


/*third task*/
function thirdTask (){
    var x = parseInt(prompt('x'));
    var y = parseInt(prompt('y'));
    var z = parseInt(prompt('z'));
    var result = 0;
    if (x>0) {
        result += x
    }
    if (y>0) {
        result += y
    }
    if (z>0) {
        result += z
    }
    alert(result);
}

/*fourth task*/
function fourthTask(){
    var a = Number(prompt('a'));
    var b = Number(prompt('b'));
    var c = Number(prompt('c'));

    alert(Math.max(a*b*c, a+b+c)+3);
}


/*fifth task*/
function fifthTask(){
    var rating = prompt('rating?','');

    var message = (rating < 20) ? 'F' :
        (rating  < 40) ? 'E' :
            (rating < 60) ? 'D' :
                (rating  < 75) ? 'C' :
                    (rating < 90) ? 'B' :

                        'A';

    alert( message );
}
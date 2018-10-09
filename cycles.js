/*first  task*/

function firstCycleTask(){
    var result = 0;
    for (var i = 0 ; i < 99; i++){
        if (i % 2 != 0){
            result+= i;
        }
    }
    alert(result);
}

/*second task*/

function secondCycleTask(){
    var x = parseInt(prompt ('Введите число', '0'));
    var result = true;
    for (var i =2; i < x/2; i++ ){
        if ( x % i == 0){
            result = false;
            break;
        }
    }
    alert(result);
}

/*third task*/

function thirdCycleTask() {
    var sum = prompt ('enter a number', '0');
    var result=0;
    for (var i = 0; i < sum.length; i++){
        result+=Number(sum.charAt(i))
    }
    alert(result)
}

/*fourth task*/
function fourthCycleTask(){
    var result = 1;
    var x = parseInt(prompt ('Введите число', '0'));
    for ( var i = 1; i <= x; i++){
        result *=i;
    }
    alert(result);
}




/*sixth task*/

function sixthCycleTask() {
    var sum = prompt ('enter a number', '0');
    var result='';
    for (var i = sum.length-1; i>=0; i--){
        result+=sum.charAt(i)
    }
    alert(result)
}
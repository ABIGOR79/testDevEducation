/*first task*/
function ft(){
    var arr = [8,3,2,1,4,9];
    var min = arr[0];
    for (var i=1; i<arr.length; i++){
        if (min > arr[i]){
            min = arr[i];
        }
    }
    alert(min);
}


/*second task*/
function st(){
    var arr = [8,3,2,1,4,9];
    var max = arr[0];
    for (var i=1; i<arr.length; i++){
        if (max < arr[i]){
            max = arr[i];
        }
    }
    alert(max);
}


/*third task*/

function tt(){
    var arr = [8,3,2,1,4,9];
    var min = arr[0];
    var minIndex = 0;
    for (var i=1; i<arr.length; i++){
        if (min > arr[i]){
            min = arr[i];
            minIndex = i;
        }
    }
    alert(minIndex);
}


/*fourth task*/
function ft(){
    var arr = [8,3,2,1,4,9];
    var max = arr[0];
    var maxIndex = 0;
    for (var i=1; i<arr.length; i++){
        if (max < arr[i]){
            max = arr[i];
            maxIndex = i;
        }
    }
    alert(maxIndex);
}


/*fifth task*/
function fift(){
    var arr = [8,3,2,1,4,9];
    var result=0;
    for (var i = 0; i < arr.length; i++){
        if (i%2 === 1){
            result+=Number(arr[i])
        }
    }
    alert(result)

}


/*sixth task*/

function sixth (){
    var arr = [1, 2, 3, 5 ,7];
    for (var i = 0; i<arr.length/2; i++ ){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    alert(arr);
}

/*seventh task*/
function seven(){
    var arr = [1, 4, 6, 7, 13, 9, 8, 7];
    var result=0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2 !==0){
            result++;
        }
    }
    alert(result);
}



/*eighth task*/
function eighth (){
    var arr = [1, 2, 3, 5 ,7];
    var a =0;
    if(arr.length%2 !==0){
        a=1;
    }
    for (var i = 0; i<arr.length/2; i++ ){
        var temp = arr[i];
        alert(arr.length-a/2+i);
        arr[i] = arr[arr.length-a/2+i];
        arr[arr.length-a/2+i] = temp;
    }
    alert(arr);
}

function BubbleTask(){
    var arr = [4, 3, 2, 1];
    for(var i= 0; i<arr.length-1;i++){
        for(var j=0; j<arr.length-1-i;j++){
            if(arr[j+1] < arr[j]){
                var tmp = arr[j+1]; arr[j+1]=arr[j]; arr[j]=tmp;
            }
        }
    }
    alert(arr);
}

function SelectTask(){
    var arr = [4, 3, 2, 1];
    for(var i=0; i<arr.length-1; i++){
        var min = i;
        for(var j = i + 1; j<arr.length; j++){
            if(arr[j] > arr[min]) min = j;{
                var tmp = arr[min]; arr[min] = arr[j]; arr[j] = tmp;
            }
        }
    }
    alert(arr);
}
/**
 * Created by HP on 2017/8/2.
 */
function findHuiWen(str){
    var strArr = str.split("");
    var strObj = new Object();
    strArr.forEach(function(item){
        if(!strObj[item]){
            strObj[item] = 1
        }
        else{
            strObj[item]++;
        }
    });
    var max = 0;
    var maxSinDig = "";
    for(var i in strObj){
        if(strObj[i]%2!==0){
            if(strObj[i]>max){
                max = strObj[i];
                maxSinDig = i;
            }
        }
    }
    var result = "";
    for(var j=0;j<max;j++){
        result+=maxSinDig;
    }
    for(var m in strObj){
        if(strObj[m]%2===0){
          for(var k=0;k<strObj[m]/2;k++){
              result = m+result+m;
          }
        }
    }
    return result;
}
console.log(findHuiWen("abccccddcccccccc"));
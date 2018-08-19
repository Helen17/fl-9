let SideALength = prompt('Please type length of side a');
let SideBLength = prompt('Please type length of side b');
let angle = prompt('Please type angle between sides');
const numb = 180;
let angleConvert = angle*(Math.PI / numb);
let result = '';

if( SideALength<=0 || SideBLength<=0 || angle<=0 ){
    result = `Invalid data`;
}else{
    const formulaPart1 = SideALength*SideALength + SideBLength*SideBLength;
    const formulaPart2 = 2*SideALength*SideBLength*Math.cos(angleConvert);
    const mathOperation = formulaPart1 - formulaPart2;
    const SideCLength = Math.sqrt(mathOperation).toFixed(2);
    const square = Math.round(1/2*SideALength*SideBLength*Math.sin(angleConvert));
    const perimeter = +SideALength + +SideBLength + +SideCLength;
    if(SideCLength == 0 || square == 0 || perimeter == 0){
        result = `Invalid data`;
    }else{
        result = `c length: ${SideCLength}
Triangle square: ${square}
Triangle perimeter: ${perimeter}`;
    }
}

console.log(result);

var questionList = [
    "좋아하는 아이돌 그룹은?",
    "비투비멤버수는?",
    "트와이스멤버수는?"
 ];
 var answerList = [
    "비투비",
    7,
    9
 ];
 
 var step= 0;
 var score = 0;
 
 while (step<questionList.length){
    var answer = prompt(questionList[step]);
 
    if(answer == answerList[step]){
        score = score+20;
    }

    step = step+1;
}
 
 
alert("당신의 점수는" + score + "점!");
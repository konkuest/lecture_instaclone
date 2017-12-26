/**
 * 문제를 표시하고 답을 입력 받아 정답 점수를 표시하는 프로그램
 * - 짝을 이루는 데이타를 분산시키지 않고 모아 놓아(응집성) 처리 효율성을 높인다
 */

 /**
  * 문제지와 정답을 함께 놓음으로서 데이타 응집성을 높인다
  */
 var questionList = [
  '오늘의 요일은?', '수요일',
  '미국의 수도는 어디입니까?', '워싱턴',
  '물에 가라앉고 있는 나라는?', '몰디브'
];

var step = 0;
var score = 0;

while (step < questionList.length) {
  var answer = prompt(questionList[step]);
  
  /**
   * 데이타의 구조가 변경되었으므로 변경된 구조를 코드에 반영한다
   * 홀수 번째 요소는 문제지, 문제지 다음 요소는 정답
   */
  if (answer == questionList[step + 1]) {
    score = score + 10;
  }
  
  step = step + 2;
}

alert('당신의 점수는 ' + score + '점 입니다');

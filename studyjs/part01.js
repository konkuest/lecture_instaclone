1. 개발환경 세팅하기

Js Fiddle
구글 크롬 console

2. 기초개념 - 값

      숫자, 문자열 등을 "값"이라 한다
      값을 담아 놓을 수 있는 저장소가 있으며 이를 변수라 한다.
      변수는 var 명령어로 만들 수 있다.
      변수 이름은 이름 작성 규칙 내에서 자유롭게 만들 수 있다.
      대입문을 이용하여 값을 변수에 담을 수 있다.
      변수에 값을 담고 변수를 통해 재사용할 수 있다

      var name = '박경호';
      var title = 'banana';
      var seq = '4회';

      console.log(name);
      console.log(title);
      console.log(seq);


3. 기초개념 - 함수

    코드를 그룹으로 묶을 수 있는 함수라는 방법이 있
    함수는 변수와 마찮가지로 이름을 가지며 값을 입력 받아 사용할 수 있고 값을 반환할 수 있다
    만들어진 함수는 호출(사용)될 수 있으며 호출될 때 함수에게 값을 전달할 수 있다
    함수가 이름을 가질 수 있다는 것을 이용하여 함수 이름으로 코드에 의미를 부여할 수 있다
    반복되는 코드를 함수로 만들어 재사용 함으로서 코드의 의미를 보다 잘 전달할 수 있다
   
      var name = '박경호';
      var title = 'banana';
      var seq = '4회';

      function log(message) {
        console.log(message);
      }

      log(name);
      log(title);
      log(seq);

	// 함수명에 이름부여해서 coding

	      function log(message) {
        console.log(message);
      }

      function displayName(name) {
        log(name);
      }

      function displayTitle(title) {
        log(title);
      }

      displayName(name);
      displayTitle(title);


4. 기초개념 - 조건문 & 반복문

// 조건문
var date = new Date();
var hour = date.getHours();
 
if(hour < 11) {
    alert("아침");
}
else if(hour < 15) {
    alert("점심");
}
else {
    alert("저녁");
}



//반복문

value = 0;
while(value < 5) {
    alert(value + '번째 반복');
}


var array = ['포도', '사과', '바나나', '망고'];
 
for(var i=0; i<array.length; i++) {
    alert(array[i]);
}

// 예제 : 구구단

/**
 * 간단한 구구단
 */

var dan = 2;
var count = 1;

while(count <= 9) {
  console.log(dan * count);
  
  count = count + 1;
}

//구구단 - 이중반복

var dan = 2;
var count = 1;

while (dan <= 9) {
  while(count <= 9) {
    console.log(dan * count);
    count = count + 1;
  }
  
  dan = dan + 1;
  count = 1;
}


  while(dan<=9){
    while(count<=9){
        console.log(dan*count);
        count = count+1;
    }

    dan = dan+1;
    count = 1;
  }








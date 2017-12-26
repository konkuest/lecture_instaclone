1. 제이쿼리란?

- 모든 브라우저에서 동작하는 클라이언트 자바스크립트 라이브러리

- 무료로 사용 가능한 오픈 소스 라이브러리

- 문서 객체 모델과 관련된 처리를 쉽게 구현

- 일관된 이벤트 연결을 쉽게 구현

- 시각적 효과를 쉽게 구현 (웹 표준만으로도 플래시 & 실버라이트로 구현한 것과 비슷한 수준의 시각적 효과)

- Ajax 애플리케이션을 쉽게 개발

*ajax

Ajax(Asynchronous JavaScript and XML, 에이잭스)는 비동기적인 웹 애플리케이션의 제작


# 삽입방법 :

<script type="text/javascript" src="http://code.jquery.com/jquery-3.2.0.min.js" ></script>

이렇게 하고 넣어주면 됨

/
# 삽입부분 : <head> ~ </head> 사이에 위치한 <script type="text/javascript"> ~ </script>

<script type="text/javascript">



</script>


2. 예제 click 했을 때 무언가 실행하기

// HTML 파일

<div class="content">Hello World!</div>

1) content class 선택 : $('.content')

2) 클릭했을 때? : $('.content').click();

3) 함수구현 : 

$('.content').click(function(){
	$('.content').hide();

});


4) 등장하고 사라지고 기능 구현

$('.btn_show').click(function(){
	$('.btn_show').show();
});

$('.btn_hide').click(function(){
	$('btn_hide').hide();




// this의 개념 : 객체

var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // logs 37

==> o.f()가 실행될 때, var o의 값을 참조한다


function Person(name, age) {
  this.name = name;
  this.age = age;
}
var jihyo = new Person('박지효', 21);
console.log(hyunseob.name); // 박지효
console.log(hyunseob.age);  // 21








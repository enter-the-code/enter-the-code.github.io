---
title: 함수형 프로그래밍의 개념 1
date: 2022-06-30
tags: [react]
description: 책 요약 정리
---

## 불변성(immutability)

</br>

불변성이란 변하지않는다 라는 뜻인데 이게 갑자기 왜 튀어 나왔느냐? 우리는 예를들어 자기소개서를 제출
해야하는데 막 부끄러운 것 같은게 있으면 걍 없애고 싶잖아. 그럴때 할수있는 방법이 그걸 칼로 갈갈갈갈 긁어서 업애는 방법이 있고 복사기에 넣고 복사한다음에 복사본을 칼로 갈갈갈갈 하는법이
있는데 뭐가 더 좋아보이나? 아무래도 두번째 것이 훨씬 좋아보이죠? 왜냐면 부끄러웠던 것이 알고보니 개쩌는 스팩일수도 있잖아. 그래서 다시 사용하고싶을때 문제가 생길수 있으니 복사 해두는것이 좋다

원본을 바꾸는 코드를 보여주겠다

```javascript
let coler_lawn={
    title:"잔디",
    color:"#00FF0",
    rating: 0
};

function rateColor(color,rating){
    color.rating = rating;
    return color;
}

console.log(rateColor(coler_lawn,5).rating);        //5
console.log(coler_lawn.rating);         //5
```
</br>

이렇게 하면 coler_lawn 이라는 변수의 맴버인 rating을 직접 바꾸는 일을하는 함수를 쓰기 때문에 나중에 coler_lawn의 원본을 사용할 수 없다 그럼으로 저 함수를 바꾸지 않고 매개변수로 value만
받고 복사한후 그값을 원하는대로 바꾸고 리턴해주는 식으로 해야한다 매개변수의 주소에 참조해서 값을 바꾸는것이 아니어야 원본 값을 유지할수 있다

</br>

따라서 아래코드를 보면 된다

```javascript
var rateColor=function(color,rating){
    return Object.assign({},color,{rating:rating});

};
console.log(rateColor(coler_lawn,5).rating);    //5  
console.log(coler_lawn.rating);         //0

```

밑에 object.assign이 바로 객체를 복사하는 함수다. 매개 변수를 살펴보자면 {}라는 빈 객체를 
만들고 color 갹체를 복사해주고 거기에 rating이라는 맴버의 값을 매겨변수 rating으로 바꿔주는
역할을 해준다. 그리고 마지막에 그걸 리턴해주는 함수가 rateColor이다.
</br>
</br>

그게 아니라면 화살표 함수와 스프레드 연산자를 사용해도 좋다

```javascript
const rateColor=(color,rating)=>({
    ...color,
    rating
});
```
이함수를 사용하면 딱히 return도 사용하지 않아도 되고 스프레드 연산자니 복사해서 rating값을 바꾸기도 쉽다.

</br>

## 순수 함수

</br>
순수함수란? 파라미터에 의해서만 반환값이 결정되는 함수를 뜻한다. 그렇기 때문에 순수함수는 파라미터 한개 이상을 받아 야만
하며 만약 인자가 같으면 항상 같은 값이나 함수를 반환해야 한다. 순수 함수에는 side effect가 없다.
먼저 순수하지 않은 친구를 한번 살펴보죠
</br>

```javascript
const frederick={
    name:"www",
    a:false,
    b=false
};

function selfedu(){
    frederick.name="ㅅㅂ 내인생";
    frederick.a=true;
    frederick.b=true;
    return frederick;
}
selfedu();
```

위의 selfedu는 순수하지 않은 함수이다. 왜냐하면 인자를 취하지 않으면, 값도 반환하지 않는다.
블록 밖의 변수도 바꿔버리느 절대 순수하지않다. 블록 밖의 인자를 바꾸는 일이 바로 사이드 이펙이니 순수하지 않다는 것이다.

이제 순수하게 바꿔보자
</br>

```javascript
const frederick={
    name:"www",
    a:false,
    b=false
};

const selfedu=("파라미터")=>({
    ...파라미터,
    안에 값바꿈
})
```
이러면 바깥의 값도 바꾸지 않고 또 새로운 객체를 반환하게 된다.

## 데이터 변환

뭐 거창한게 있는게 아니라 한 데이터를 가지고 반환해서 다른 데이터를 만들어낼수 있는 함수가 자바스크립트에서는 이미 있는데
그 핵심함수가 map 과 reduce이다.

</br>
map이라는 함수는 변환 함수를 인자로 받는데 그 함수를 배열의 모든 원소에 작용해서 받은 반환값으로 이루어진 새로운
배열을 반환한다 물론 원본함수는 변하지 않는다.
아래 예시를 살펴보자면

```javascript
const highschool=school.map(school=>({name:school}));

```
이런식으로 짜면 highschool이라는 변수에는 name:"학교이름"이라는 객체들로 찬 배열이 들어 차있다.

</br>
reduce 라는 함수를 사용하면 객체를 수, 문자열,참거짓(boolean)값,객체,함수와 같은 값들로 바꿔줄수있다.

예제를 한번 보면 편할거 같다

</br>

```javascript

const ages=[1,2,3,4,45,6,7];
const maxAge=ages.reduce((max,age)=>{
    if(max>age){
        return age;
    }
    else{
        return max;
    }
},0);

```
</br>
위의 코드에서 reduce의 반환함수는 모든 ages의 인덱스마다 한번씩 호출되는데 처음 max값은 0이다 왜냐면 reduce에서 초깃값을 0으로 받고 넘겨주었기 때문이다.
그리고 쭉 함수를 돌면서 제일 큰 값을 찾아주는 반환함수를 계속 호출해서 마지막으로는 제일 큰 값을 반환한다

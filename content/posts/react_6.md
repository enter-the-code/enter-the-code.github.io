---
title: 리엑트 작동 원리
date: 2022-07-01
tags: [react]
---

# 페이지 설정
</br>

리엑트를 브라우저 안에서 다룰려면 어케해야 되는지 아는가? 그에 관련된 라이브러리를 먼저 import해야 한다. 
</br>
2개가 있는데 react와 reactDOM이다.
</br>
전자는 뷰를 만들기 위한 라이브러리이고 , 후자는 렌더링할때 사용하는 라이브러리 이다.

# 리엑트 엘리먼트
</br>
엘리먼트는 요소라는 뜻인건 당연히 알고 리엑트 엘리먼트면 리엑트 요소이다.
우리가 브라우저에서 화면을 렌더링 할때 불러오는 게 바로 DOM이라는 것이다.
HTML 문서를 이루는 엘리먼트는 브라우저가 HTML 문서를 읽어들이면 DOM엘리먼트가 되고 이게 사용자 인터페이스 화면을 보여준다.
리엑트는 브라우저 DOM을 갱신해주기 위한 라이브러리이고, 가상 DOM을 리엑트 엘리먼트로 만들어주고 나중에 브라우저로 렌더링 할때
이 가상 DOM을 실제 DOM엘리먼트로 변환한다.

# ReactDOM

ReactDOM에는 리엑트 엘리먼트를 브라우저에 렌더링 하는 도구가 있는데 그게 render이다.

```javascript
import r from ReactDom;
var dish =r.creatElement("h1",NULL,"yeh");
r.render(dish,document.getElementById('root'));
```

이런식의 코드를 짜면

```javascript
<body>
    <div id="root">
        <h1>yeh</h1>
    </div>
</body>
```
요로케 렌더링 해준다.

# 자식들
</br>
리엑트는 props.children을 사용해서 자식 엘리먼트들을 렌더링 한다.
</br>

```javascript
const list=React.creatElement(
    "ul",
    null,
    React.creatElement("li",null,"dasdad");
    React.creatElement("li",null,"dasdad");
    React.creatElement("li",null,"dasdad");
    React.creatElement("li",null,"dasdad");
    React.creatElement("li",null,"dasdad");
    React.creatElement("li",null,"dasdad");
)

```
</br>

요로케 해주고 list를 콘솔로그 찍어보면 객체를 리턴하는데 안의 props객체의 children안에 고스란히 저 친구들이 있다.
</br>
위의 코드 딱봐도 겁나 귀찮고 쓰래기 같은 코드다.
따라서 자바스크립트 로직을 추가해서 더편하게 만들수 있다.
</br>

```javascript
const item=[여러가지 내용물들];

React.creatElement(
    "ul",
    {className:"a"},
    items.map((asdasd,i)=>React.creatElement("li",{key:i},asdasd))
)

```
</br>
요로케 해주면 배열을 써서 사용할수 있는데 저기 대뜸 i 뭐임? 할수있는데 리엑트에서는 배열을 이터레이션해서 자식리스트를
만들 경우 key프로퍼티를 넣는걸 권장하기에 저거 안넣으면 오류터진다.

# 리엑트 컴포넌트

컴포넌트는 html 태그마냥 사용할수 있는데 부품==컴포넌트 라고 생각하면 된다.
예를들어 나사같은거 기깔나게 만들어 두면 저기박고 여기박고 재사용하기가 굉장히 편하지않은가?
그런 장점을 가지고 있기도 하고 그 못을 살짝만 수정하면 또 다르게 쓸수있는 장점이 있는데
이게바로 리엑트의 컴포넌트와 같은 맥락이다. 재사용성을 높이고 규모 확장성이 커지는 것이다.

```javascript

function example(){
    return React.creatElement(
        "ul",
        {className:"예시"},
        items.map((asdasd,i)=>React.creatElement("li",{key:i},asdasd))
    )
}

```
</br>
위의 처럼 만들어 놓으면 example이라는 컴포넌트가 하나 생기는 것이다.
그리고 이컴포넌트를 이용하여 render함수 안에 복잡하게 하드 코딩 하지않고 깔끔하게 처리할수 있다.

```javascript
ReactDOM.render(
    React.creatElement(example,{items : "items의 배열"},null),
    document.getElementById("root")
)

```
요런식으로 깔끔하게 렌더링 할수있다.

그리고 위의 경우 items가 전역이기에 저렇게 코드를 짤수 있으나 재사용성을 더 높히기 위해서는 배열을 인자로 주는 방식이 있다.
바로 props 객체로 말이다. 
이걸로 props객체 안에 items만 전부 뜯어올수 있으니까 편하게 할수있고 구조분해로 더 편해질수 있따.

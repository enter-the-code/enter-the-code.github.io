---
title: CSS
date: 2022-07-27
tags: [front_end]
description: 부캠정리
---

# CSS 란?

</br>

# Cascading Style Sheet
</br>
위의 약자이며 웹 페이지를 디자인하기 위해 사용하는 언어이다.
</br>
사용하는 이유는 역시 구리면 안보기 때문에 이쁘게 꾸며야 하기 때문이다.


# CSS 참조 방식
</br>
1. 외부 스타일 시트(external style sheet)
</br>
2.내부 스타일 시트(internal style sheet)
</br>
HTML 태그 내의 스타일 지정(인라인 스타일)


내장 방식을 사용 할때는 헤드에다가 스타일을 지정한다
</br>

## EX)

</br>

```HTML

<html>

<head>
    <meta charset="utf-8">
    <link ref="stylesheet" type="text/css" href="st.css">
</head>

<style>
    .div1 {
        position: absolute;
        top: 0px;
        z-index: 5;
        width: 100px;
        height: 100px;
        background-color: black;
        border-radius: 50px;
    }

    .div2 {
        position: absolute;
        z-index: 6;

        left: 50px;
        top: 50px;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        background-color: red;
    }
    .div4{
        position: absolute;
        z-index: 8;

        left: 100px;
        top: 90px;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        background-color: green;
    }
    .div5{
        position: absolute;
        z-index: 9;

        left: 150px;
        top: 90px;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        background-color: blueviolet;
    }
    .div6{
        position: absolute;
        z-index: 12;

        left: 200px;
        top: 90px;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        background-color: gray;
    }
    .div_min1{
        position: absolute;
        z-index: 1;

        top: 15px;
        left: 15px;
        width: 50px;
        height: 50px;
        background-color: white;
        border-radius: 50px;
    }
    .div_min2{
        position: absolute;
        z-index: 1;

        top: 4px;
        left: 3px;
        width: 25px;
        height: 25px;
        background-color: purple;
        border-radius: 50px;
    }
    .div8{
        position: absolute;
        top: 150px;
        z-index: 11;
    }
</style>


```

</br>
위가 실습 예시이다

# CSS 구조

</br>

```HTML

<style>
    span{
        color:green;
    }
</style>

```
</br>
저기 위에서 span태그 위치에 들어가는 것들이 "선택자" 라고 불리고 {}이게 선언 블록이라고 불리고
color라는 속성(프로퍼티)에 green이라는 속성값(value)을 주는 것을 "선언" 이라고 한다.

### 많이 쓰는 속성

```
• color, background-color
• font-size, font-weight, font-family, font-style • width, height
• border
• margin, padding

```

#### 기능 설명

• margin(여백), padding

마진이란 여백을 남기는데 div든 이미지든 그것이 차지하는 공간이 있을것이다 그 공간 외부의 여백을 말하고 패딩은 div같은거 쓰면 ㅁ 가 생기고 그만큼에 영역 안에 여러가지들을 집어 넣을수 있을건데
그 안의 요소와 영역의 경계선 사이의 여백을 뜻한다

# CSS 선택자

• 전체 선택자
• 태그 선택자
• Class 선택자 
• ID 선택자

## 선택자 설명

```html

<style>
    *{
        <-- 아무 속성들-->
    }
</style>

```

</br>

위에서 *가 전체 선택자이고 이 * 부분이 태그가 된다면 태그 선택자이며 이 * 부분이 ."원하는 이름"
이면 클래스 선택자 그리고 * 부분이 #"원하는 이름" 이면 아이디 선택자이다.

</br>

위에서 id선택자는 클래스 선택자보다 우선순위를 가지며 만약 클래스와 아이디를 같이 쓴다면 겹치는 부분은
id가 먼저이고 겹치지 않은부분은 섞여서 같이 사용한다.

### 복합 선택자

.aaa span 여기서 공백을 기준으로 오른쪽에 클래스를 가진 태그의 하위 태그들중 span만을 선택한다는 뜻이다.
만약 공백이 > 가된다면 그  바로 아래 자식 요소들 (자식 요소들의 자식은 손자니까 취급하지 아니한다) 인접형제는
공백이 +인데 바로 인접한 태그를 뜻하고 쓸일 없을거같고 ~는 일반 형제 즉 같은 태그의 모든 형제들을 뜻한다

### 가상 선택자

</br>
이게 진짜 중요한이 유가 슬라이딩 메뉴와 같은 움직임을 만들어 내는데 중요한 친구들이라 그렇다

```html

선택자:active{}

```

위의 가상선택자는 :기호로 선택하는건데 일단 active 라는 속성은 클릭을 하면 변화하는 속성을
가지고 호버는 마우스를 올리면 나오는 속성 visited는 한번 방문한 것은 그 css를 그대로 남겨두는
것을 이야기한다.


# CSS의 복잡한 속성

</br>
여기서 부터 진짜 중요하고 디테일의 끝판왕이니 꼭 기억하지못하더라도 언제든지 찾아 볼수 있도록
반드시 깔끔한 정리가 필요하다.

</br>

### first 그저 모양 변현
</br>
단순히 모양을 변경하는 것과 이동하는것이 있는데
</br>

•skew : 기울기
•scale : 확대
•rotate : 회전
•translate : 이동

</br>
사실상 이중에서 가장 중요한것은 translate 이고 사용법은 여느 다른 css의 속성들 처럼 사용하면 된다.

```html

<style>
    div{
        transform: translate(~~~~)
    }
</style>

```

나머지도 비슷한 맥락이라 생략하겠다

# 진짜 겁나겁나 중요한것!
</br>
왜 중요할까? 왜냐면 브라우저에서 내가원하는 컨텐츠의 "위치" 를 조절할수있는 여러 속성들이기 때문이다

중요한  "중앙 정렬" , "중앙에서 세로 정렬" , "커스텀 정렬" 등 여러가지를 행할수 있게하는 속성들을 밑에 정리해둘
예정이기 때문이다. 

# 그저 css계의 goat (position)

</br>

    •static : 정적위치지정방식


    •relative : 상대위치지정방식


    •absolute : 절대위치지정방식


    •fixed : 고정위치지정방식

</br>

포지션을 뭘로 설정하느냐에 따라서 기준점이 천차 만별로 바뀌게된다 어떤 것은 div 사각형 기준으로
왼쪽 아래 ,어떤것을 왼쪽 위 , 어떤것을 브라우저의 오른쪽 제일 끝등등 굉장히 많은 베리에이션을 가진다.

</br>

포지션에는 굉장히 많은 속성들을 쥐어줄수가 있는데 포지션은 결국 "좌표이다" 포지션의 기준점은 항상
div든 뭐든 사각형의 맨왼쪽 위가 된다.
그것이 0,0이 되어서 브라우저라는 넓은 좌표에 배치하게 되는것이다

top: 위로부터 떨어지는것 (정확한 설명은 위로부터 여백을 설정함)
right: 오른쪽으로 부터 떨어지는것(문제는 포지션에 앱솔을주냐 픽스를 주냐 렐레티브를 주냐에 따라 오른쪽이 달라질수 있다)
bottom:아래로 부터 떨어짐
left:왼쪽으로 부터 떨어짐
"z-index": 요소들의 우선순위를 매김 즉 겹치는 부분이 있다라고 하면 뭐가 위에오는지 우선순위를 설명 해줌

</br>
딱 설명만 들어봐도 기깔나게 중요하다는 것을 알수있고 여기에 관해서 조금의 실습코드를 아래에 첨부하겠다.

</br>

```html

<html>

<head>
    <meta charset="utf-8">
    <link ref="stylesheet" type="text/css" href="st.css">
</head>

<style>
    .div1 {
        position: absolute;
        top: 0px;
        z-index: 5;
        width: 100px;
        height: 100px;
        background-color: black;
        border-radius: 50px;
    }

    .div2 {
        position: absolute;
        z-index: 6;

        left: 50px;
        top: 50px;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        background-color: red;
    }
    .div4{
        position: absolute;
        z-index: 8;

        left: 100px;
        top: 90px;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        background-color: green;
    }
    .div5{
        position: absolute;
        z-index: 9;

        left: 150px;
        top: 90px;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        background-color: blueviolet;
    }
    .div6{
        position: absolute;
        z-index: 12;

        left: 200px;
        top: 90px;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        background-color: gray;
    }
    .div_min1{
        position: absolute;
        z-index: 1;

        top: 15px;
        left: 15px;
        width: 50px;
        height: 50px;
        background-color: white;
        border-radius: 50px;
    }
    .div_min2{
        position: absolute;
        z-index: 1;

        top: 4px;
        left: 3px;
        width: 25px;
        height: 25px;
        background-color: purple;
        border-radius: 50px;
    }
    .div8{
        position: absolute;
        top: 150px;
        z-index: 11;
    }

    img{
        transform: translate(20px 20px);
    }

</style>

<body>
    <div class="div8">
        <img width="800px" height="200px" src="./grass-275986__480.jpeg" alt="풀밭">
    </div>
    <div class="div1">
        <div class="div_min1">
            <div class="div_min2"></div>
        </div>
    </div>
    <div class="div2"></div>
    <div class="div4"></div>
    <div class="div5"></div>
    <div class="div6"></div>



</body>

</html>


```

</br>

위가 포지션을 사용한 위치에 따라 코렁이를 그려보는 실습이다.

# 중앙정렬의 goat display
</br>
포지션으로 충분히 중앙정렬이든 뭐든 할수있고 잘된다 그치만! 수학적 계산에서 틀릴수도 있고 육안으로 맞는것 같지만
사실상 중앙에 있지 않은 경우도 있다. 이런 경우 완벽한 중앙정렬이 아니므로 민감한 인간들에게는 다소 불편감을
줄수있으니 display라는 정렬에 최고 goat인 속성이 있다. 이거로 중앙 세로 가로 정렬이 가능하다.

</br>

    •inline

    지금 내가 위치를 맞추고자 하는 태그를 인라인으로 만들어 버리는 속성


    •block

    지금 내가 위치를 맞추고자 하는 태그를 block속성으로 만들어버리는 속성

    •inline-block

    지금 내가 위치를 맞추고자 하는 태그가 *인라인 블럭 이됨

    •flex

    나의 자식 태그들을 전부 인라인 블럭요소로 바꾸어버림

    •none

    안보임

</br>

인라인이랑 인라인 블럭의 차이는 블럭일경우 가로 와 세로의 크기를 정해줄수 있다
</br>

이걸 말하는 이유는 그냥 블럭일경우는 세로로 나열되는 반면 인라인 요소는 가로로 나열되기 때문에
</br>

가로 세로정렬을 할수있다는 것이다

그리고 display를 사용한 경우에만 사용가능한 속성들을 나열해보자면 

    align-items,justyfy-content,flex-direction 등등이 있고

position을 사용한 경우에만 사용할수 있는 속성들은

    top,bottom,left,right를 사용할수있다.

</br>

# animation속성

</br>
애니메이션 속성 굉장히 중요하다. 브라우저에 렌더링되는 페이지에 생동력을 불어 넣을수 있기 때문이다.

</br>
여기에 관한한 여러 태그들을 소개 하겠다
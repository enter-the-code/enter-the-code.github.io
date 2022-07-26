---
title: HTML
date: 2022-07-26
tags: [front_end]
description: 부캠정리
---

## HTML 이란?

</br>

하이퍼 텍스트 마크업 언어이다. 따라서 이 html이라는 언어는 java 나 파이썬 같이 빌드하는 언어가 아닌
무엇이 뭔지 명시하고 그위치를 정하는 텍스트 언어일 뿐이다.


## HTML 구조

</br>

```javascript

<html>
    <head>
        <!-- 내용에 정보를 담는다 -->
    </head>

    <body>
        <!-- 내용 즉 화면에 보이는 내용-->
    </body>

</html>


```

</br>

위와 같은 구조를 지니는데 이구조에서 html언어의 시작은 /html로 끝나고 head에 정보를 저장하고 
body 내가원하는 언어를 쳐서 넣는다.

## HTML 요쇼

</br>

### 1) 빈요소 (empty element)

    내용 없이 그냥 단지 기능만하는 태그

```html
 ex)  <br>, <hr>
```

</br>

### 2) 블록 요소 (block element)

    모든 인라인 요소를 포함하거나 다른 블록 요소

</br>

```html

(ex)  <h1></h1>,<div></div>,<p></p>

```

</br>

### 3) 인라인 요소 (inline element)

    블록 요소 안에 포함되어 있는 것으로, 인라인 요소만을 가질수 있다. 즉 인라인 요소안에는 위의 요소들을 
    집어넣을수 없다는 것이다

</br>

```html

ex) <a></a>,<span></span>,<strong></strong>

```

</br>

## HTML 속성(attribute)

태그를 보조하는 명령어로 태그 안쪽에서 작동

#### ex) id,class(react 에서는 className),style,width,height ....

</br>

예시

```javascript

<h1 style="text-align: center;color: green;"> 2019년 6월</h1>

```

</br>

나머지 여러 태그들이 있고 태그들은 정말 많다. 하지만 그모든걸 여기에 적을수 없으므로 필요한 테그나 기능은 구글에 검색하여
찾는것이 가장 빠르다

## 실습

### 실습코드 1

</br>

```html

<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <h1  style="color: blue;"> starbucks</h1>
        <a href="https://google.com">
            <!-- 이미지는 상대 경로니까 알아서 다시 집어 넣어야 한다-->
            <img  src="./test_img.png" title="스타벅스" alt="스타벅스" width="200" height="200">
        </a>
        <br>

        <h2>에스프레소 & 콜드 블루</h2>
        <ul>
            <li>아아
                <ol type="I">
                    <li>6000원</li>
                </ol>
            </li>
            <li>카페모카
                <ol type="I">
                    <li>7000원</li>
                </ol>
            </li>
            <li>홍차
                <ol type="I">
                    <li>1000원</li>
                </ol>
            </li>
            <li>카페라테
                <ol type="I">
                    <li>5000원</li>
                </ol>
            </li>
            <li>콜드 블루
                <ol type="I">
                    <li>0원</li>
                </ol>
            </li>
        </ul>
        <hr>
        <p>
            <b>아메리카노</b>
            <span>
                시원하다
            </span>
        </p>
        <p>
            <b>카페모카</b>
            <span>
                달다
            </span>
        </p>
        <p>
            <b>홍차</b>
            <span>
                뜨겁고 쓰다
            </span>
        </p>
        <p>
            <b>카페라테</b>
            <span>
                이것도 달다
            </span>
        </p>
        <p>
            <b>콜드블루</b>
            <span>
                무슨맛인지 모른다
            </span>
        </p>
        
        

    </body>
</html>

```

</br>

### 실습코드 2

</br>

달력을 만드는 html 소스이다

</br>

```html

<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
            <h1 style="text-align: center;color: green;"> 2019년 6월</h1>


        <table cellspacing="0" cellpadding="30" 
        style="text-align: center;" width="100%">
            <tr>
                <td style="color: red;">일</td>
                <td>월</td>
                <td>화</td>
                <td>수</td>
                <td>목</td>
                <td>금</td>
                <td style="color: blue;">토</td>
            </tr>
            <tr>
                <td colspan="6"></td>
                <td style="color: blue;">1</td>
            </tr>
            <tr>
                <td style="color: red;">2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td  style="color: red;">6</td>
                <td>7</td>
                <td style="color: blue;">8</td>
            </tr>
            <tr>
                <td style="color: red;">9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td style="color: blue;">15</td>
            </tr>
            <tr>
                <td style="color: red;">16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
                <td style="color: blue;">22</td>
            </tr>
            <tr>
                <td style="color: red;">23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
                <td style="color: blue;">29</td>
            </tr>
            <tr>
                <td style="color: red;">30</td>
            </tr>

        </table>
    </body>
</html>

```


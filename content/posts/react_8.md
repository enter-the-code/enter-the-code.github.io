---
title: 상태 관리
date: 2022-07-05
tags: [react]
---

데이터는 리엑트 컴포넌트가 존재하게하는 라이프베슬과 같다. 일단 컴포넌트들이 행동을 하거나
어떤 것을 변경하거나 할려면 그에 따른 데이터가 존재해야 되는 것이다.
그래서 리엑트에서는 이런 데이터의 상태를 효율적으로 관리하는 강력한 도구가 있다
프로퍼티(컴포넌트에 넘기는 객체)와 상태의 관계는 어플리케이션에서 굉장히 중요하며
이 관계로 인해 상태를 변경하거나 얻어올수 있다.

</br>
이 상태를 관리하기 위해 존재하는 도구가 바로 react에 존재하는 도구인 usestate이다.
</br>
왜 이것을 써서 데이터를 관리해야 하는지 궁금할수 있는데 컴포넌트의 트리가 바뀌면 
프로퍼티도 완전 바뀌게 된다. 클리어 되거나 바뀌게 되는것이다. 새 데이터는 컴포넌트 트리를 
따라 새로 전달되며 그에 따라 새로 렌더링 된다. 이에따라 효율적으로 데이터를 관리해야한다.
</br>

만약 우리가 데이터를 한 변수로 관리하지 않고 필요한 변수마다 새로 만들어서 사용하면 파편화가
일어나기 때문에 오류를 찾기 어려울 뿐더러 그 자료를 변경할때 어떤로직에 그 변수가 들어가 있는지
찾기가 굉장히 힘들가 따라서 usestate로 변수 1개로 강력히 다루는것이 가장 좋다.
</br>

물론 usestate에 전부 우겨넣는건 안될지 몰라도 변수를 적을수로 효율적인 관리를
가능하게 해준다.

</br>

# useState 를 이용한 별점

</br>
일단 우리가 흔히 별점매길때 별 5개에 클릭해서 몇개채워서 별점주는 그 일반적인 그것이
react-icons라는 라이브러리에서 얻을수 있다.

```
npm install react-icons
```

이 명령줄을 프로젝트 안의 위치에서 설 해주고 import해서 사용할수 있다.

```javascript

import React from "react";
import {FaStar} from "react-icons/fa";

export default function StarRating(){
    return[
        <FaStar color="red"/>
        <FaStar color="red"/>
        <FaStar color="red"/>
        <FaStar color="red"/>
        <FaStar color="red"/>
    ]
}

```
</br>
위처럼 해주면 별5개가 UI로 나타나게 된다.

자 이제 여기서 별 하나당 한개의 변수로 하나씩 관리하거나 배열로 인덱싱을 이용한 관리를
이용하면 별써부터 어지러워서 접고싶어 진다.
그러니까 이때 사용하는것이 useState 훅이다.

# useState 훅

</br>

상태를 리엑트 함수 컴포넌트에 넣어줄때 훅스라는 리엑트 기능을 사용해야 한다.
훅스를 이용하면 우리가 만든 컴포넌트에 기능을 끼워 넣을수 있다.
훅은 이미 react에 여러가지가 내장되있고 우리가 먼저 사용해볼 훅이 바로 useStated이다.

</br>

아래 예시는 위와같이 비효율적이라기 보다 map함수등등 좀더 이쁘게 바꾼 예시이다.

</br>

```javascript

import React,{ useState } from "react";
import {FaStar} from "react-icons/fa";

const Star=({selected=false,onSelect=f=>f})=>(
    <FaStar color={ selected ? "red" : "black"} onClick={onSelect} />
);


export default function StarRating({totalStars=5}){
    const [seletedStars,setSelectedStars]=useState(3);
    return(
        <>
        {createArray(totalStars).map((n,i)=>(
            <Star key={i} selected={seletedStars>i} onSelect={(i+1)}/>
        ))}
        </>
    )

}

```
</br>

훅은 영어로 엮다라는 뜻이다. 방금 위의 코드에서 컴포넌트와 스테이트를 서로 훅한거다.
useState훅은 배열을 반환하는 호출가능한 함수이다.
위에 usestate에전달한 3은 디폴트 값이다.
</br>
위에 스타 컴포넌트는 별 하나의 색깔에 관한 컴포넌트이다.
위는 클릭하면 그까지의 별이 색칠되는 코드이다.
그리고 훅을 한개 더 만들어준 셋훅은 아픠 상태관리 훅 하나만으로는 상태를 관리할수 없다.
그래서 상태를 설정해주는 훅을 하나 더 만들어 줘야한다.
</br>
그리고 위의 함수에서 onSelect함수는 아무일도 안하는 함수가 맞다 먹고 먹은거 그대로 뱉어
내는것 밖에없으나 함수를 프로퍼티로 넘겨주기 위해 저렇게 만들었다.
</br>
위처럼하면 데이터가 변경될때마다 새로 렌더링 해준다.
</br>
그리고 부모에게 전달하기에는 순수함수로 전달하는것이 좋다.
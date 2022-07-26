---
title: 배운 useState 써먹기
date: 2022-07-20
tags: [develop log]
description: 공부일기
---

# 소스코드

```javascript

function Login() {

    const [ID, SetID] = useState('')
    const [Pw, SetPw] = useState('')


    const handleID = e => {
        SetID(e.target.value)
    }

    const handlePw = e => {
        SetPw(e.target.value)
    }

   
    useEffect(() => {
        console.log("complete")
    }, [ID, Pw]);


}

```

</br>

# 설명

</br>

위는 로그인 페이지에 대한 간단한 로직이다.
</br>
앞서 배운 useState로 로그인 할때 비밀번호와 아이디의 상태를 효과적으로 관리하는 코드이다.
상태를 담을변수와 상태를 변환하는 함수를 구조분해로 쪼개서 받아온후
이벤트가 생기면 그값으로 바꾸는 일을 행하고 있다.

</br>

useEffect 는 설명한대로 모든 리턴이 끝나고 어떤 것을 출력하거나 행하고 싶지만 리턴문 이후에 코드를
쳐봤자 실행되지 못하니까 벌써부터 머리가 뜨끈해진다.
그때 useEffect를 사용해서 리턴문이 끝나고 나서 일을 수행하는것이다.
</br>
저기보면 행하는 일말고도 아이디 패스워드로 이루어진 배열하나가 있는데 저거는 저 값이 변하면 useEffect문을 
실행시키 겠다는 이야기이다.

UI는 다음에 보여주도록 하겠다.

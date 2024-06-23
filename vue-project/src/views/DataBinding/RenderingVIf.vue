<template>
    <div>
        <h1 v-if="type=='A'">A</h1>
        <h1 v-else-if="type=='B'">B</h1>
        <h1 v-else>C</h1>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                type: 'A'
            };
        }
    }
</script>

<!--
v-if 디렉티브 표현식

<h1 v-if="bRender">bRender가 true이면, h1 블록이 화면에 보이게 됩니다.</h1>
=> v-if 디렉티브에 true가 리턴이 되면 html 블록이 렌더링 됩니다. 반대로 false인 경우는 화면에 랜더링 되지 않습니다.

v-else 디렉티브 표현식

<h1 v-if="bRender">bRender가 true이면, h1 블록이 화면에 보이게 됩니다.</h1>
<h1 v-else>bRender가 true가 아니면, 현재 블록이 화면에 보이게 됩니다.</h1>
=> v-else-if 디렉티브를 사용해서 else if 표현식을 사용할 수 있습니다. 

v-show 디렉티브 표현식

<h1 v-show="bShow">bShow가 true면, 현재 블록이 화면에 보이게 됩니다.</h1>

v-if와 v-show의 차이점

v-if의 경우 조건을 만족하면 그 순간에 html 블록이 생성되고, 조건에 만족하지 않으면 html 블록은 삭제됩니다.
v-show의 경우 조건 만족 여부에 상관없이 무조건 html 블록이 생성되고, 조건을 만족하면 css의 display를 이용해서 화면에 보이게 되고,
조건을 만족하지 않으면 화면에서 숨기도록 처리가 됩니다. 즉, 조건의 만족 여부에 상관없이 무조건 렌더링 되는 것입니다.

tip. v-if와 v-show을 사용할 때는 해당 html 블록이 화면 내에서 자주 toggle이 일어나면 v-show을 사용하고, toggle이 일어나는 빈도가 
작다면 v-if를 사용하는 것이 좋습니다.
(v-if는 해당 블록에 toggle이 일어날 때, v-show보다 더 많은 자원을 사용하게 됨  => v-if는 실제로 해당 블록 전체를 생성했다가 삭제하기 때문)
-->
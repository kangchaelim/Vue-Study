// Change  이벤트
<template>
    <div>
        <select v-model="selectedValue" @change="changeSelect">
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="제주">제주</option>
        </select>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                selectedValue: ''
            };
        }, 
        methods: {
            changeSelect() {
                alert(this.selectedValue);
            }
        }
    }
</script>

<!-- // Key 이벤트
검색창에 조회버튼을 클릴할 수 있지만, 대다수 조회버튼을 클릭하는 것이 아니라, 키보드 자판에서 Enter키를 입력함
프로그램 내부적으로 검색조건 입력창에 Enter키가 입력되는지를 계속 감시하다가 Enter키가 입력되면 조회버튼을 클릭했을 때
호출 하는 함수를 동일하게 호출하도록 구현이 되는데 이 때 사용 되는 것이 Key 이벤트이다.
<input @keyup.enter="submit" />

자주 사용되는 Key 이벤트
.enter/.up/.tab/.down/.delete(키보드에서 Del, Backspace키)/.left/.esc/.right/.space

Control, Shift, Alt 키와 같이 다른 키와 사용되는 특수 키
* Alt + Enter
<input @keyup.alt.enter="clear" />
* Ctrl + Click
<div @click.ctrl="doSomething">Do something</div>
-->


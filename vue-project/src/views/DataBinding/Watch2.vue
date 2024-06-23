<template>
    <div>
        <h1>Full Name : {{ fullName }}</h1>
        <button type="button" @click="changeName">변경</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                firstName: 'Rumi',
                lastName: 'Chae',
                fullName: ''
            };
        }, 
        watch: {
            firstName(){
                this.fullName = this.firstName + ' ' + this.lastName;
            }, 
            lastName(){
                this.fullName = this.firstName + ' ' + this.lastName;
            }
        },
        methods: {
            changeName(){
                this.firstName = 'rimi'
            }
        }
    }
</script>

<!--
Watch.vue 에서 Full Name이 보이지 않지만, Watch2.vue 에서 버튼을 클릭 시 firstName 변경으로 인해 watch가 실행되고, firstName 함수를 통해 fullName이 갱신됨.

computed는 정의된 데이터 값을 바탕으로 새로운 데이터 값을 생성함. 새로운 데이터 값에서 참조하고 있는 기존 데이터 값의 변경을 감지함.
참조하고 있는 데이터 값의 변경과 상관없이 최초에 computed에 정의된 데이터 함수를 실행함.

watch는 초기에 할당된 값에서 변경이 일어나야 watch에 정의한 함수는 실행한다는 차이가 있음.
-->

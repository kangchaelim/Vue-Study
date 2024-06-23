<template>
    <div>
        <button type="button" @click="increaseCounter">Add 1</button>
        <p>The Counter is : {{ counter }}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                counter: 0
            };
        }, 
        methods: {
            increaseCounter() {
                this.counter = this.counter + 1;
            }
        }
    }
</script>

<!-- 
클릭이벤트를 통해 지정된 함수로 파라미터 전달

<template>
    <div>
        <button type="button" @click="setCount(7)">Set 7</button>
        <p>The Counter is : {{ counter }}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                counter: 0
            };
        }, 
        methods: {
            setCount(counter){
                this.counter = counter;
            }
        }
    }
</script> -->

<!-- <template>
    <div>
        <button type="button" @click="increaseCounter">Add 1</button>
        <p>The Counter is : {{ counter }}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                counter: 0
            };
        }, 
        methods: {
            increaseCounter() {
                this.counter = this.counter + 1;
            }
        }
    }
</script> -->
<!-- 
클릭 이벤트 발생 시 여러 개의 함수를 호출

<template>
    <div>
        <button type="button" @click="one(), two()">click</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                counter: 0
            };
        }, 
        methods: {
            one(){
                alert('One');
            }, 
            two(){
                alert('Two');
            }
        }
    }
</script> -->
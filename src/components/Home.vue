<template>
    <div>
        <input type="text" v-model="state.input">
        <button @click="handleClick">클릭</button>
    </div>
</template>

<script>
// import { reactive } from '@vue/reactivity'
import { reactive,  } from '@vue/reactivity'
export default {
    setup () {
        const state = reactive({
            input : null,
        })
        const handleClick = () =>{
            console.log(state.input.value)
        }
        

        return {state, handleClick}
    }
}
</script>

<style lang="scss" scoped>

</style>
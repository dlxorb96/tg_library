<template>
    <div>
        <el-menu
            :default-active="state.activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :router="true"
            @select="handleSelect">
            <el-menu-item route= "/" index="/">Home</el-menu-item>
            <el-menu-item route= "/time" index="/time">Time</el-menu-item>
        </el-menu>
        <router-view></router-view>
    </div>
</template>

<script>
import {reactive} from 'vue'
export default {
    setup () {
        let state = reactive({
            // activeIndex: '/'
            activeIndex: sessionStorage.getItem("CURL")
            })

        const handleSelect = (idx) =>{
            console.log(idx)
            state.activeIndex = idx
        }
        return {state, handleSelect}
    }
}
</script>

<style lang="scss" scoped>

</style>
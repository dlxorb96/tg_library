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
            <el-menu-item route= "/login" index="/login">Login</el-menu-item>
            <el-menu-item route= "/lte" index="/lte">Lte</el-menu-item>
        </el-menu>
        <router-view></router-view>
    </div>
</template>

<script>
import {onMounted, reactive} from 'vue'
export default {
    setup () {

        onMounted(()=>{
            // sessionStorage.setItem('CURL', '/');
            // state.activeIndex = sessionStorage.getItem("CURL")
        })

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
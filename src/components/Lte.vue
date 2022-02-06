<template>
    <div style="display: flex; flex-direction: column; justify-content: center;
    align-items: center;">
        <div 
        style="margin-bottom: 5px; border:1px solid black; display: flex; justify-content: center;
        align-items: center; width: 400px; height: 400px;">
        

        </div>
        <div style="padding: 50px; border: 1px solid black; width: 300px; display: flex;
        flex-direction: column; justify-content: center; align-items: center;">
        <el-row class="mb-4" style="margin-bottom: 10px">
            <el-button type="primary" @click="handleClick">문제</el-button>
            <el-button type="primary">제출</el-button>
        </el-row>
        <el-row class="mb-4" style="margin-bottom: 10px">
            <el-button>$lt</el-button>
            <el-button>$lte</el-button>
            <el-button>$gt</el-button>
            <el-button>$gte</el-button>
        </el-row>    
        <el-row class="mb-4">
            <el-button>$in</el-button>
            <el-button>$ne</el-button>
            <el-button>$and</el-button>
            <el-button>$or</el-button>
            
        </el-row>    
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
    setup () {
        const state = reactive({
            screen: ''
        })

        const handleClick = async()=>{
            console.log("handleClick")
        }

        return {handleClick, state}
    }
}
</script>

<style lang="scss" scoped>
    
</style>
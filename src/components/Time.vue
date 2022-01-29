<template>
    <div>
        <h3>Time.vue</h3>
        {{state}}
        <el-form :inline="true" label-width="120px">
            <el-form-item label="한 일">
                <el-input @keyup.enter="handleKeyUp" style="width:200px;"  v-model="state.doing"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">입력</el-button>
                <el-button type="primary" @click="onSubmit2">통계</el-button>
            </el-form-item>
        </el-form>
        {{state2}}
        <div>
            <table>
                <thead>
                    <tr>
                        <th>한 일</th>
                        <th>시간</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="tmp in state2" v-bind:key="tmp" >
                        <td>1{{tmp.doing}}</td>
                        <td>2{{tmp.time}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import axios from 'axios';
// import { onMounted } from '@vue/runtime-core';
export default {
    setup () {
        const state = reactive({
            doing: ''
        });

        let state2 = reactive({
            doing : '',
            regdate : ''
        })
        console.log(state2)

        const onSubmit = () =>{
            handleKeyUp()
        }

        const handleKeyUp= async() =>{
            if(state.doing ===''){
                return false;
            }
            
            console.log("Time.vue =>handleChange");
            const url ='/time/insert';
            const headers = {"Content-Type": "application/json"};
            const body = {doing : state.doing}
            const response = await axios.post(url, body, {headers});
            console.log(response)
            if(response.data.status ===200){
                state.doing = '';
            }
        }

        // onMounted()
            
        // }
        
        const onSubmit2 = async() => {
            console.log("onsubmit2")
            const url = '/time/insert';
            const headers = {"Content-Type": "application/json"};
            const response = await axios.get(url, {headers});
            console.log(response);
            if(response.data.status ===200){
                state2.doing = response.data.result
            }
            console.log(state2)
            
        }

        return {state,state2, onSubmit, onSubmit2, handleKeyUp}
    }
}
</script>

<style lang="scss" scoped>

</style>
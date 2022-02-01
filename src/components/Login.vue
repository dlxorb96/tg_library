<template>
    <div>
        <h3>hello login</h3>

    {{state}}
    <el-form>
        <el-form-item label="아이디">
            <el-input v-model="state.ID"></el-input>
        </el-form-item>
        <el-form-item label="암호">
            <el-input type="password" v-model="state.PW"></el-input>
        </el-form-item>
        <el-form-item label="암호확인">
            <el-input type="password" v-model="state.PWChk"></el-input>
        </el-form-item>
        <button @click="handleClick"> 회원가입 </button>
    </el-form>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
    setup () {
        const state = reactive({
            ID : '',
            PW : '',
            PWChk: '',
        })

        const handleClick = ()=>{
            if(state.ID ===''){
                alert('아이디입력');
                return false;
            }
            if(state.PW ===''){
                alert('암호 입력');
                return false;
            }
            if(state.PWChk ===''){
                alert('암호 확인 입력');
                return false;
            }
            if(state.PW !== state.PWChk){
                alert('비밀번호 틀림');
                return false;
            }
        }
        

        return {state, handleClick}
    }
}
</script>

<style lang="scss" scoped>

</style>
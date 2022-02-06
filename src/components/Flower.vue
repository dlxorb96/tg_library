<template>
    <div>
        <h3>Flower.vue</h3>
        <img :src="state.image" />
    </div>
</template>

<script>
import { onMounted, reactive  } from 'vue';
import axios from 'axios';
export default {
    setup () {
        const convert = require('xml-js')
        
        const state = reactive({
            image : {},
            items: {}
        })

        const test = async () =>{
            const serviceKey = 'bmBOHC%2FtaD5zYdsTAvNFJFFYxZ7I0iVivPi96Qf5fARvKJvXhY1rdlgRtSlFuWpMfpgJYCYQ2acJiQM4JingCg%3D%3D'
            const dataNo = '300'
            const url = `http://apis.data.go.kr/1390804/NihhsTodayFlowerInfo01/selectTodayFlowerView01?serviceKey=${serviceKey}&dataNo=${dataNo}`
            const headers = {"Content-Type" : "application/json"};
            const response = await axios.get(url, {headers});
            
            
            var responseJSON = convert.xml2json(response.data, {compact: true, spaces: 4});
            const obj = JSON.parse(responseJSON)
            console.log(obj)
            const result = obj.document.root.result
            const status = obj.document.root.resultCode._text
            if(status === "1"){
                state.items = result
                console.log(state.items)
            }

            
            // console.log(typeof result, status)
            // console.log(obj.document.root.result.imgUrl1._cdata)
            // state.image = obj.document.root.result.imgUrl1._cdata
            // console.log(typeof state.image )
            
            
            
        }
        
        onMounted(async()=>{
            await test()
        })

        return {state, test}
    }
}
</script>

<style lang="scss" scoped>

</style>
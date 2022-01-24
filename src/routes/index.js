//node_module로부터 필요한 라이브러리 import
import { createWebHashHistory, createRouter} from "vue-router";

//추가하고자 하는 컴포넌트들
import HelloWorld from '@/components/HelloWorld.vue'
import Home from '@/components/Home.vue'

//URL과 컴포넌트의 연결
const routes = [
    {path: '/',  name: 'HelloWorld', component: HelloWorld},
    {path: '/home', name: 'Home', component: Home},
    { path:'/', redirect: '/home' }
]

//실제 라우트 적용
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

//프로젝트에 적용하기 위해
export default router;
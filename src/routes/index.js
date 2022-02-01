//node_module로부터 필요한 라이브러리 import
import { createWebHashHistory, createRouter} from "vue-router";

//추가하고자 하는 컴포넌트들

import Home from '@/components/Home.vue'
import Time from '@/components/Time.vue'
import Login from '@/components/Login.vue'

//URL과 컴포넌트의 연결
const routes = [
    
    {path:'/', redirect: '/home'},
    {path:'/home', name: 'Home', component: Home },
    {path: '/time', name: 'Time', component: Time},
    {path: '/login', name: 'Login', component: Login},
]

//실제 라우트 적용
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, from, next)=>{
    console.log('이동하는 페이지:', to.path);
    sessionStorage.setItem('CURL', to.path);
    console.log('이동 전 페이지:', from);
    next();
})

//프로젝트에 적용하기 위해
export default router;
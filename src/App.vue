<template>
  <div>
    <el-container>
      <el-header>
        <el-menu          
          class="el-menu-demo"
          mode="horizontal"
          :router = "true"
        >
          <el-menu-item ref="home" index="home">홈</el-menu-item>
          <el-menu-item v-show="!logged" ref="login" index="login">로그인</el-menu-item>
          <el-menu-item v-show="logged" ref="logout" index="logout">로그아웃</el-menu-item>
          <el-menu-item v-show="logged" ref="mypage2" index="mypage2">마이페이지</el-menu-item>
          <el-menu-item v-show="!logged" ref="join" index="join">회원가입</el-menu-item>
          <el-menu-item v-show="logged" ref="board" index="board">게시판</el-menu-item>
          <el-menu-item ref="seller" index="seller">판매자</el-menu-item>
          <el-menu-item v-show="logged" ref="admin" index="admin">관리자</el-menu-item>
          <!-- <el-menu-item ref="admin" index="admin">관리자</el-menu-item> -->
          <!-- v-if = 태그를 생성시키지 않음 빈도수가 낮은거 -->
          <!-- v-show = 태그생성, 숨김으로 빈도수가 높은거 -->
          
        </el-menu>
      </el-header>

      <el-main>
        <router-view @changeLogged = "changeLogged"></router-view>
      </el-main>

      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import {useStore} from 'vuex'
export default {
  // 가장 먼저 호출됨. 태그를 생성이 완료가 안돼서 태그를 찾거나 클릭하는 게 불가능하다
  // DOM 접근 불가 ex) 벡엔드로 데이터를 받는 것
  // 백엔드로부터 데이터를 받아서  클릭하는 것 불가능
  created() {

  },
  // DOM 접근이 가능 ex) 태그를 조작, 클릭 등을 수행
  
  mounted(){
    console.log(window.location.pathname.substr(1));
    const path = window.location.pathname.substr(1);
    this.changeLogged(path)

    // 메소드 로그인상태를 체크해서 메뉴를 변경(로그인, 로그아웃1)
    // path 클릭을 해야되는 메뉴의 종류를 전달
    this.store.subscribe((mutation, state) =>{
                console.log(mutation, state)

                if(mutation.type === 'setMenu'){
                    const tmp = mutation.payload;
                    this.changeLogged(tmp);
                }
            })
    
  },
 
// substr 1번째 문자 제외 다 가져오고 싶다
  data() {
    return {
      logged: false,
      store : useStore()
    };
  },
  methods: {
    

    changeLogged(path) {
      console.log("App.vue => changeLogged", path)
      //현재 로그인 상태를 확인하기
      const token = sessionStorage.getItem("TOKEN");
      // 토큰이 없을 때
      if (token === null) {
        this.logged = false; 
      } 
      // 토큰이 있을 때
      else {
        this.logged = true;
      }

      // this.$refs.home.click();
      //  this.$refs["home"].click(); 이랑 같음
      // this.$refs.login.click();
      // this.$refs.path.click();
      // this.$refs["path"].click(); 이랑 같음   
      // .path를 하면 파라미터로 넘어온 path가 아니라 위에 존재하는 path를 찾는다
      
      // this.$refs[path].$el.click();
      //클릭방식으로 메뉴 활성화
      if(typeof this.$refs[path] !== 'undefined'){
        this.$refs[path].$el.click();
      }
    },
  },
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  /* text-align: center;
  line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
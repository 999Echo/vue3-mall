<template>
    <div class="layout">
      <!-- 需要菜单 -->
    <el-container v-if="state.showMenu" class="container">
      <el-aside class="aside">
        <!--系统名称+logo-->
        <div class="head">
          <div>
            <img src="//s.weituibao.com/1582958061265/mlogo.png" alt="logo">
            <span>vue3 admin</span>
          </div>
        </div>
        <!--一条为了美观的线条-->
        <div class="line" />
        <el-menu
          background-color="#222832"
          text-color="#fff"
          :router="true"
          :default-openeds="defaultOpen"
          :default-active='currentPath'
        >
          <!--一级栏目-->
          <el-sub-menu index="1">
            <template #title>
              <span>Dashboard</span>
            </template>
            <!--二级栏目-->
            <el-menu-item-group>
              <!-- 菜单组件内置的路由跳转index -->
              <el-menu-item index="/"><el-icon><DataLine /></el-icon>首页</el-menu-item>
              <el-menu-item index="/add"><el-icon><DataLine /></el-icon>添加商品</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <!-- 一级 -->
          <el-sub-menu index="2">
            <template #title>
              <span>首页配置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/swiper"><el-icon><Picture /></el-icon>轮播图配置</el-menu-item>
              <el-menu-item index="/hot"><el-icon><StarFilled /></el-icon>热销商品配置</el-menu-item>
              <el-menu-item index="/new"><el-icon><Sell /></el-icon>新品上线配置</el-menu-item>
              <el-menu-item index="/recommend"><el-icon><ShoppingCart /></el-icon>为你推荐配置</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <span>模块管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/category"><el-icon><Menu /></el-icon>分类管理</el-menu-item>
              <el-menu-item index="/good"><el-icon><Goods /></el-icon>商品管理</el-menu-item>
              <el-menu-item index="/guest"><el-icon><User /></el-icon>会员管理</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container class="content">
      <Header />
      <div class="main">
        <!-- 路由组件 -->
        <router-view />
      </div>
      <Footer />
      </el-container>
    </el-container>

    <!-- 不需要菜单 -->
    <el-container v-else class="container">
      <router-view/>
    </el-container>
  </div>
</template>

<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import { reactive,toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { localGet,pathMap } from '@/utils'

//不需要菜单的数组
const noMenu = ['/login']
const router = useRouter()
const state = reactive({
  showMenu : true, //是否需要菜单
  defaultOpen: ['1', '2','3'],//展开哪个
  currentPath: '/',//当前菜单项
})
//监听路由
router.beforeEach((to,from,next)=>{
  if (to.path == '/login') {
    // 如果路径是 /login 则正常执行
    next()
  } else {
    // 如果不是 /login，判断是否有 token
    if (!localGet('token')) {
      // 如果没有，则跳至登录页面
      next({ path: '/login' })
    } else {
      // 否则继续执行
      next()
    }
  }
  state.showMenu = !noMenu.includes(to.path) //如果当前路由在数组里，就不显示菜单
  state.currentPath = to.path  //切换高亮为当前菜单项
  document.title = pathMap[to.name]//修改标题
})

</script>

<style scoped>
.layout {
  min-height: 100vh;
  background-color: #ffffff;
}
.container {
  height: 100vh;
}
.aside {
  width: 200px!important;
  background-color: #222832;
}
.head {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
.head > div {
  display: flex;
  align-items: center;
}

.head img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.head span {
  font-size: 20px;
  color: #ffffff;
}
.line {
  border-top: 1px solid hsla(0,0%,100%,.05);
  border-bottom: 1px solid rgba(0,0,0,.2);
}
.content {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    overflow: hidden;
  }
  .main {
    height: calc(100vh - 100px);
    overflow: auto;
    padding: 10px;
  }
</style>

<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>'

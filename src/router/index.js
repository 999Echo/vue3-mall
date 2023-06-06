import { createRouter, createWebHashHistory } from "vue-router";
// import Index from '@/views/Index.vue';
import Addgood from '@/views/Addgood.vue';
import Login from '@/views/Login.vue';
import Swiper from '@/views/Swiper.vue';
import IndexConfig from '@/views/IndexConfig.vue';
import Category from '@/views/Category.vue';
import Good from '@/views/Good.vue'
import Guest from '@/views/Guest.vue'

const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'index',
            //路由懒加载
            component:()=>import('@/views/Index.vue')
        },
        {
            path:'/add',
            name:'add',
            component:Addgood
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'/swiper',
            name:'swiper',
            component:Swiper
        },
        {
            path: '/hot',
            name: 'hot',
            component: IndexConfig
        },
        {
            path: '/new',
            name: 'new',
            component: IndexConfig
        },
        {
            path: '/recommend',
            name: 'recommend',
            component: IndexConfig
        },
        {
            path: '/category',
            name: 'category',
            component: Category,
            children: [
                {
                  path: '/category/level2',
                  name: 'level2',
                  component: Category,
                },
                {
                  path: '/category/level3',
                  name: 'level3',
                  component: Category,
                }
            ]

        },
        {
            path: '/good',
            name: 'good',
            component: Good
        },
        {
            path: '/guest',
            name: 'guest',
            component: Guest
        }
    ]
})

export default router
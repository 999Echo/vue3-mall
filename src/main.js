import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'//图标库

const app = createApp(App)//生成vue实例
//引入图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
   }
// 全局方法
app.config.globalProperties.$filters = {
    prefix(url) {
      if (url && url.startsWith('http')) {
        // 当 url 以 http 开头时候，我们返回原路径
        return url
      } else {
        // 否则，我们给路径添加 host，如下
        url = `http://backend-api-02.newbee.ltd${url}`
        return url
      }
    }
  }
//解决点击置顶问题
  app.config.globalProperties.goTop = function () {
    const main = document.querySelector('.main')
    main.scrollTop = 0
  }
app.use(ElementPlus)
app.use(router)//引用路由
app.mount('#app')//挂载

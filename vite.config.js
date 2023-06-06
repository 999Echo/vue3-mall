import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default({mode}) =>defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // @ 代表 src 目录下的别名；~ 代表根目录下的别名，这样我们在项目中使用路径的时候，就不用写一长串。
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, './'),
    }
  },
  extensions: ['.vue', '.js', 'jsx', '.json'],
  base: mode == 'development' ? './' : (mode == 'beta' ? '//s.baidu.com/beta/xxx' : '//s.baidu.com/release/xxx'), // 静态资源路径配置
  server: {
    proxy: {
      '/api': {
        target: 'http://backend-api-02.newbee.ltd/manage-api/v1', // 凡是遇到 /api 路径的请求，都映射到 target 属性
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 重写 api 为 空，就是去掉它
      }
    }
  }
})

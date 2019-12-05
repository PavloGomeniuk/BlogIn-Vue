import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import App from './App.vue'
import Post from './components/Post.vue'
import Journal from './components/Journal.vue'
import PostAxios from './components/PostAxios.vue'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
 routes: [
   {
     path: '/',
     name:'journal',
     component: Journal,
   },
   {
     path: '/post/:id',
     name:'post',
     component: Post,
     props: true,
   },
   {
     path: '/axios1',
     name:'axios1',
     component: PostAxios,
   },
 ],
  mode: 'history'
})

new Vue({
 el: '#app',
 render: h => h(App),
 router
})
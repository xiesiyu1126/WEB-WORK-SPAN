import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Self from '../components/Self.vue'
// import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path:'/self',
    name:'Self',
    component: Self
  }
]

const router = new VueRouter({
  routes
})

export default router

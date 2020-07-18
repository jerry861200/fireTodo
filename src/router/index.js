import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/all',
    name: 'all'
  },
  {
    path: '/finish',
    name: 'finish'
  },{
    path: '/active',
    name: 'active'
  },{
    path:'*',
    redirect:'/all'
  }
  
]

const router = new VueRouter({
  routes
})

export default router

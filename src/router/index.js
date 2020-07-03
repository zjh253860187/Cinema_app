import Vue from 'vue'
import VueRouter from 'vue-router'
import Moviesh from './Moviesh'
import Mypage from './Mypage'
import Cinemas from './Cinemas'

Vue.use(VueRouter)

  const routes = [
	Moviesh,
	Cinemas,
	Mypage,
	{
		path:'/*',
		redirect:'/moviesh'
	}
	
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

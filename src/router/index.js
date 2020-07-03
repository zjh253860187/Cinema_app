import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from './Movies'
import Mypage from './Mypage'
import Cinemas from './Cinemas'

Vue.use(VueRouter)

  const routes = [
	Movies,
	Mypage,
	Cinemas,
	{
		path:'/*',
		redirect:'/movies'
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

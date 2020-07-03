export default{
	path:'/movies',
	component: () => import('@/views/Movies.vue'),
	children:[
		{
			path:'hotcity',
			component: () => import('@/components/Hotcity.vue')
		},
		{
			path:'nowp',
			component: () => import('@/components/Nowp.vue')
		},
		{
			path:'search',
			component: () => import('@/components/Search.vue')
		},
		{
			path:'willp',
			component: () => import('@/components/Willp.vue')
		}
	]
	
}
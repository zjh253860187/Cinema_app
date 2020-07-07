//反向代理设置解决跨域
module.exports = {
	devServer:{
		proxy:{
			'api':{
				target:' http://localhost:3005',
				changeOrigin:true
			}
		}
	}
}
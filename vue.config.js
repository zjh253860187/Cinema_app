//反向代理设置解决跨域
module.exports = {
	devServer:{
		proxy:{
			'login':{
				target:'http://192.168.0.224:3005',
				changeOrigin:true
			}
		}
	}
}
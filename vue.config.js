//反向代理设置解决跨域
module.exports = {
	devServer:{
		proxy:{
			'api':{
				target:'http://39.97.33.178',
				changeOrigin:true
			}
		}
	}
}
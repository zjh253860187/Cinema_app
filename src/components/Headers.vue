<template>
	<div id="headers">
		<header id="header">
			<h1>{{ title }}</h1>
		</header>
	</div>
</template>

<script>
	export default{
		name:'headers',
		props:{
			title:{
				type:String,
				default:"飞飞电影"
			}
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped="less">
#headers{height: 45px;}
#header{width:100%; height:45px; color: #fff; background: #e54847; border-bottom: 1px solid #e54847; position: fixed;z-index: 99;}
#header h1{ font-size: 18px; text-align: center; line-height: 45px; font-weight: normal; }
#header i{ position: absolute; left: 5px; top: 50%; margin-top: -13px; font-size: 26px;}
</style>


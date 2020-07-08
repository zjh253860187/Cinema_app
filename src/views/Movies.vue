<template>
	<div id="main">
		<Headers title="热门电影"/>
		<div id="content">
				<div class="movie_menu">
					<router-link tag="div" to="/movies/hotcity" class="city_name actives">
						<span>大连</span>
						<i class="iconfont icon-lower-triangle"></i>
					</router-link>
					<div class="hot_swtich">
						<router-link tag="div" to="/movies/nowp" class="hot_item actives">正在热映</router-link>
						<router-link tag="div" to="/movies/willp" class="hot_item actives">即将上映</router-link>
					</div>
					<router-link tag="div" to="/movies/search" class="search_entry actives">
						<i class="iconfont icon-sousuo"></i>
					</router-link>
				</div>
				<keep-alive>
					<router-view/>
				</keep-alive>
			</div>
		<Tabbar/>
	</div>
</template>

<script>
	export default{
		name:'movies',
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped="less">
#content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .actives.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry i{  font-size:24px;color: red;}
</style>

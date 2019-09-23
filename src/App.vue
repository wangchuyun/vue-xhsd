<template>
<div class="app-container">
       <!-- 顶部header区域 -->
<!-- <mt-search v-model="value"></mt-search> -->
       <!-- 中间的路由 router-view 区域 -->
	 <transition>
		 <router-view></router-view>
	 </transition>
		   	
	 

       <!-- 底部Tabbar区域 -->
      <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/sort">
				<span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
				<span class="mui-tab-label">分类</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><button v-text="$store.state.count" class="mui-badge">0</button></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/myself">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>

    </div>
</template>

<script>
export default {
	data(){
		return{
			count:'4'
		}
		
	}
}
</script>


<style lang="scss" scoped>
.app-container {
	// padding-top:37px;
	margin-bottom: 30px;
	height:726px;
	overflow-x: hidden;
	
}
.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active{
	transition: all .5s ease;
}


</style>
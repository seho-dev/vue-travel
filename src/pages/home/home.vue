<template>
    <div>
       <home-header></home-header>
       <home-swiper></home-swiper>
       <home-icon></home-icon>
       <home-recommend></home-recommend>
       <home-like></home-like>
    </div>
</template>
<script>
import Header from '@/pages/home/components/Header'
import Swiper from '@/pages/home/components/Swiper'
import Icon from '@/pages/home/components/icon'
import Recommend from '@/pages/home/components/Recommend'
import like from '@/pages/home/components/like'
export default {
    name:'home',
    components:{
        HomeHeader:Header,
        HomeSwiper:Swiper,
        HomeIcon:Icon,
        HomeRecommend:Recommend,
        HomeLike:like
    }
}
</script>

<style>

</style>

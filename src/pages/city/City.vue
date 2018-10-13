<template>
    <div>
        <div class="box">
         <router-link to="/">
            <div class="iconfont header-left-icon">&#xe72b;</div>
         </router-link>
                城市选择
            
        </div>
        <headercity :search="search" :cities="cities"></headercity>
        <domestic :city="cities" :hot="hotcities"></domestic>
    </div>
</template>
<script>

import axios from 'axios'
import headercity from '@/pages/city/components/headercity.vue'
import domestic from '@/pages/city/components/domestic.vue'
export default {
    name:'City',
    components:{
        headercity,
        domestic
    },
    data(){
        return{
            cities:{},
            hotcities:[],
            search:false
        }
    },
    methods:{
        //点击搜索
        clicksearch(){
            this.search=!this.search;
        },
        getcityInfo(){
            axios.get('../static/city.json')
                //回调函数是一个方法
                .then(this.handelbackSuccess)
        },
        handelbackSuccess(res){
                //把ajax获取到的数据弄到我们的对象和数组里
                res=res.data;
                //data中的状态为真且数据不为空执行下面的判断
               if (res.ret && res.data) {
                    const data = res.data
                    this.cities = data.cities
                    this.hotcities = data.hotCities
                }
                console.log(this.cities)
        }    
    },    
    mounted(){
        //被挂载之后执行一个获取城市列表的ajax的方法
        this.getcityInfo();
    }
}
</script>

<style  lang="stylus" scoped>
@import '~styles/varibles.styl'
       .box
        position relative
        background $bgColor
        width 100%
        height .8rem
        line-height .8rem
        color #fff
        font-size .32rem
        text-align center
        overflow hidden
        .header-left-icon
         position absolute
         left .2rem
         top 0
         width 1rem
         font-size .36rem
         color #fff
        .header-right-icon
         position absolute
         left 6.5rem
         top 0
         width 1rem
         font-size .36rem
         color #fff
</style>

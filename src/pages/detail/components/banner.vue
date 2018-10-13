<template>
    <div>
        <div class="banner" @click="handelclickshowList">
            <img :src="this.bannerimg" alt="" class="banner-img">
            <div class="banner-bottom">
                <div class="banner-bottom-number">
                    <span class="banner-bottom-img iconfont">&#xe6ee;</span>
                    <p class="banner-bottom-text">{{this.bannerimgs.length}}</p>
                </div>
                <p class="banner-title">{{this.title}}</p>
                <div class="banner-bottom-video iconfont">
                视频 &#xe62d;
                 </div>
            </div>
        </div>
        <fade-animation>
            <gallary v-show="Listshow" :imgs="imgUrl" @close="closeGallary"></gallary>
        </fade-animation>
    </div>
</template>

<script>
import fadeAnimation from 'common/fadeAnimation/fade'
import gallary from 'common/SwiperGallary/Gallary'
export default {
    name:"DetailBanner",
    props:{
        title: String,
        bannerimg: String,
        bannerimgs: Array
    },
    data(){
        return{
            Listshow:false,
            imgUrl:['http://img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_r_800x800_980118e2.jpg']
        }
    },
    components:{
        gallary,
        fadeAnimation
    },
    methods:{
        handelclickshowList(){
            this.Listshow=true
        },
        closeGallary(){
            this.Listshow=false
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner
     position relative
     overflow hidden
     height 0
     padding-bottom 55%
     .banner-img
      width 100%
     .banner-bottom
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.7))
      .banner-bottom-number
       position absolute
       left .2rem
       top -0.4rem
       background rgba(0,0,0,.5)
       width 1.2rem
       height .4rem
       border-radius .2rem
       .banner-bottom-img
        position relative
        top -.1rem
        color #fff
        font-size 14px
        margin-left .3rem
        margin-top -0.1rem
       .banner-bottom-text
        color #fff
        position relative
        top -.7rem
        margin-left .7rem
      .banner-title
       flex 1
       font-size .36rem
       color #fff
       padding-bottom .1rem
       margin-left .2rem
      .banner-bottom-video
       color #fff
       font-size .36rem
       padding-right .3rem
       
</style>

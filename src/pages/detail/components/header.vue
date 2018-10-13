<template>
    <div class="box">
        <router-link class="header-icon" tag="div" to="/" v-show="!showHeader">
            <div class="iconfont header-left-icon">
                    &#xe72b;
            </div>
        </router-link>
        <div class="header-fixed" v-show="showHeader" :style="fixedStyle">
            <div class="iconfont header-back-icon">
                    &#xe72b;
            </div>
            <p class="header-fiexd-title">景点详情</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"DetailHeader",
    data(){
        return{
            showHeader:false,
            fixedStyle:{
                opacity:0
            }
        }
    },
    activated(){
        window.addEventListener("scroll",this.linstenScroll)
    },
    deactivated(){
        window.removeEventListener("scroll",this.linstenScroll)
    },
    methods:{
        linstenScroll(){
            const topNumber=document.documentElement.scrollTop;
            if(topNumber>60){
                let opacity=topNumber/140;
                opacity=opacity===1 ? 1 : opacity
                this.fixedStyle={opacity}
                //让导航栏显示
                this.showHeader=true
            }else{
                this.showHeader=false
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
        .header-icon
         position absolute
         left .15rem
         top .15rem
         right 0
         width .72rem
         height .72rem
         line-height .72rem
         border-radius .72rem
         background rgba(0,0,0,.8);
         .header-left-icon
          color #fff
          margin-left .15rem
          font-size 18px 
        .header-fixed
          z-index 2
          display flex
          flex 1
          height 0
          padding-bottom 0.8rem
          background $bgColor
          position fixed
          left 0
          top 0
          right 0
          .header-back-icon
           color #fff
           font-size .4rem
           margin-left .2rem
           margin-top .2rem
          .header-fiexd-title
           width auto
           margin .3rem 2.8rem
           color #fff
           line-height 0.35rem

</style>

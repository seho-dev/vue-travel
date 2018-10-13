<template>
    <div class="box">
        <div class="desc-title">
            <div class="desc-title-left border-right">
                <span class="left-score">4.9</span>
                <span class="left-score-desc">分&nbsp;&nbsp;&nbsp;很棒！</span>
                <p class="left-data">16735条评论，5条攻略</p>
                <div class="left-imgIcon iconfont">
                    &#xe62d;
                </div>
            </div>
            <div class="desc-title-right">
                <span class="right-score-desc">景点简介</span>
                <p class="right-data">开放时间，贴士</p>
                <div class="right-imgIcon iconfont">
                    &#xe62d;
                </div>
            </div>
        </div>
        <div class="desc-address border-top">
            <p class="desc-all">
                <span class="iconfont address-iconImg">&#xe70f;</span>
                <span class="address-title">陕西省西安市临潼区华清路38号华清池</span>
                <span class="right-imgIcon iconfont">&#xe62d;</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name:"DetailDesc"
}
</script>

<style lang="stylus" scoped>
    .box
     height 2.5rem
     border-radius  .1rem .1rem 0 0
     background #fff
     position relative
     top -.1rem
     padding .1rem .2rem 0 .2rem
     .desc-title
      flex 1
      height 0
      padding-bottom 1.4rem
      position relative
      .desc-title-left
       flex 1
       position absolute
       width 50%
       height 1.1rem
       .left-score
        display inline-block
        color #ff8c12
        font-size 25px
        margin-top .2rem
       .left-score-desc
        display inline-block
        color #ff8c12
        font-size 15px
        margin-top .2rem
       .left-data
        font-size 11px
        color #ccc
        margin-top .15rem
       .left-imgIcon
        position absolute
        left 3rem
        top .5rem
        color #9e9e9e
      .desc-title-right
       flex 1
       float right
       position relative
       width 50%
       height 1.1rem
       .right-score-desc
        display inline-block
        font-size 15px
        margin-top .3rem
        margin-left .3rem
       .right-data
        font-size 11px
        color #ccc
        margin-top .16rem
        margin-left .3rem
       .right-imgIcon
         position absolute
         left 3rem
         top .5rem
         color #9e9e9e
     .desc-address
      width 100%
      height 0
      padding-bottom .7rem
      color #212121
      line-height .7rem
      .desc-all
       position relative
       .address-iconImg
        font-size .5rem
        position absolute
        
       .address-title
        padding-right: 1.2rem;
        position: relative;
        padding-left: .6rem;
       .right-imgIcon
        position absolute
        float right
        padding-right 0.2rem
        color #9e9e9e
      
        
      
       

</style>

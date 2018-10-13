<template>
    <div>
       <div class="header">
            <div class="header-left">
                <div class="iconfont header-left-icon">
                    &#xe72b;
                </div>
            </div>
            <div class="header-input">
                <span class="iconfont header-input-icon">&#xe686;</span>
                输入城市/景点/游玩主题</div>
          <router-link to="/city">
            <div class="header-right">
                {{this.city}}
              <span class="iconfont header-right-icon">&#xe600;</span>
            </div>
          </router-link>
       </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Header",
  computed:{
      //通过es6的展开运算符，让vuex的city数据映射到本组件中为我们使用，我们在模板中使用的时候，直接this.city即可
      ...mapState(['city'])
      //还可以这样写
      /* ...mapState({
              curreyCity:'city'
              这样写和上面写没区别，只是定义了不同的本地变量名而已，值是一样
      }) */
  }
};
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
      display:flex
      height: .86 rem
      line-height : .86 rem
      background :$bgColor
      color :#fff

    .header-left
      float:left
      height 0.64 rem
      width: .86 rem
      margin-left: 0.3 rem
      

      .header-left-icon
       text-align :center

    .header-input
      flex :1
      height 0.64 rem
      line-height 0.64 rem
      background :#fff
      margin-top: .12 rem
      margin-left: 0.2 rem
      border-radius : .08 rem
      color :#ccc

      .header-input-icon
       margin-left :0.2 rem

    .header-right
      float:right
      text-align :center
      width: 1.6 rem 
      color #fff

      .header-right-icon
       font-size: .24 rem
</style>


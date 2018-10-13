<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <ul class="button-wrapper">
                        <li class="button border-right"
                         v-for="hotitem of hot" 
                         :key="hotitem.id"
                         @click="handelclickchange(hotitem.name)"
                         >{{hotitem.name}}</li>
                    </ul>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">字母排序</div>
                <div class="button-list">
                    <ul class="button-wrapper">
                        <li class="Letter" 
                        v-for="(itemUl,key)  of  city"
                        :key="key"
                        @click="clickletter"
                        >{{key}}</li>
                    </ul>
                </div>
            </div>
            <div class="area" v-for="(itemUl,key)  of  city" :key="key" :ref="key">
             <div class="title border-topbottom">{{key}}</div>
                <div class="button-list">
                    <ul class="button-wrapper">
                        <li class="button border-right"
                         v-for="item of itemUl" 
                         :key="item.id"
                         @click="handelclickchange(item.name)"
                         >{{item.name}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState , mapMutations } from 'vuex'
export default {
    name:'domestic',
    props:{
        city:Object,
        hot: Array,
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper);
    },
    methods:{
        clickletter(e){
            const cc=e.target.innerText;
            const element=this.$refs[cc][0];
            this.scroll.scrollToElement(element);
        },
        handelclickchange(data){
            this.changecity(data);
            this.$router.push("/");
        },
        //意思解释：这边利用展开运算符，changecity是mutationjs中定义的方法入口，在上面就不用commit，直接.方法名称传具体的参数即可
        ...mapMutations(['changecity'])
    }
}
</script>

<style lang="stylus" scoped>
    .border-right
     &:after
       border-width 0.05rem
     &:before
       border-width 0.05rem
    .list
     overflow hidden
     position absolute
     left 0
     top 1.4rem
     bottom 0
     right 0
     .area
      background red
      .title
       width 100%
       height 0.7rem
       line-height 0.7rem
       background #F5F5F5
       font-size .24rem
       text-indent .3rem
      .button-list
       width 100%
       height auto
       .button-wrapper
        overflow hidden
        background #fff
        .button
         float left
         width 33.33%
         height .9rem
         line-height .9rem
         font-size .28rem
         text-align center
         color #212121
         border-bottom  .02rem solid #ddd
        .Letter
         width 16.66%
         float left
         height .9rem
         line-height .9rem
         text-align center
         

</style>

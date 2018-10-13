<template>
    <div>
        <div class="choice">
            <!-- <ul class="choice-ul" v-show="search">
                <li :class="[{'active':active},isshow]" @click="clickchange">境内</li>
                <li :class="[{'active':!active},isshow]" @click="clickchange">境外·港澳台</li>
            </ul> -->
            <input type="text" class="search" placeholder="请输入城市名或拼音" v-show="!search" v-model="inputText">
            <div ref="search" v-show="inputText" class="searchContext">
                <ul class="search-ul">
                    <li class="search-item border-bottom"
                    v-for="item in result"
                    :key="item.id"
                    @click="handelclickchange(item.name)"
                    >
                    {{item.name}}
                    </li>
                    <li class="search-item border-bottom" v-show="!result.length">没有找到匹配数据</li>
                </ul>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState , mapMutations } from 'vuex'
export default {
    name:'headercity',
    props:{
        search : Boolean,
        cities: Object
    },
    data(){
        return{
            active:true,
            isshow:"choice-item",
            //双向数据绑定输入框中的内容
            inputText:'',
            //保存结果的数组
            result:[],
            //利用节流
            timer:null,
        }
    },
    //监听输入框的变化
    watch:{
        //监听输入框的变化
        inputText(){
            if(this.timer){
                clearTimeout(this.timer)    
            }
            //如果输入框中没有内容
            if(!this.inputText){
                this.result=[]
                return 
            }
            this.timer=setTimeout(() => {
                //定义一个数组
                 const list=[]
                //获取json中的数据
                for(let i in this.cities){
                    this.cities[i].forEach(e => {
                        //通过比对来比较输入框中输入的数据
                        if(e.name.indexOf(this.inputText) >-1 || e.spell.indexOf(this.inputText) >-1){
                            list.push(e);
                        }
                    });
                }
            //把list给本地的循环列
            this.result=list
            },100);
        }
    },
    methods:{
        clickchange(){
            this.active=!this.active
        },
        handelclickchange(data){
            //这边的写法是vuex高级写法
            this.changecity(data);
            this.$router.push("/")
        },
        //意思解释：这边利用展开运算符，changecity是mutationjs中定义的方法入口，在上面就不用commit，直接.方法名称传具体的参数即可
        ...mapMutations(['changecity'])
    },
    mounted () {
        //让词条区域滚动
        this.scroll=new Bscroll(this.$refs.search);
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
      .choice
       background $bgColor
       width 100%
       height 0.6rem
       .choice-ul
        margin 0 auto
        width 5rem
        height 0.4rem
        border 1px solid #fff
        border-radius 0.03rem
        overflow hidden
       .search-ul
        .search-item
         height 0.5rem
         line-height 0.5rem
         text-indent 0.2rem
       .search
        width 95%
        border-radius 0.05rem
        text-align center
        margin 0.1rem 0.2rem
       .searchContext
        z-index 1
        overflow hidden
        background #fff
        position absolute
        left 0
        top 1.4rem
        right 0
        bottom 0
        .choice-item
         float left
         width 50%
         line-height .4rem
         text-align center
         color #fff
        .active
         background #fff
         color #00bcd4
</style>

<template>
<div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
          <div class="icon" v-for='item of page' :key='item.id'>
            <div class="icon-img">
                <img :src="item.iconUrl" class="icon-ig-context">  
            </div>
            <p class="icon-img-text">{{item.context}}</p>
          </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
    name:'Homeicon',
    data(){
        return{
            List:[{
                id:'0001',
                iconUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                context:'景点门票'
            },{
                id:'0002',
                iconUrl:'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
                context:'文化古迹'
            },{
                id:'0003',
                iconUrl:'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
                context:'我的演出'
            },{
                id:'0004',
                iconUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                context:'一日游'
            },{
                id:'0005',
                iconUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                context:'西安必游'
            },{
                id:'0006',
                iconUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                context:'动植物园'
            },{
                id:'0007',
                iconUrl:'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
                context:'泡温泉'
            },{
                id:'0008',
                iconUrl:'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
                context:'逛博物馆'
            },{
                id:'0009',
                iconUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                context:'亲子游'
            }],
        }
    },
    computed:{
        //计算数组中分页的情况:
        //情况分析：首先定义一个空数组pages，然后循环我们本来的数组，传值是一个值一个下标，现在如果第三个
        //数据进来的话，下标是2，然后2/8向下取整是0，然后page就是0，然后如果数组pages中的第0个不存在，就给这个0下标
        //附一个数组对象，然后并且给这个对象添加对应的值，这样的话，0-7的图片路径经过这个算法之后会在第一个数组中有8个数据
        //而最后一个或者后面的数据都会经过判断并且附数组，添加对象，巧妙的把一个对象拆成两个对象，然后这两个对象又封装在一个数组里
        pages (){
            const pages=[];
            this.List.forEach((item,index) => {
                const page=Math.floor(index/8);
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages;
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

    .icons
     width 100%
     overflow hidden
     height 0
     padding-bottom 50%
     margin-top .2rem
     .icon
       position relative
       overflow hidden
       float left
       width 25%
       height 0
       padding-bottom 25%
       .icon-img
        position: absolute
        top 0
        left 0
        right 0
        bottom: .44rem
        box-sizing border-box
        padding .1rem
        .icon-ig-context
         display block
         margin 0 auto
         height 100%
       .icon-img-text
        position: absolute
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        text-align center
        color $icontextColor
        ellipsis()
</style>

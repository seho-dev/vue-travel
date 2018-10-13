<template>
        <div>
            <div class="rem-title border-top">
                <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">
                &nbsp;&nbsp;本周热门榜单
                </div>
            <!-- 列表展示 -->
            <ul class="item-ul">
                <li class="item-li" v-for="item of itemList" :key="item.id">
                    <!-- 图片容器 -->   
                        <img class="item-img-item" :src="item.url" style="width:100px;height:100px">
                    <div class="item-info">
                        <p class="item-title">{{item.title}}</p>
                        <p class="item-desc">{{item.desc}}</p>
                    </div>
                </li>
            </ul>
 </div>
</template>
<script>
export default {
        name:'recommend',
        data(){
            return{
                itemList:[{
                    id:'0001',
                    url:'http://img1.qunarzz.com/sight/p0/1411/1a/5582f9f24bc50b475a8cbda4c5ac8d24.water.jpg_150x150_7e9090b5.jpg',
                    title:'秦始皇陵博物院',
                    desc:'￥255'
                },{
                    id:'0002',
                    url:'http://img1.qunarzz.com/sight/p0/1505/18/18ffcca94b1b7ca2.water.jpg_150x150_465a2539.jpg',
                    title:'长恨歌',
                    desc:'￥255'
                },{
                    id:'0003',
                    url:'http://img1.qunarzz.com/sight/p0/1411/b8/f5fd5955bdecc923ce6d40ce453160eb.water.jpg_150x150_5a0d2c02.jpg',
                    title:'陕西历史博物馆',
                    desc:'￥255'
                },{
                    id:'0004',
                    url:'http://img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_150x150_760c98c0.jpg',
                    title:'华清宫',
                    desc:'￥255'
                },{
                    id:'0005',
                    url:'http://img1.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_150x150_048c0bd8.jpg',
                    title:'大唐芙蓉园',
                    desc:'￥255'
                }]
            }
        },
}
</script>

<style lang="stylus" scoped>
   .rem-title
    line-height .8rem
    text-indent: .4rem
    margin-top .3rem
    .title-img
     width 0.4rem
     height 0.4rem
   .item-ul
     margin-left 0.5rem
     margin-top 0.2rem
     width auto
     white-space nowrap
     height 150px
     overflow-x  auto
     overflow-y hidden
     .item-li
      margin-right 0.2rem
      display: inline-block
     
      .item-info
       .item-title
        margin-top: .12rem;
        color: #212121;
        font-size: .24rem;
        line-height: .32rem;
        text-align: center;
       .item-desc
        color #ff8300
        text-align center
        margin-top 0.12rem
       
</style>

<template>
    <div>
        <div class="like-title border-top">
            <img class="like-title-icon" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
            &nbsp;&nbsp;猜你喜欢
        </div>
        <!-- 展览列表 -->
        <ul class="like-ul">
            <router-link class="like-item" v-for="item of list" :key="item.id" tag="li" :to="'/detail/'+item.id">
                <img :src="item.url" class="list-item-img">
                <div class="list-item-title">{{item.title}}</div>
                <p class="list-item-star iconfont" v-html="item.star"></p>
                <span class="list-item-comment">{{item.comment}}</span>
                <div class="list-item-price">{{item.price}}</div>
                <span class="list-item-address">{{item.address}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:'like',
    data(){
        return{
            list:[{
                id:'0001',
                url:'http://img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_200x200_46b16057.jpg',
                title:'华清宫',
                star:'&#xe64a;&#xe64a;&#xe64a;&#xe64a;&#xe64a;',
                comment:'20034评论',
                price:'￥66',
                address:'临潼区'
            },{
                id:'0002',
                url:'http://img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_200x200_46b16057.jpg',
                title:'华清宫',
                star:'&#xe64a;&#xe64a;&#xe64a;&#xe64a;&#xe64a;',
                comment:'20034评论',
                price:'￥66',
                address:'临潼区'
            },{
                id:'0003',
                url:'http://img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_200x200_46b16057.jpg',
                title:'华清宫',
                star:'&#xe64a;&#xe64a;&#xe64a;&#xe64a;&#xe64a;',
                comment:'20034评论',
                price:'￥66',
                address:'临潼区'
            },{
                id:'0004',
                url:'http://img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_200x200_46b16057.jpg',
                title:'华清宫',
                star:'&#xe64a;&#xe64a;&#xe64a;&#xe64a;&#xe64a;',
                comment:'20034评论',
                price:'￥66',
                address:'临潼区'
            },{
                id:'0005',
                url:'http://img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_200x200_46b16057.jpg',
                title:'华清宫',
                star:'&#xe64a;&#xe64a;&#xe64a;&#xe64a;&#xe64a;',
                comment:'20034评论',
                price:'￥66',
                address:'临潼区'
            },{
                id:'0006',
                url:'http://img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_200x200_46b16057.jpg',
                title:'华清宫',
                star:'&#xe64a;&#xe64a;&#xe64a;&#xe64a;&#xe64a;',
                comment:'20034评论',
                price:'￥66',
                address:'临潼区'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
        .like-title
         line-height .8rem
         text-indent: .4rem
         margin-top .3rem
         .like-title-icon
          width 0.4rem
          height 0.4rem
        .like-ul
         height 500px
         .like-item
          margin-top .2rem
          position relative
          .list-item-img
           width 2rem
           height 2rem
           margin-left .5rem
          .list-item-title
           margin-top: .26rem;
           height: .44rem;
           color: #212121;
           font-size: .32rem;
           line-height: .44rem;
           //定位位置
           position absolute
           left 2.8rem
           top:0.1rem
          .list-item-star
           position absolute
           left 2.8rem
           top 0.8rem
           color #ffb436
          .list-item-comment
           color #616161
           position relative
           left 2.1rem
           top 0rem
           font-size .24rem
          .list-item-price
           position relative
           left 2.7rem
           top -0.5rem
           color #ff8300
           font-size .4rem
          .list-item-address
            position relative
            left 6.5rem
            top -0.8rem
            color #616161
            font-size .24rem

           
</style>

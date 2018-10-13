<template>
    <div class="box">
        <div class="listItem border-bottom"
            v-for="(item,index) of list"
            :key="index"
        >
        <p class="listItem-title">{{item.title}}</p>
        <div class="listItem-children" v-if="item.children">
           <DetailList :list="item.children"></DetailList>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"DetailList",
    props:{
        list:Array
    }
}
</script>

<style lang="stylus" scoped>
     .box
      position relative
      height 0
      padding-bottom 3rem
      .listItem
      .mp-ticketype-ticket
        display: block;
        width: .36rem;
        height: .36rem;
        background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
        margin-right: .1rem;
        background-size: .4rem 3rem;
        margin-left .2rem
      .listItem-title
       width 100px
       height 20px
       line-height 20px
       margin-left .1rem
       margin-bottom .1rem
       padding-left .4rem
</style>

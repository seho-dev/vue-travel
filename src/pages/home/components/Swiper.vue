<template>
    <div class="block">
    <el-carousel height="100px">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <img :src="item.imgUrl" class="swiperimgstyle">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
    name:'Swiper',
    data(){
        return{
            imgList:[{
                id:'0001',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1805/f1/e57bc93226317102.jpg_750x200_9ab37bd0.jpg'
            },{
                id:'0002',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1809/86/deb33800de224c02.jpg_750x200_74fb795e.jpg'
            },{
                id:'0003',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1809/f0/b39b64c33a62e002.jpg_750x200_3e961ce7.jpg'
            }],
        }
    }
}
</script>
<style lang="stylus" scoped>
.block
    height :100px;
    position :relative;

  .el-carousel__item:nth-child(2n) 
     background-color: red;
  
  
  .el-carousel__item:nth-child(2n+1) 
     background-color: blue;
  
  .swiperimgstyle
    width :100%;
    height :inherit;
  
</style>

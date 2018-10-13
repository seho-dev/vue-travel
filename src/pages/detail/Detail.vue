<template>
    <div>
        <detail-banner
            :title='this.title'
            :bannerimg="this.bannerimg"
            :bannerimgs="this.bannerimgs"
        ></detail-banner>
        <detail-header></detail-header>
        <div class="context">
            <detail-desc></detail-desc>
            <!-- <detail-list :list="this.list"></detail-list> -->
        </div>
    </div>
</template>

<script>
import DetailBanner from '@/pages/detail/components/banner'
import DetailHeader from '@/pages/detail/components/header'
import DetailDesc from '@/pages/detail/components/desc'
import DetailList from '@/pages/detail/components/list'
//引入axios
import axios from 'axios'

export default {
    name:"Detail",
    components:{
        DetailBanner,
        DetailHeader,
        DetailDesc,
        DetailList
    },
    methods:{
        getDetailData(){
            axios.get('../static/detail.json',{
                params:{
                    id : this.$route.params.id
                }
                 //回调函数
            }).then(this.getDetailDataSuccess);
        },
        getDetailDataSuccess(res){
            res=res.data;
            if(res.ret && res.data){
                const val=res.data;
                this.title=val.sightName;
                this.bannerimg=val.bannerImg;
                this.bannerimgs=val.gallaryImgs;
                this.list=val.categoryList
            }
        }
    },
    data(){
        return{
            list:[],
            title:'',
            bannerimg:'',
            bannerimgs:[]
        }
    },
    mounted(){
        this.getDetailData();
    }
}
</script>

<style>
    .context{
        width: 100%;
        height: 0;
        padding-bottom:30rem; 
        position:relative;
    }

</style>

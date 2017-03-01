<template>
    <div class="moreshow">
        <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="item in listsdata">
                <router-link href="" class="godetails" v-bind="{to:'/particulars/'+name+'/'+item.id}">
                    <MBshow :item="item"></MBshow>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import urlObj from '../../common/js/geturl'
    import MBshow from '../MBshow/MBshow.vue'
    export default {
        data(){
            return{
                listsdata:[],
                name:''
            }
        },
        methods:{
            getmoreshow(){
                let dataid =this.$route.params.id;
                this.$http.jsonp(urlObj.murl+'/v2/subject_collection/'+dataid+'/items').then(res=>{
                    this.listsdata=res.body.subject_collection_items;
                })
                if(dataid.slice(0,1)==='m'){
                    this.name='movies'
                }else if(dataid.slice(0,1)==='b'){
                    this.name='books'
                }else if(dataid.slice(0,8)==='filter_m'){
                    this.name='movies'
                }else if(dataid.slice(0,8)==='filter_b'){
                    this.name='books'
                }

            }
        },
        created(){
            this.getmoreshow()
        },
        components:{
            MBshow
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .moreshow
        width: 100%
        padding :0px 0.1rem
        margin :50px 0px 60px 0px
        .mui-table-view:before,.mui-table-view:after
            background-color:#fff
</style>
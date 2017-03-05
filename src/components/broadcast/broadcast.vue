<template>
    <div class="broadcast">
        <div class="header">
            <div class="header-left">
                <img src="../../common/img/user_normal.jpg" alt="" class="header-img">
            </div>
            <div class="header-right">
                <span class="header-text">登陆发广播</span>
                <span class="iconfont icon-xiangji"></span>
                <span class="iconfont icon-xie"></span>
            </div>
        </div>
        <broadcastlist :broadcastArr="broadcastArr" v-if="gaintf"></broadcastlist>
        <div class="loading" v-if="!gaintf">
            <img src="../../common/img/loading.gif" class="loading-img">
        </div>
        <a href="javascript:void(0)" class="more" v-if="gaintf">显示更多广播</a>

    </div>
</template>

<script type="text/ecmascript-6">
    import broadcastlist from '../broadcastlist/broadcastlist.vue'
    import urlObj from '../../common/js/geturl'
    export default {
        data() {
            return {
                broadcastArr:[],
                gaintf:false,
                page:1
            }
        },
        methods:{
            getbroadcast() {
                this.$http.jsonp(urlObj.murl+'/v2/status/anonymous_timeline?max_id=&ck=&for_mobile='+this.page)
                    .then(res=>{
                        this.broadcastArr =res.body.items;
                        this.gaintf=true
                    })
            },
//            getMore() {
//                this.page++;
//                this.getbroadcast();
//            }
        },
        created() {
            this.getbroadcast()
        },
        components:{
            broadcastlist
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .broadcast
        width: 100%
        padding :0px 10px
        margin :50px 0px 60px 0px
        .header
            display :flex
            padding-bottom :10px
            border-bottom :1px solid #E8E8E8
            .header-left
                flex :0,0,40px
                width: 40px
                height: 40px
                .header-img
                    width: 100%
                    height: 100%
                    border-radius :50%
            .header-right
                flex :1
                margin-left :10px
                line-height :40px
                .header-text
                    font-size:15px
                    color:#aaa
                .icon-xie,.icon-xiangji
                    float :right
                    color:#aaa
                .icon-xie
                    font-size :25px
                    margin-right :10px
                .icon-xiangji
                    font-size :30px
        .loading
            width :100%
            .loading-img
                width: 100%
        .more
            display :block
            padding :10px 0px
            text-align :center
            color :#42bd56

</style>
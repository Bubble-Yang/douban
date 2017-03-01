<template>
    <div class="searchshow" ref="showscroll">
        <div>
            <datalists :listsdata="movlists" :mbname="movname"></datalists>
            <datalists :listsdata="boklists" :mbname="bokname"></datalists>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll'
    import datalists from '../datalists/datalists.vue'
    import urlObj from '../../common/js/geturl'
    export default {
        data() {
            return{
                movlists:{},
                boklists:{},
                movname:'movies',
                bokname:'books'
            }
        },
        methods:{
            getlistsdata() {
                this.$http.jsonp(urlObj.url+'/v2/movie/search?q='+this.$route.query.q).then(res=>{
                    res.body.name ='电影';
                    this.movlists =res.body;
                });
                this.$http.jsonp(urlObj.url+'/v2/book/search?q='+this.$route.query.q).then(res=>{
                    res.body.name ='读书';
                    this.boklists =res.body;
                });
            },
            showBScroll(){
                new BScroll(this.$refs.showscroll,{
                    click:true
                })
            }
        },
        components:{
            datalists
        },
        created() {
            this.getlistsdata()
        },
        updated(){
            this.showBScroll()
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .searchshow
        width: 100%
        padding :0px 10px
        position: absolute
        top: 50px
        bottom: 55px
        overflow :hidden
</style>
<template>
    <div class="particulars" ref="particulars">
        <div class="particulars-v">
            <div class="header">
                <h3 class="title">{{detailsdata.title}}</h3>
                <div class="ptl-comt">
                    <div class="text">
                        <div class="point">
                            <star :size="size" :score="score"></star>
                            <b>{{detailsdata.ratings_count || numRaters}}评价</b>
                        </div>
                        <p class="performer" v-if="name == 'movies'">
                            <span v-for="genres in detailsdata.genres"> {{genres}} / </span>
                            <span v-for="directors in detailsdata.directors"> {{directors.name}}（导演）/ </span>
                            <span v-for="(casts,index) in detailsdata.casts"> {{casts.name}} {{ending(index)}} </span>
                        </p>
                        <p class="performer" v-if="name == 'books'">
                            <span v-for="author in detailsdata.author"> {{author}} / </span>
                            <span v-for="(translator,index) in detailsdata.translator"> {{translator.name ||  translator}}/ </span>
                            <span>{{detailsdata.publisher}} / </span>
                            <span>{{detailsdata.pages}}页 / </span>
                            <span>{{detailsdata.binding}} / </span>
                            <span>{{detailsdata.price}}</span>
                        </p>
                        <a class="more" href="#" v-if="name == 'movies'">用App查看更多影人资料</a>
                    </div>
                    <img :src="image" class="cover">
                </div>
            </div>
            <div class="ptl-view" v-if="name == 'movies'">
                <a href="#" class="left">想看</a>
                <a href="#" class="right">看过</a>
            </div>
            <div class="ptl-view" v-if="name == 'books'">
                <a href="#" class="left">想读</a>
                <a href="#" class="centre">在读</a>
                <a href="#" class="right">读过</a>
            </div>

            <div class="introduce">
                <h3 class="title">{{title}}的信息介绍</h3>
                <p class="text">
                    {{detailsdata.summary}}
                </p>
            </div>
            <comment :title="title" :commentObj="commentObj"></comment>
            <readable :readableArr="readableArr" v-if="readableComt"></readable>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import urlObj from '../../common/js/geturl'
    import star from '../star/star.vue'
    import BScroll from 'better-scroll'
    import comment from '../comment/comment.vue'
    import readable from '../readable/readable.vue'

    export default {
        data() {
            return {
                detailsdata:{},
                image:null,
                size:36,
                score:0,
                name:null,
                numRaters:null,
                title:null,
                commentObj:{},
                readableArr:[],
                readableComt:false
            }
        },
        methods: {
            getdetailsdata() {
                if(this.name==="movies"){
                    this.$http.jsonp(urlObj.url+'/v2/movie/subject/'+this.$route.params.id)
                        .then(res =>{
                            this.detailsdata =res.body;
                            this.image =res.body.images.large;
                            this.score =res.body.rating.average;
                                this.title =res.body.title
                        });
                    this.$http.jsonp(urlObj.murl+'/v2/movie/'+this.$route.params.id+'/interests')
                        .then(res=>{
                            this.commentObj =res.body
                        });
                    this.$http.jsonp(urlObj.murl+'/v2/selection/themes/explore?themes=16%2C10%2C19%2C20%2C6%2C15%2C12&for_mobile=0').then(res=>{
                        this.readableArr =res.body.items;
                        this.readableComt=true
                    });

                }else if(this.name==="books"){
                    this.$http.jsonp(urlObj.url+'/v2/book/'+this.$route.params.id)
                        .then(res =>{
                            this.detailsdata =res.body;
                            this.numRaters =res.body.rating.numRaters;
                            this.image =res.body.images.large;
                            this.score =res.body.rating.average;
                            this.title =res.body.title
                        })
                    this.$http.jsonp(urlObj.murl+'/v2/book/'+this.$route.params.id+'/interests')
                        .then(res=>{
                            this.commentObj =res.body
                        })
                    this.$http.jsonp(urlObj.murl+'/v2/selection/themes/explore?themes=16%2C10%2C19%2C20%2C6%2C15%2C12&for_mobile=1').then(res=>{
                        this.readableArr =res.body.items;
                        this.readableComt=true
                    });
                }

            },
            ending(index) {
                return index===(this.detailsdata.casts.length-1)?'':'/'
            },
            particulars(){
                new BScroll(this.$refs.particulars,{
                    click:true
                })
            }
        },
        created() {
            this.name = this.$route.params.name;
            this.getdetailsdata()
        },
        components:{
            star,
            comment,
            readable
        },
        updated(){
            this.particulars()
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .particulars
        width: 100%
        padding :0px 10px
        position: absolute
        top: 40px
        bottom: 55px
        overflow :hidden
        .header
            margin :10px 0px 30px 0px
            .title
                margin-bottom :10px
            .ptl-comt
                display :flex
                .cover
                    width :100px
                    height: 140px
                    flex :0,0,100px
                .text
                    flex :1
                    padding-right :20px
                    .point
                        display :flex
                        flex-wrap :wrap
                        margin-bottom :10px
                        b
                            margin-left :10px
                            font-size :15px
                            font-weight :300
                            color :#aaa
                    .performer
                        margin-bottom :10px
                    .more
                        font-size :14px
                        color :#42bd56
        .ptl-view
            display :flex
            flex-wrap :wrap
            margin-bottom :30px
            .left,.centre,.right
                flex :1
                display :block
                height: 30px
                border-radius:3px
                border :1px solid #ffb712
                color: #ffb712
                line-height: 30px
                font-size :15px
                text-align :center
            .centre
                margin-right :10px
            .left
                margin-right :10px
        .introduce
            margin-bottom :20px
            .title
                margin-bottom :10px
                font-size :15px
                color :#aaa
                font-weight :300
</style>
<template>
    <div class="pics">
        <div class="title">
            <span v-text="title"></span>
            <router-link v-bind="{to:'/'+name+'/moreshow/'+dataid}">更多</router-link>
        </div>
        <div v-if="paper == 'promBook'" class="promBook">
            <a :href="header.url" class="promBookBox">
                <img :src="headerImg" alt="" class="promImg">
                <div class="content">
                    <div class="title">
                        <span class="name">{{header.title}}</span>
                        <span class="price">¥ {{header.price}}</span>
                    </div>
                    <p class="text">{{header.info}}</p>
                </div>
            </a>
        </div>
        <div class="pics-v" ref="picv">
            <ul class="pics-list" ref="piclist">
                <li class="picLi" v-for="item in moviebooklist">
                    <router-link href="" class="godetails" v-bind="{to:'/particulars/'+name+'/'+item.id}">
                        <MBshow :item="item"></MBshow>
                    </router-link>
                </li>
            </ul>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll'
    import urlObj from '../../common/js/geturl'
    import MBshow from '../MBshow/MBshow.vue'
    export default {
        props:{
            getdata:{
                type:String
            },
            name:{
                type:String
            },
            paper:{
                type:String
            }
        },
        data() {
            return {
                title:'',
                moviebooklist: [],
                size:24,
                dataid:'',
                header:{
                    title:null,
                    price:null,
                    info:null,
                    url:null
                },
                headerImg:null,
            }
        },
        methods: {
            getmovieanbook(){
                this.$http.jsonp(urlObj.murl+this.getdata)
                    .then(res=>{
                        if(this.paper == 'promBook'){
                            this.title =res.body.subject_collection.name;
                            this.moviebooklist =res.body.subject_collection_items;
                            this.dataid=res.body.subject_collection.id;
                            this.header =res.body.header;
                            this.headerImg =res.body.header.cover.url
                        }else {
                            this.title =res.body.subject_collection.name;
                            this.moviebooklist =res.body.subject_collection_items;
                            this.dataid=res.body.subject_collection.id;
                        }
                    })
            },
            initPics() {
                let picWidth = 100;
                let margin = 6;
                let width = (picWidth + margin) * this.moviebooklist.length - margin;
                this.$refs.piclist.style.width = width+'px';
                new BScroll(this.$refs.picv, {
                    scrollX: true,
                    eventPassthrough: 'vertical'
                });
            }
        },
        created() {
              this.getmovieanbook();
        },
        beforeUpdate(){
            this.initPics()
        },
        components:{
            MBshow
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .pics
        width: 100%
        margin-bottom: 10px
        .title
            margin-bottom: 10px
            a
                float: right
                margin-right: 10px
                color: #42bd56
        .pics-v
            width: 100%
            overflow: hidden
            white-space: nowrap
            .pics-list
                font-size: 0
                .picLi
                    display: inline-block
                    margin-right: 6px
                    width: 100px
                    .godetails
                        display :block
        .promBook
            .promBookBox
                display :flex
                flex-wrap :wrap
                margin :15px 10px
                .promImg
                    width: 100px
                    height: 140px
                    flex:0,0,100px
                    margin-right :20px
                .content
                    flex :1
                    .title
                        overflow :hidden
                        border-bottom :10px
                        .name
                            float :left
                            color: #494949
                            font-size :19px
                        .price
                            float :right
                            margin-right :10px
                            color :#E76648
                    .text
                        color :#9B9B9B
</style>
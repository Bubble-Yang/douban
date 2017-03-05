<template>
    <div class="comment">
        <div class="header">
            {{title}}的短评({{total}})
        </div>
        <div class="content" v-for="item in commentList">
            <div class="content-top">
                <img :src="item.user.avatar" alt="" class="portrait">
                <div class="portrait-right">
                    <div  class="namebox">
                        <p class="name">{{item.user.name}}</p>
                        <star :size="size" :score="isvalue(item.rating)" :judge="judge"></star>
                    </div>
                    <p class="time">{{item.create_time}}</p>
                </div>
            </div>
            <div class="content-cen">
                {{item.comment}}
            </div>
            <div class="content-btm">
                <span class="iconfont icon-down"></span>
                <span class="vote">{{item.vote_count}}</span>
                <span class="iconfont icon-dots"></span>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import star from '../star/star.vue'
    export default {
        props:{
            title:{
                type:String
            },
            commentObj:{
                type:Object
            },
        },
        computed:{
            total() {
                if(this.title){
                    return this.commentObj.total
                }
            },
            commentList() {
                if(this.commentObj){
                    return this.commentObj.interests
                }
            }
        },
        data() {
            return {
                size:24,
                judge:false
            }
        },
        methods:{
            isvalue(value) {
                return value?(value.value)*2:0
            },
        },
        components:{
            star
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .comment
        margin-bottom :20px
        .header
            margin-bottom :10px
            font-size :15px
            color :#aaa
        .content
            margin-bottom :10px
            .content-top
                display :flex
                margin-bottom :5px
                .portrait
                    width: 36px
                    height: 36px
                    margin-right :10px
                    border-radius :50%
                .portrait-right
                    flex :1
                    .namebox
                        font-size :15px
                        font-weight :700
                        display :flex
                        flex-wrap :wrap
                        .name
                            margin-right :5px
                    .time
                        font-size :12px
                        color :#aaa
            .content-cen
                padding-left :46px
                font-size :15px
                color: #494949
                margin-bottom :5px
            .content-btm
                padding-left :46px
                color :#ccc
                .vote
                    font-size :14px
                .icon-dots
                    float :right
                    margin-right :20px

</style>
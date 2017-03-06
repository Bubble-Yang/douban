<template>
    <div class="broadcast-box">
        <div class="broadcastlist" v-for="item of broadcastArr">
            <div class="broadcastlist-left">
                <img :src="'http://shing.imwork.net/proxyImg?url='+item.status.author.avatar" alt="" class="broadcastlist-left-img">
            </div>
            <div class="broadcastlist-right">
                <p class="name">{{item.status.author.name}}<span class="write">{{item.status.activity}}</span></p>
                <p class="time">{{item.status.create_time}}</p>
                <div class="comt">
                    <div class="comt-broadcast" v-if="item.status.card">
                        <p class="title">{{item.status.card.title}}</p>
                        <div class="comt-btm">
                            <p class="text">{{item.status.card.subtitle}}</p>
                            <div v-if="item.status.card.image.large" class="comt-btm-box">
                                <!--<img :src="'http://shing.imwork.net/proxyImg?url='+item.status.card.image.large.url" alt="" class="comt-btm-img" >-->
                                <img :src="item.status.card.image.large.url" alt="" class="comt-btm-img" >
                            </div>
                        </div>
                    </div>
                    <div class="comt-activity" v-if="item.status.card==null">
                        <p class="text">{{item.status.text}}</p>
                        <!--<img :src="'http://shing.imwork.net/proxyImg?url='+item.status.images[0].large.url" alt="" class="activity-img">-->
                        <img :src="item.status.images[0].large.url" alt="" class="activity-img">
                    </div>
                </div>
                <div class="info">
                    <span class="iconfont icon-down"><span class="num">{{item.status.like_count}}</span></span>
                    <span class="iconfont icon-pinglun"><span class="num">{{item.status.comments_count}}</span></span>
                    <span class="iconfont icon-xunhuan"><span class="num">{{item.status.resharers_count}}</span></span>
                    <span class="iconfont icon-dots"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            broadcastArr: {
                type: Array
            }
        },
        data() {
            return {
                broadcastList: []
            }
        },
        methods: {},
        created() {

        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .broadcastlist
        margin-top: 20px
        .broadcastlist-left
            float: left
            width: 40px
            .broadcastlist-left-img
                width: 100%
                height: 100%
                border-radius: 50%
        .broadcastlist-right
            overflow: hidden
            margin-left: 50px
            padding-bottom: 10px
            border-bottom: 1px solid #E8E8E8
            .name
                font-size: 17px
                color: #494949
                font-weight: 700
                .write
                    margin-left: 5px
                    font-weight: 300
                    color: #aaa
            .time
                color: #aaa
                margin-bottom: 5px
            .comt
                padding: 15px
                border: 1px solid #d8d8d8
                border-radius: 3px
                .comt-activity
                    .text
                        margin-bottom :10px
                    .activity-img
                        width: 100%
                .comt-broadcast
                    .title
                        font-size: 17
                        overflow: hidden
                        text-overflow: ellipsis
                    .comt-btm
                        display: flex
                        .comt-btm-box
                            flex: 0, 0, 75px
                            width: 75px
                            height: 48px
                            .comt-btm-img
                                width: 100%
                                height: 100%
                    .text
                        flex: 1
                        color: #aaa
                        overflow: hidden
                        text-overflow: ellipsis
                        -webkit-line-clamp: 3
                        -webkit-box-orient: vertical
            .info
                margin-top: 10px
                .icon-down, .icon-pinglun, .icon-xunhuan, .icon-dots
                    color: #ccc
                    font-size: 19px
                    .num
                        font-size: 15px
                        margin-left: 5px
                .icon-down, .icon-pinglun, .icon-xunhuan
                    float: left
                    margin-right: 5px
                .icon-dots
                    float: right

</style>
<template>
    <div class="readable">
        <h2 class="header">
            值得一读
        </h2>
        <div class="content" v-for="item in readableArr">
            <a href="" class="content-box">
                <div class="content-left">
                    <h4 class="title">{{item.title}}</h4>
                    <p class="text">{{item.target.desc}}</p>
                </div>
                <img :src="item.target.cover_url" alt="" class="content-right">
            </a>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props:{
            readableArr:{
                type:Array
            }
        },
        data() {
            return{

            }
        },
        created(){

        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .readable
        .header
            margin :10px 0
            font-size :15px
            font-weight :300
            color: #aaa
        .content
            border-bottom:1px solid #eee
            .content-box
                overflow :hidden
                display :flex
                padding :10px 0px
                .content-right
                    margin-left :10px
                    width: 96px
                    height: 96px
                    flex :0,0,96px
                .content-left
                    flex :1
                    .title
                        font-size :17px
                        margin-bottom :2px
                        color :#494949
                        font-weight:700
                    .text
                        display:-webkit-box
                        overflow:hidden
                        -webkit-box-orient:vertical
                        -webkit-line-clamp:3
                        font-size:12px
                        color:#aaa
                        line-height:1.5
</style>
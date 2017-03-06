<template>
    <div class="MDshow">
        <!--<img :src="'http://shing.imwork.net/proxyImg?url='+items.cover.url" alt="" width="100" height="140">-->
        <img :src="items.cover.url" alt="" width="100" height="140">
        <p class="text">{{items.title}}</p>
        <star :size="size" :score="isvalue(items.rating)" v-if="items.id"></star>
        <p v-if="items.id == ''" class="price">¥{{items.price}}</p>
    </div>
</template>

<script type="text/ecmascript-6">
    import star from '../star/star.vue'
    export default {
        props:{
            item:{
                type:Object
            }
        },
        data() {
            return{
                size:24,
                score:0
            }
        },
        computed: {
            items() {
                if(this.item) {
                    return this.item
                }
            }
        },
        methods:{
            isvalue(value) {
                return value?value.value:0
            },
        },
        components:{
            star
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .MDshow
        display :block
        text-align :center
        color :#aaa
        .text
            margin-top :-5px
            font-size: 13px
            overflow :hidden
            text-overflow:ellipsis
            white-space: nowrap
        .price
            font-size :12px
            color :#aaa
</style>
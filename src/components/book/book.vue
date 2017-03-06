<template>
    <div class="book">
        <div class="book-v" v-show="loading">
            <movbokscroll :getdata="book_fiction" :name="name"></movbokscroll>
            <movbokscroll :getdata="book_nonfiction" :name="name"></movbokscroll>
            <!--<movbokscroll :getdata="market_product_book" :paper="paper"></movbokscroll>-->
            <textscroll :text="dataobj.booktext" :title="title"></textscroll>
            <classify :classifyData="dataobj.bookclassify"></classify>
        </div>
        <loading v-if="!loading"></loading>
    </div>
</template>

<script type="text/ecmascript-6">
    import movbokscroll from '../movbokscroll/movbokscroll.vue'
    import textscroll from '../textscroll/textscroll.vue'
    import classify from '../classify/classify.vue'
    import loading from '../loading/loading.vue'
    export default {
        props:{
            dataobj:{
                type:Object
            }
        },
        data() {
            return {
                name:'books',
                title:'发现好图书',
                book_fiction:'/v2/subject_collection/book_fiction/items',
                book_nonfiction:'/v2/subject_collection/book_nonfiction/items',
                market_product_book:'/v2/subject_collection/market_product_book/items',
                paper:'promBook',
                loading :false
            }
        },
        methods:{
            toLoad() {
                let vm =this;
                setTimeout(() => {
                    vm.loading =true
                },1000)
            }
        },
        created() {
            this.toLoad();
        },
        components:{
            movbokscroll,
            textscroll,
            classify,
            loading
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .book
        width: 100%
        padding :0px 10px
        margin :50px 0px 60px 0px
</style>
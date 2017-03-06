<template>
    <div class="moive">
        <div class="moive-v" v-show="loading">
            <movbokscroll :getdata="movie_showing" :name="name"></movbokscroll>
            <movbokscroll :getdata="movie_free_stream" :name="name"></movbokscroll>
            <movbokscroll :getdata="movie_latest" :name="name"></movbokscroll>
            <textscroll :text="dataobj.movietext" :title="title"></textscroll>
            <classify :classifyData="dataobj.movieclassify"></classify>
        </div>
        <loading v-if="!loading"></loading>
    </div>
</template>

<script type="text/ecmascript-6">
    //引入各个组件
    import movbokscroll from '../movbokscroll/movbokscroll.vue'
    import textscroll from '../textscroll/textscroll.vue'
    import classify from '../classify/classify.vue'
    import loading from '../loading/loading.vue'
    export default {
        //接受从app传过来的数据
        props:{
            dataobj:{
                type:Object
            }
        },
        data() {
            return {
                name:'movies',
                title:'发现好电影',
                movie_showing:'/v2/subject_collection/movie_showing/items',
                movie_free_stream:'/v2/subject_collection/movie_free_stream/items',
                movie_latest:'/v2/subject_collection/movie_latest/items',
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
        //注册组件
        components:{
            movbokscroll,
            textscroll,
            classify,
            loading
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .moive
        width: 100%
        padding :0px 10px
        margin :50px 0px 60px 0px
</style>
</style>
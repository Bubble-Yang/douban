<template>
    <div class="box">
        <div class="app-header">{{name}}
            <span class="iconfont icon-sousuo" @click="tosearch"></span>
            <span class="return" v-show="returnShow" @click="goup">返回</span>
        </div>

        <!--是否需要缓存写法-->
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" :dataobj="dataobj"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" :dataobj="dataobj"></router-view>

        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/movie">
                <span class="mui-icon iconfont icon-dianying"></span>
                <span class="mui-tab-label">电影</span>
            </router-link>
            <router-link class="mui-tab-item" to="/book">
                <span class="mui-icon iconfont icon-icon-copy"></span>
                <span class="mui-tab-label">图书</span>
            </router-link>
            <router-link class="mui-tab-item" to="/music">
                <span class="mui-icon iconfont icon-iconfontbiaozhunmoban01"></span>
                <span class="mui-tab-label">音乐</span>
            </router-link>
            <router-link class="mui-tab-item" to="/broadcast">
                <span class="mui-icon iconfont icon-comiisguangbo"></span>
                <span class="mui-tab-label">广播</span>
            </router-link>
        </nav>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                name: '豆瓣电影',//定义第一次进入页面时候的标题名字
                dataobj:{},//定义全局路由的数据对象
                returnShow:false//定义第一次进入页面的时候把返回按钮隐藏
            }
        },
        //监控路由变化，把按照对应的路由给对的页面标题赋值名字，并且控制隐藏和显示返回按钮
        watch:{
            '$route':function (newVal,oldVal) {
                switch (newVal.fullPath){
                    case '/movie': //当路由为/movie的时候
                        this.name ='豆瓣电影';
                        this.returnShow =false;
                        break;
                    case '/book': //当路由为/book的时候
                        this.name ="豆瓣图书";
                        this.returnShow =false;
                        break;
                    case '/music': //当路由为/broadcast的时候
                        this.name ="豆瓣音乐";
                        this.returnShow =false;
                        break;
                    case '/broadcast': //当路由为/broadcast的时候
                        this.name ="豆瓣广播";
                        this.returnShow =false;
                        break;
                    default: //当路由为其他的时候
                        this.returnShow =true;
                        break;
                }
            }
        },
        methods: {
            //定义click方法，当点击搜索按钮的时候切换到搜索页面
            tosearch() {
                this.$router.push({ path: '/searchpage' });
            },
            //请求data.json中的本地数据，传递给全局路由
            getmenuData() {
                this.$http.get('../data.json')
                    .then(res=>{
                        this.menudata =res.body.menu
                        this.dataobj =res.body
                    })
            },
            //定义返回上一路由地址的方法
            goup() {
                this.$router.go(-1);
            }
        },
        created() {
            this.getmenuData()
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .box
        width: 100%
        .app-header
            position :fixed
            top :0
            left :0
            width: 100%
            height: 40px
            border-bottom:1px solid #eee
            text-align :center
            line-height: 40px
            background-color: #fff
            z-index :30
            color :#00b600
            font-weight :700
            font-size :20px
            .icon-sousuo
                position :fixed
                top :0
                right :18px
                width: 40px
                height: 40px
                font-size :20px
            .return
                position :fixed
                top:0
                left 18px
                width: 40px
                height: 40px
                font-size :15px
        .mui-bar-tab
            .mui-tab-item.mui-active
                color: #00b600
                background-color: #fff
</style>
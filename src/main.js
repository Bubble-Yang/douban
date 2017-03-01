/**
 * Created by Pamo on 2017/2/22.
 */
import Vue from 'vue'
import App from './App.vue'
//导入vue-router
import VueRouter from 'vue-router'
//导入ajax请求vue-resource
import VueResource from 'vue-resource'
import store from './store'
Vue.use(VueRouter)
Vue.use(VueResource)
//导入各个组件
import movie from './components/movie/movie.vue'
import book from  './components/book/book.vue'
import broadcast from './components/broadcast/broadcast.vue'
import searchshow from './components/searchshow/searchshow.vue'
import searchpage from './components/searchpage/searchpage.vue'
import particulars from './components/particulars/particulars.vue'
import moreshow from './components/moreshow/moreshow.vue'


//音乐组件
import cloudMusic from './components/music/cloudMusic.vue'
import cloudDetial from './components/music/detial.vue'
import cloudSong from './components/music/song.vue'



//引入mui的样式
import './common/mui/css/mui.css'
import './common/mui/css/icons-extra.css'
//引入UI组件mint-ui
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui'
Vue.use(Mint)

//创建一个VueResource的实例
const VueRouterObj = new VueRouter({
    //开启路由HTML5 History 模式，使用滚动到顶部
    // mode: 'history',
    //设置底部TAB切换的样式，当点击的时候给点击的对象添加mui-active样式
    linkActiveClass :'mui-active',
    //设置路由给对应的router-link标签中的to设置锚点，并跳转到对应组件
    routes:[
        {path:'/',redirect:'/movie'},
        {path:'/movie',component:movie,meta:{keepAlive:true}},
        {path:'/book',component:book,meta:{keepAlive:true}},
        // {path:'/music',component:music,meta:{keepAlive:true}},
        {path:'/broadcast',component:broadcast,meta:{keepAlive:true}},
        {name:'searchshow',path:'/searchshow',component:searchshow},
        {path:'/searchpage',component:searchpage},
        // {name:'particulars',path:'/particulars/movies/:id',component:particulars},
        {path:'/particulars/:name/:id',component:particulars},
        {path:'/:name/moreshow/:id',component:moreshow},
        //音乐
        {path:'/music',component:cloudMusic,meta:{keepAlive:true}},
        {name:'cloudDetial',path:'/cloudDetial/:name/:cloudID',component:cloudDetial},
        //歌曲列表
        {name:'cloudSong',path:'/cloudSong/:songID/:index',component:cloudSong}

    ],
    // 滚动到页面顶部
    // scrollBehavior(to, from, savedPosition){
    //     return {x: 0, y: 0}
    // }
})
//引入项目的公共样式
import './common/stylus/public.styl'

//使用VueRouterObj
new Vue({
    store,
    el: '#app',
    router: VueRouterObj,
    render: create => create(App)
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
    routes: [
        {
            path: '/',
            component: resolve => require(['~/views/layout/App.vue'], resolve),
            meta: {
                title: '首页',
                keepAlive: false
            },
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    meta: {
                        title: '首页',
                        keepAlive: false
                    },
                    component: resolve => require(['~/views/home/Index.vue'], resolve),
                },
            ]
        },
    ]
})



import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/components/login/Login';
import Home from '@/components/home/Home';
import Users from '@/components/users/Users';
import Products from '@/components/products/Products';
import Tree from '@/components/tree/Tree';
import zTree from '@/components/tree/zTree';
import zTree1 from '@/components/tree/zTree1';
import Detail from '@/components/detail/Details';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
        path: "/",
        redirect: '/login'
    }, {
        path: "/login",
        component: Login,
        name: "login"
    }, {
        path: "/home",
        component: Home,
        name: "home",
        children: [{
            path: "/users",
            component: Users,
            name: "users"
        }, {
            path: "/products",
            component: Products,
            name: "products"
        }, {
            path: "/tree",
            component: Tree,
            name: "tree"
        }, {
            path: "/ztree",
            component: zTree,
            name: "ztree"
        }, {
            path: "/detail",
            component: Detail,
            name: "detail"
        }]
    }]
})

// 设置全局导航守卫
router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
        next();
        return;
    }
    // 获取token值，若不存在token值跳转登录页
    const token = localStorage.getItem('token');
    if (token) {
        next();
    } else {
        next('/login')
    }
})

export default router;
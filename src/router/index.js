import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: '/login',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home.vue'),
    redirect: '/home/customer',
    children: [
      {
        path: "customer",
        name: "customer",
        component: resolve => require(["@/views/customer.vue"], resolve),
      },
      {
        path: "address",
        name: "address",
        component: resolve => require(["@/views/address.vue"], resolve),
      },
      {
        path: "store",
        name: "store",
        component: resolve => require(["@/views/store.vue"], resolve),
      },
      {
        path: "shop",
        name: "shop",
        component: resolve => require(["@/views/shop.vue"], resolve),
      },
      {
        path: "order",
        name: "order",
        component: resolve => require(["@/views/order.vue"], resolve),
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const whiteList = ['/login',];//白名单

router.beforeEach((to, from, next) => {
  let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
  if (userInfo) {
    if (to.path == '/login') {
      next('/home');
    } else {
      next();
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next('/login') // 否则全部重定向到登录页
    }
  }
})

export default router

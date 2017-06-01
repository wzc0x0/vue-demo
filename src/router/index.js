import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path:'/index',
      component: resolve => require(['../Home.vue'],resolve),
      children:[
        {
          path:'/',
          component:resolve => require(['../components/pages/TotalAccount.vue'],resolve),
        },
        {
          path:'/daichang',
          component:resolve => require(['../components/pages/DaiChangMoney.vue'],resolve),
        },
        {
          path:'/fenrun',
          component:resolve => require(['../components/pages/FenRunAccount.vue'],resolve),
        },
        {
          path:'/income',
          component:resolve => require(['../components/pages/IncomeAccount.vue'],resolve),
        },
        {
          path:'/marketing',
          component:resolve => require(['../components/pages/MarketingMoney.vue'],resolve),
        },
        {
          path:'/paixi',
          component:resolve => require(['../components/pages/PaiXiAccount.vue'],resolve),
        },
        {
          path:'/daichongzhi',
          component:resolve => require(['../components/pages/DaiChongZhi.vue'],resolve),
        },
        {
          path:'/partner',
          component:resolve => require(['../components/pages/PartnerAccount.vue'],resolve)
        }
      ]
    },
    {
      path:'/login',
      component: resolve => require(['../components/Login.vue'],resolve)
    }
  ]
})

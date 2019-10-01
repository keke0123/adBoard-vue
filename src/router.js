import Vue from 'vue'
import Router from 'vue-router'
import Board from './layouts/board.vue'
import MainPage from "./views/MainPage";
import DetailPage from "./views/DetailPage";
// test
// import CategoryFilter from './components/categoryFilter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'board',
      component: Board,
      children: [
        {
          path: '/',
          redirect: '/main',
        },
        {
          path: '/main',
          name: 'main',
          component: MainPage
        },
        {
          path: '/detail/:no',
          name: 'detail',
          component: DetailPage
        }
      ]
    },
    // {
    //   path: '/test',
    //   name: 'test',
    //   component: CategoryFilter
    // }
  ]
})

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding/DataBinding.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting 라우트 레벨에서 코드를 분할하는 방법입니다.
    // this generates a separate chunk (about.[hash].js) for this route 이 라우트에 대한 chunk 파일이 분리되어 생성됩니다.
    // which is lazy-loaded when the route is visited. 이 라우트에 방문했을 때 lazy-load(지연로드) 됩니다.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/component/nested',
    name: 'NestedComponent',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/component/NestedComponent.vue')
  },
  {
    path: '/component/parent1',
    name: 'ParentComponent1',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/component/ParentComponent1.vue')
  },
  {
    path: '/component/parent2',
    name: 'ParentComponent2',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/component/ParentComponent2.vue')
  },
  {
    path: '/component/parent3',
    name: 'ParentComponent3',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/component/ParentComponent3.vue')
  },
  {
    path: '/component/parent4',
    name: 'ParentComponent4',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/component/ParentComponent4.vue')
  },
  {
    path: '/component/parent5',
    name: 'ParentComponent5',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/component/ParentComponent5.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

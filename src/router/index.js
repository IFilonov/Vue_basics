import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import config from "@/router/config.js"
import store from '../store'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    beforeEnter: (to, from, next) => {
      if( store.getters.isAuthorized){
        next()
      }
      else {
        next( { name: 'noauthorized'} )
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/tasks',
    name: 'Tasks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "tasks" */ '../views/Tasks.vue')
  },
  {
    path: '/newTask',
    name: 'newTask',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "tasks" */ '../views/NewTask.vue')
  } ,
  {
    path: '/doc/:docid',
    name: 'doc',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "docs" */ '../views/Doc.vue'),
    beforeEnter: (to, from, next) => {
      var exists = config.entries.find(
        entry => entry.id === to.params.docid
      )
      if(exists){
        next()
      }
      else{
        next( {name:'404'} )
      }
    },
    children: [
      {
        path: ':typeid',
        name: 'details',
        props: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "details" */ '../views/Details.vue'),
        beforeEnter: (to, from, next) => {
          var currententry = config.entries.find(
            entry => entry.id === to.params.docid
          )
          var exists = currententry.types.find(
            type => type.id === to.params.typeid
          )
          if(exists){
            next()
          }
          else{
            next( {name:'404'} )
          }
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "loginform" */ '../views/LoginForm.vue')
  },
  {
    path: '/NoAuthorized',
    name: 'noauthorized',
    component: () => import(/* webpackChunkName: "noauthorized" */ '../views/NoAuthorized.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "notdoud" */ '../views/NotFound.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

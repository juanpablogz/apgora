import Vue from 'vue'
import VueRouter from 'vue-router'

import TryFirebase from '../pages/TryFirebase.vue'

import Home from './Home'
import Landing from '../pages/Landing.vue'
import Meeting from './Meeting'
import SignIn from '../pages/SignIn.vue'
import SignUp from '../pages/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/',
    name: 'Landing',
    component: Landing,
    meta: { requiresAuth: false }
  },      
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn,
    meta: { requiresAuth: false }
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp,
    meta: { requiresAuth: false }
  },  
  {
    path: '/try-firebase',
    name: 'TryFirebase',
    component: TryFirebase,
    meta: { requiresAuth: false }
  },  
  { 
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/meeting',
    name: 'Meeting',
    component: Meeting,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  var authenticated = window.localStorage.getItem('authenticated')  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authenticated) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router;

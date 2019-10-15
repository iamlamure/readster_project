import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Profile from '@/components/Profile'
import Blog from '@/components/Blog'
import List from '@/components/List'
import AddBook from '@/components/AddBook'
import Read from '@/components/Read'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/addbook',
      name: 'Addbook',
      component: AddBook
    },
    {
      path: '/blogs/read/:blog',
      name: 'Read',
      component: Read
    },
    {
      path:'/sell',
      name: 'Sell',
      component: Sell
    }
  ]
})

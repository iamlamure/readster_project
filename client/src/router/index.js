import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Profile from '@/components/Profile'
import Blog from '@/components/Blog'
import List from '@/components/List'
import Book from '@/components/Book'
import Read from '@/components/Read'
import Product from '@/components/Product'
import Product_detail from '@/components/Product_detail'
import Book_detail from '@/components/Book_detail'
import Cart from '@/components/Cart'
import Shop from '@/components/Shop'
import Write_Blog from '@/components/Write_Blog'

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
      path: '/blogs/read/:blog',
      name: 'Read',
      component: Read
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/book/book_detail/:book',
      name: 'Book_detail',
      component: Book_detail
    },
    {
      path:'/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/product/product_detail/:product',
      name: 'Product_detail',
      component: Product_detail
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/write_blog',
      name: 'Write_Blog',
      component: Write_Blog
    }
  ]
})

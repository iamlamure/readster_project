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
import User_detail from '@/components/User_detail'
import User_blog from '@/components/User_blog'
import Sell from '@/components/Sell'
import Order from '@/components/Order'
import Payment from '@/components/Payment'
import Admin_Login from '@/components/Admin_Login'
import Dashboard from '@/components/Dashboard'


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
    },
    {
      path: '/user/user_detail',
      name: 'User_detail',
      component: User_detail
    },
    {
      path: '/user/user_blog',
      name: 'User_blog',
      component: User_blog
    },
    {
      path: '/sell',
      name: 'Sell',
      component: Sell
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/admin_login',
      name: 'Admin_Login',
      component: Admin_Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})

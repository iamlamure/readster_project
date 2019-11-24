<template>
    <div class="container">
        <h1 class="title is-1">เขียนบทความ</h1>
         <form v-on:submit.prevent="addblog">
                <div class="columns is-mobile is-centered" >
                    <input v-model="blog_title" class="input is-medium title is-5" type="text" name="product_name" placeholder="ชื่อบทความ">
                </div>
                <h1 class="title is-4">รายละเอียดสินค้า</h1>
                <div class="columns is-mobile is-centered" >
                    <textarea v-model="blog_article" class="textarea" placeholder="แบ่งปันประสบการณ์ที่นี่" rows="20"></textarea>
                </div>
                <div class="columns">
                    <div class="column">
                        <label class="title is-4">หนังสือที่รีวิว : </label>
                        <div class="select">
                            <select v-model="book_id" required>
                                <option for="book_id" v-for="(book) in books" v-bind:key="book.bookid" v-bind:title="book.book_name" v-bind:value="book.bookid">{{book.book_name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="column">
                    </div>
                </div>
                <button class="button is-primary is-fullwidth title is-4">เผยแพร่รีวิว</button>   
            </form>
    </div>
</template>
<script>

import axios from 'axios'
import router from '../router'

export default {
    data() {
        const token = localStorage.usertoken
        return {
            blogs:[],
            books:[],
            blogid:'',
            blog_article:'',
            blog_title:'',
            blog_img:'',
            bookid:'',
            book_id:'',
            book_name:'',
            id:'',
            userblogid:'',
            token: token,
            first_name:'',
            blog_date:''
        }
    },
    methods: {

        //Add Blog
         addblog() {
             axios.get('/users/profile',{
                 headers: { 'Authorization': this.token }
             }).then(res => {
                this.id = res.data.id
                axios.post('/blogs/addblog',
                {
                    blog_title: this.blog_title,
                    blog_article: this.blog_article,
                    bookid: this.bookid,
                    blog_img:this.blog_img,
                    book_id: this.book_id,
                    userblogid: this.id,
                }).then((res) => {
                    this.blog_title = ''
                    this.blog_article = ''
                    this.blog_img = ''
                    this.book_id = ''
                    this.userblogid = ''
                    //this.getblog()
                    this.getbooks()
                    //this.getuser()
                    console.log(res)
                    router.push({ name: 'Profile' })

                })
             })
            .catch((err) => {
                    console.log(err)
                })
        },
        // Get All Blog
         getblog () {
            axios.get('/blogs/all').then(
                result => {
                    console.log(result.data)
                    this.blogs = result.data
                },
                error => {
                    console.error(error)
                }
            )
        },

        //Get User
        getuser () {
                axios.get('/users/profile', {
                headers: { 'Authorization': this.token }
            }).then(res => {
                this.id = res.data.id
                this.first_name = res.data.first_name
            }).catch(err => {
                console.log(err)
                router.push({ name: 'Login' })
            })
        },

        //Show Books
        getbooks () {
            axios.get('/books/all').then(
                result => {
                    console.log(result.data)
                    this.books = result.data
                },
                error => {
                    console.error(error)
                }
            )
        },
    },
    mounted() {
        //this.getblog()
        this.getbooks()
        //this.getuser()
    },
}
</script>
<!-- eslint-disable -->
<template>
    <div class="container">
        <h1 class="title columns is-mobile is-centered">บทความ</h1>
        <hr class="style11">
        <br>
        <div class="columns is-multiline" >
            <div class="tile is-ancestor column is-half" v-for="(blog) in blogs" v-bind:key="blog.blogid" v-bind:title="blog.blog_title" >
                <div class="column tile is-mobile is-parent">
                    <div @click="gotodetail(blog.blogid)" class="tile is-child box">
                        <article class="media">
                            <div class="media-left">
                            <figure class="image is-64x64">
                                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                            </figure>
                            </div>
                            <div class="media-content">
                            <div class="content">
                                <strong>{{first_name}} {{last_name}}</strong> <small>@johnsmith</small> <small>{{blog.blog_date}}</small>
                                <br>
                                <h5 class="title is-5">{{blog.blog_title}}</h5>
                            </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
        <table class="table is-fullwidth">
                <thead>
                  <th class="subtitle">ชื่อเรื่อง</th>
                  <th class="subtitle">วันที่</th>
                  <th class="subtitle">ผู้เขียน</th>
                </thead>
                <tbody>
                    <tr v-for="(blog) in blogs" v-bind:key="blog.blogid" v-bind:title="blog.blog_title" >
                        <td><a @click="gotodetail(blog.blogid)">{{blog.blog_title}}</a></td>
                        <td>{{blog.blog_date}}</td>
                        <td>{{blog.userblogid}}</td>
                    </tr>
                </tbody>
        </table>
    </div>
</template>
<!-- eslint-disable -->

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
            last_name:'',
            blog_date:''
        }
    },
    mounted() {
        this.getblog()
        this.getuser()
        this.getbooks()
    },
    methods: {
        // Get All Blog
         getblog () {
            axios.get('/blogs/blogs').then(
                result => {
                    console.log(result.data)
                    this.blogs = result.data
                },
                error => {
                    console.error(error)
                }
            )
        },
        // Delete Blog
        deleteblog(blogid) {
            axios.delete(`/blogs/blogs/${blogid}`
            ).then((res) => {
                this.getblog()
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        },
        
        // Gotoreadblog
        gotodetail(blogid){
            this.$router.push({
                name:'Read',
                params:{blog:blogid}
            }).then((res) => {
                this.getblog()
            }).catch((err) => {
                console.log(err)
            })
        },

        getuser () {
                axios.get('/users/profile', {
                headers: { 'Authorization': this.token }
            }).then(res => {
                this.id = res.data.id
                this.first_name = res.data.first_name
                this.last_name = res.data.last_name
            }).catch(err => {
                console.log(err)
                router.push({ name: 'Login' })
            })
        },

        //Show Books
        getbooks () {
            axios.get('/books/books').then(
                result => {
                    console.log(result.data)
                    this.books = result.data
                },
                error => {
                    console.error(error)
                }
            )
        },
        
    }
}
</script>
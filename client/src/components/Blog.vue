<!-- eslint-disable -->
<template>
    <div class="container">
        <div class="jumbotron mt-5">
            <h1>เพิ่มบทความ</h1>
            <h6>userid : username  <span class="badge badge-secondary">{{id}} : {{first_name}}</span></h6>
            <h1>{{blogs.length}}</h1>
            <hr class="style11">
            <div class="col-sm-auto mx-auto">
                <form class="form-group" v-on:submit.prevent="addblog">
                    <div class="form-group">
                        <input type="text" v-model="blog_title" class="form-control form-control-lg font-weight-bold" name="blog_title" placeholder="หัวข้อบทความที่ต้องการจะบอกเล่า">
                    </div>
                    <div class="form-group">
                        <textarea type="text" v-model="blog_article" class="form-control" id="blog_article" rows="10" placeholder="เริ่มเขียนอะไรบางอย่าง ... "></textarea>
                    </div>
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <label for="blog_img">อัพโหลดรูปภาพประกอบ</label>
                            <input type="file" class="form-control-file" id="blog_img" placeholder="เลือกไฟล์ภาพ">
                        </div>
                        <div class="col-md-4 mb-3">  
                        <label >หนังสือที่รีวิว</label>
                            <select class="form-control" v-model="book_id">
                                <option for="book_id" v-for="(book) in books" v-bind:key="book.bookid" v-bind:title="book.book_name" v-bind:value="book.bookid">
                                    {{book.book_name}}
                                </option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label >รีวิวโดย</label>
                            <select class="form-control"  v-model="userblogid" id="userblogid" required>
                                <option>{{id}}</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-lg btn-success  btn-block font-weight-bold ">Publish Now</button>
                    <hr class="style1">
                </form>
            </div>

            <div class="table-responsive-md">
                <table class="table">
                <thead>
                    <tr class="thead-dark">
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Post By</th>
                        <th scope="col">Management</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(blog) in blogs" v-bind:key="blog.blogid" v-bind:title="blog.blog_title">
                        <td class="font-weight-bold">{{blog.blogid}}</td>
                        <td>
                            <h3 @click="gotodetail(blog.blogid)" >{{blog.blog_title}}</h3> 
                        </td>
                        <td>{{blog.userblogid}}</td>
                        <td>
                            <button type="button" class="btn btn-info">Edit</button>
                            <button  v-on:click="deleteblog(blog.blogid)" type="button" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
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
        
        // Add Blog
        addblog() {
            axios.post('/blogs/addblog',
            {
                blog_title: this.blog_title,
                blog_article: this.blog_article,
                bookid: this.bookid,
                blog_img:this.blog_img,
                book_id:this.book_id,
                userblogid:this.userblogid,
            }
            ).then((res) => {
                    this.blog_title = ''
                    this.blog_article = ''
                    this.blog_img = ''
                    this.book_id = ''
                    this.userblogid = ''
                    this.getblog()
                    this.getbooks()
                    this.getuser()
                    console.log(res)
                }).catch((err) => {
                    console.log(err)
                })
        },
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
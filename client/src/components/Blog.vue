<!-- eslint-disable -->
<template>
    <div class="container">
        <div class="jumbotron mt-5">
            <div class="col-sm-auto mx-auto">
                <button type="button" class="btn btn-warning col-4 mb-2 float-right">เพิ่มบทความ</button>
                <form class="form-group" v-on:submit.prevent="addblog">
                    <div class="form-group">
                        <input type="text" v-model="blog_title" class="form-control form-control-lg font-weight-bold" name="blog_title" placeholder="ระบุหัวเรื่อง">
                    </div>
                    <div class="form-group">
                        <textarea type="text" v-model="blog_article" class="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="เริ่มเขียนอะไรบางอย่าง ... "></textarea>
                    </div>
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <input type="file" class="form-control-file" id="exampleFormControlFile1" placeholder="เลือกไฟล์ภาพ">
                        </div>
                        <div class="col-md-4 mb-3">
                            <input type="text" class="form-control form-control-lg font-weight-bold" name="" placeholder="รูป">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-lg btn-warning  btn-block font-weight-bold ">Publish Now</button>
                </form>
            
            </div>

            <div class="table-responsive-md">
                <table class="table">
                <thead>
                    <tr class="thead-dark">
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Post By</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(blog) in blogs" v-bind:key="blog.blogid" v-bind:title="blog.blog_title">
                        <td class="font-weight-bold">{{blog.blogid}}</td>
                        <td>
                            <h3 @click="gotodetail(blog.blogid)" >{{blog.blog_title}}</h3> 
                        </td>
                        <td>ตะวัน</td>
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
        return {
            blogs:[],
            blogid:'',
            blog_article:'',
            blog_title:'',
            
        }
    },
    mounted() {
        this.getblog()
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
                //blog_img: this.blog_img
                //And Anothe else
            }
            ).then((res) => {
                    this.blog_title = ''
                    this.blog_article = ''
                    //this.blog_img = ''
                    //this.book_id = ''
                    this.getblog()
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
        }
        
    }
}
</script>
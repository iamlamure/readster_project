<!-- eslint-disable -->
<template>
    <div class="container">
        <div class="jumbotron mt-5">
            <div class="form-group">
                <button type="button" class="btn btn-warning col-4 mb-2 float-right">เพิ่มบทความ</button>
            </div>
            <div class="col-sm-auto mx-auto">

                <form class="form-group">
                    <div class="form-group">
                        <input type="text" v-model="blog_title" class="form-control form-control-lg font-weight-bold" name="blog_title" placeholder="ระบุหัวเรื่อง">
                    </div>
                    <div class="form-group">
                        <textarea type="text" v-model="blog_article" class="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="blog_article"></textarea>
                    </div>
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <input type="file" class="form-control-file" id="exampleFormControlFile1" placeholder="เลือกไฟล์ภาพ">
                        </div>
                        <div class="col-md-4 mb-3">
                            <select class="custom-select" name="">
                                <option selected>ชื่อหนังสือ</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <select class="custom-select">
                                <option selected>Rate</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
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
                        <th scope="col">Book</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(blog) in blogs" v-bind:key="blog.blogid" v-bind:title="blog.blog_title">
                        <td class="font-weight-bold">{{blog.blogid}}</td>
                        <td>
                            <a href="#" class="font-weight-bold">{{blog.blog_title}}</a>
                        </td>
                        <td>{{blog.bookid}}</td>
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
            book_id:''
        }
    },
    mounted() {
        this.getblog()
    },
    methods: {
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
        deleteblog(blogid) {
            axios.delete(`/blogs/blogs/${blogid}`
            ).then((res) => {
                this.getblog()
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }
    },
}
</script>
<!-- eslint-disable -->
<template>
    <div class="container">
        <div class="jumbotron mt-5">
            <h1>เพิ่มบทความ</h1>
            <hr class="style11">
            <div class="col-sm-auto mx-auto">
                <form class="form-group" v-on:submit.prevent="addblog">
                    <div class="form-group">
                        <input type="text" v-model="blog_title" class="form-control form-control-lg font-weight-bold" name="blog_title" placeholder="หัวข้อบทความที่ต้องการจะบอกเล่า">
                    </div>
                    <div class="form-group">
                        <textarea type="text" v-model="blog_article" class="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="เริ่มเขียนอะไรบางอย่าง ... "></textarea>
                    </div>
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <label for="review_img">อัพโหลดรูปภาพประกอบ</label>
                            <input type="file" class="form-control-file" id="review_img" placeholder="เลือกไฟล์ภาพ">
                        </div>
                        <div class="col-md-4 mb-3">  
                        <label for="book_name">หนังสือที่รีวิว</label>
                        <select class="form-control" v-model="book_name" id="book_name">
                            <option>โตไปไม่โกง</option>
                            <option>ประชาธิปไตย</option>
                            <option>รับราชการยังไงให้ได้ 4000 ล้าน</option>
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
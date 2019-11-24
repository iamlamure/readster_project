<template>
    <div class="container">
        <h1 class="title is-1"> จัดการ Blog<router-link class="button is-primary is-rounded" to="Dashboard" >
                หน้าหลัก
        </router-link></h1>
        <table class="table is-fullwidth">
            <thead>
                <th class="subtitle is-5">ชื่อเรื่อง</th>
                <th class="subtitle is-5">วันที่</th>
                <th>ผู้เขียน</th>
                <th>ACTION</th>
            </thead>
            <tbody>
                <tr v-for="(blog) in blogs" v-bind:key="blog.blogid" v-bind:title="blog.blog_title">
                    <td><a v-on:click="gotodetail(blog.blogid)">{{blog.blog_title}}</a></td>
                    <td>{{blog.blog_date}}</td>
                    <td>{{blog.userblogid}}</td>
                    <td>
                        <button v-on:click="deleteblog(blog.blogid)" class="button is-danger is-small is-rounded is-pulled-right">Delete</button>
                        <button class="button is-warning is-small is-rounded is-pulled-right">Edit</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
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
            blog_img:'',
            userblogid:'',
            blog_date:'',
            first_name:''
        }
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
         //Delete Product By ID
        deleteblog(blogid) {
            //UserUpdate Status
            axios.put(`/blogs/update/${blogid}`,
                {
                    status : "ยกเลิกบทความ",
                }
            ).then((res) => {
                this.status = ''
                this.getblog()
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        },

    },
    mounted() {
        this.getblog()
    },
}
</script>
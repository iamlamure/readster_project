<template>
    <div class="container">
        <div class="jumbotron mt-5" >
            <h1>บทความที่ : {{this.$route.params.blog}}</h1>
            <h1>ชื่อเรื่อง : {{this.blog_title}}</h1>
            <h5>Writer : {{this.userblogid}}</h5>
            <h5>Book : {{this.book_id}}</h5>
            <hr class="style1">
            <p>{{this.blog_article}}</p>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import router from '../router'

export default {
    name: 'Read',
    data() {
        return {
            blog:this.$route.params.blogid,
            blog_title:'',
            blog_article:'',
            userblogid:'',
            book_id:''
        }
    },
    mounted() {
        this.getblogdetail();
    },
    methods: {
        getblogdetail(blog){
            axios.get(`/blogs/read/${this.$route.params.blog}`
            ).then((res) => {
                this.blogid = res.data.blogid,
                this.blog_article = res.data.blog_article,
                this.blog_title = res.data.blog_title,
                this.userblogid = res.data.userblogid,
                this.book_id = res.data.book_id
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        },
    },
}
</script>
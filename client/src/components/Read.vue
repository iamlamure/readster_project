<template>
    <div class="container">
        <div class="jumbotron mt-5" >
            <h1>บทความที่ : {{this.$route.params.blog}}</h1>
            <h1>ชื่อเรื่อง : {{blog_title}}</h1>
            <h5>Writer : {{userblogid}}</h5>
            <h5>Book : {{book_id}}</h5>
            <hr class="style1">
            <p>{{blog_article}}</p>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import router from '../router'

export default {
    name: 'Read',

    data() {
        const token = localStorage.usertoken
        return {
            blog:this.$route.params.blogid,
            blog_title:'',
            blog_article:'',
            userblogid:'',
            book_id:'',
            first_name:'',
            token: token
        }
    },
    mounted() {
        this.getblogdetail()
        this.getuser()
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
        getuser () {
            axios.get('/users/profile', {
                headers: { 'Authorization': this.token }
            }).then(res => {
                this.id = res.data.id
                this.first_name = res.data.first_name
            }).catch(err => {
                console.log(err)
            })
        }
    },
}
</script>
<template>
    <div class="container">
        <div class="jumbotron mt-5" >
            <h2>หน้าอ่านจ้า</h2>
            <h1>{{this.$route.params.blog}}</h1>
            <h1>{{this.blog_title}}</h1>
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
            blog_article:''
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
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        },
    },
}
</script>
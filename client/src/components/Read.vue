<template>
    <div class="container">
        <div class="container is-fluid">
            <div class="container">
          <div class="tile is-ancestor columns is-mobile is-centered">
            <div class="tile is-parent">
              <div class="tile is-child box">
                <p class="is-pulled-right"> POST {{blog_date}}</p>
                <h1 class="title is-1"> {{blog_title}} </h1>
                <h5 class="title is-5"> บทความโดย : {{first_name}} </h5>
                <h5 class="subtitle is-5"> ชื่อหนังสือ : {{book_name}} </h5>
                <hr class="style11">
                <p>{{blog_article}}</p>
              </div>
            </div>
          </div>
        </div>
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
            blog_title : '',
            blog_article : '',
            blog_img : '',
            blog_date : '',
            userblogid : '',
            book_id : '',
            first_name : '',
            book_name : '',
            token: token
        }
    },
    mounted() {
        this.getblogdetail()
        //this.getuser()
    },
    methods: {
        getblogdetail(blog){
            axios.get(`/blogview/read/${this.$route.params.blog}`
            ).then((res) => {
                this.blogid = res.data.blogid,
                this.blog_title = res.data.blog_title,
                this.blog_article = res.data.blog_article,
                this.blog_img = res.data.blog_img,
                this.blog_date = res.data.blog_date,
                this.userblogid = res.data.userblogid,
                this.book_id =  res.data.book_id,
                this.first_name = res.data.first_name,
                this.book_name =  res.data.book_name
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

//ตัวอย่างที่ต้องทำตาม

// https://medium.com/@artdvp/note-%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81-workshop-%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-website-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-node-js-vue-js-part-6-543fb89ced29 //
</script>
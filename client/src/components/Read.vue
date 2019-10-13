<template>
    <div class="container">
        <div class="jumbotron mt-5" >
            <h2>{{this.blog_article}}</h2>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import router from '../router'

export default {
    data() {
        return {
            blogid:'',
            blog_article:'',
            blog_title:'',
            book_id:'',
            userid: '',
        }
    },
    methods: {
        getread(blogid) {
            axios.get(`/blogs/read/${blogid}`)
        }
    }
}
</script>
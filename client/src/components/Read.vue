<template>
    <div class="container">
        <div class="jumbotron mt-5" >
            <h2>หน้าอ่านจ้า</h2>
            <h1>{{this.$route.params.blog_title}}</h1>
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
            blogid:'',
        }
    },
    methods: {
        getread(blogid) {
            axios.get(`/blogs/read/${blogid}`)
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="jumbotron mt-5" >
            <h2>หน้าอ่านจ้า</h2>
            <h1>{{this.$route.params.blog}}</h1>
            <h1>{{this.$route.params.title}}</h1>
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
            blog:this.params.blogid,
            title:this.params.blog_title
        }
    }
}
</script>
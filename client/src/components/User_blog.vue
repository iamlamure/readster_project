<template>
    <div>
        <h1 class="title is-1">User Blog {{userblogid}}</h1>
    </div>
</template>

<script>

import axios from 'axios'
import router from '../router'

export default {
    name: 'User_blog',
    data() {
        return {
            id:this.$route.params.id,
        }
    },
    methods: {
        getblogs(blog){
            axios.get(`/blogview/book_detail/${this.$route.params.book}`
            ).then((res) => {

            })
        }
    },
    
    mounted() {
        
    },
}
</script>
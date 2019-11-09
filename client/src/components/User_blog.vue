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
            userblogid:this.$route.params.id,
        }
    },
    methods: {
        getuser_blogs(id){
            axios.get(`/blogview/userblog/${this.$route.params.userblogid}`
            ).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }
    },
    
    mounted() {
        this.getuser_blogs()
    },
}
</script>
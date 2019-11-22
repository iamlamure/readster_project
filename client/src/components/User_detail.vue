<template>
    <div class="container">
       <div class="columns is-mobile is-centered">
        <div class="column is-half">
        <form v-on:submit.prevent="uploadProfileImg">
            <input type="file">
        </form>
      </div>
    </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import router from "../router";
export default {
    data () {
        const token = localStorage.usertoken
        return {
            user_img:'',
            token:token,
            id:''
        }
    },
    methods: {
        uploadProfileImg(){
            axios.get('/users/profile',{
                headers: { 'Authorization': this.token }
            }).then(res => {
                this.id = res.data.id
                axios.put(`/users/update/${id}`,
                    {
                        user_img : this.user_img
                    }
                ).then((res) => {
                    this.user_img = ''
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })   
            })
        }
    },
}
</script>
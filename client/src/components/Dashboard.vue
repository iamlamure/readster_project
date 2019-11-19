<template>
    <div >
        <h1 class="title is-1">{{first_name}}</h1>
        <a class="button is-danger is-rounded" href="#/admin_login/" v-on:click="adminlogout">
                Logout
        </a>
    </div>
</template>

<script>
import axios from 'axios'
import router from '../router'

export default {
   data() {
       const admintoken = localStorage.admintoken

       return{
            adminid:'',
            first_name: '',
            last_name: '',
            email: '',
            admintoken: admintoken
       }
   },
   methods: {
       getadmin(){
           axios.get('/admins/profile', {
               headers: {'Authorization':this.admintoken}
           }).then(res => {
            this.adminid = res.data.adminid
            this.first_name = res.data.first_name
            this.last_name = res.data.last_name
            this.email = res.data.email
           }).catch(err => {
               console.log(err)
               router.push({ name: 'Home' })
           })
       },
       adminlogout () {
            localStorage.removeItem('admintoken')
        }
   },
   mounted() {
       this.getadmin()
   },
}
</script>
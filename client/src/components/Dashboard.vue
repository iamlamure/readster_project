<template>
    <div >
        <h1 class="title is-1">Welcome {{first_name}} <a class="button is-danger is-rounded" href="#/admin_login/" v-on:click="adminlogout">
                Logout
        </a></h1>
        <br>
        <router-link class="button is-info is-rounded" to="Admin_Payment" >
                ตรวจสอบการโอนเงิน
        </router-link>
        <router-link class="button is-warning is-rounded" to="Admin_Product" >
                ตรวจสอบสินค้า
        </router-link>
        <router-link class="button is-success is-rounded" to="Admin_Book" >
                ตรวจสอบหนังสือ
        </router-link>
        <router-link class="button is-primary is-rounded" to="Admin_Blog" >
                ตรวจสอบการรีวิว
        </router-link>
        <router-link class="button is-link is-rounded" to="Admin_User" >
                ตรวจสอบผู้ใช้
        </router-link>
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
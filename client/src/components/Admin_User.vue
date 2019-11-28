<template>
    <div class="container">
        <h1 class="title is-1">จัดการผู้ใช้<router-link class="button is-primary is-rounded" to="Dashboard" >
                หน้าหลัก
        </router-link></h1>
        <table class="table is-fullwidth">
            <thead>
                <th>ID</th>
                <th>ชื่อจริง</th>
                <th>นามสกุล</th>
                <th>อีเมลล์</th>
                <th>วันที่สมัคร</th>
                <th>เบอร์โทร สำหรับโอนเงิน</th>
                <th class="text-right" >ACTION</th>
            </thead>
            <tbody>
                <tr v-for="(user) in users" v-bind:key="user.id" v-bind:title="user.first_name">
                    <td>{{user.id}}</td>
                    <td>{{user.first_name}}</td>
                    <td>{{user.last_name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.created}}</td>
                    <td>{{user.phone}}</td>
                    <td class="text-right">
                        <button  v-on:click="deleteUser(user.id)" type="button"  class="button is-danger is-rounded">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>           
    </div>
</template>
<script>
    import router from '../router'
    import axios from 'axios'
export default {
    data() {
        return {
            users:[],
            id:'',
            first_name: '',
            last_name: '',
            email: '',
            created:'',
            status:'',
            phone:''
        }
    },
    methods: {
        getalluser(){
            axios.get('users/getuser/all').then(
                result => {
                    console.log(result.data)
                    this.users = result.data
                },
                error => {
                    console.error(error)
                }
            )
        },
        
        //Delete Book by id
        deleteUser(id) {
            axios.put(`/users/update/${id}`,
            {
                    status : "ระงับผู้ใช้",
            }
            ).then((res) => {
                this.status = ''
                this.getalluser()
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        },
    },
    mounted() {
        this.getalluser()
    },
    
}
</script>
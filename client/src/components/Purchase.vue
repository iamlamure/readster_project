<template>
    <div class="container">
        <h1 class="title is-1">การสั่งซื้อของฉัน</h1>
        <div class="columns">
            <!--
            <div class="column">
                <div class="notification is-primary">
                    <h3 class="title is-3">รอแจ้งโอนเงิน</h3>
                    <h5 class="title is-5">จำนวน:    รายการ</h5>
                </div>
            </div>
            <div class="column">
                <div class="notification is-info">
                    <h3 class="title is-3">โอนเงินเรียบร้อย</h3>
                    <h5 class="title is-5">จำนวน:   รายการ</h5>
                </div> 
            </div>
            <div class="column">
                <div class="notification is-link">
                    <h3 class="title is-3">อยู่ระหว่างจัดส่ง</h3>
                    <h5 class="title is-5">จำนวน:    รายการ</h5>
                </div> 
            </div>
            <div class="column">
                <div class="notification is-success">
                    <h3 class="title is-3">ได้รับแล้ว</h3>
                    <h5 class="title is-5">จำนวน:   รายการ</h5>
                </div>
            </div>
            -->
        </div>
        <hr class="style11">
        <h2 class="title is-2">ดำเนินการ</h2>
        <hr class="style11">
        <table class="table is-fullwidth">
            <thead class="title is-4">
                <th>รหัสการซื้อ</th>
                <th></th>
                <th></th>
                <th>ยอดทั้งหมด</th>
                <th>สถานะ</th>
                <th>การจัดส่ง</th>
                <th>เลขพัสดุ</th>
                <th>คำสั่ง</th>
            </thead>
            <tbody>
                <tr v-for="(payment) in payments" v-bind:key="payment.paymentid" v-bind:title="payment.cart_id">
                    <td>{{payment.cart_id}}</td>
                    <td></td>
                    <td></td>
                    <td>{{payment.amount}}</td>
                    <td>{{payment.status}}</td>
                    <td>
                        ไปรษณีย์ - EMS
                    </td>
                    <td>
                        {{payment.tracking_number}}
                    </td>
                    <td>
                        <button @click="completeBuy(payment.paymentid)" class="button is-success is-rounded is-small">ได้รับสินค้าแล้ว</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <hr class="style11">
        <h2 class="title is-2">สำเร็จ</h2>
        <table class="table is-fullwidth">
            <thead class="title is-4">
                <th>รหัสการซื้อ</th>
                <th>รหัสสินค้า</th>
                <th>สถานะ</th>
                <th>เลขพัสดุ</th>
            </thead>
            <tbody>
                <tr v-for="(buycomplete) in buycompletes" v-bind:key="buycomplete.paymentid" v-bind:title="buycomplete.cart_id">
                    <td>{{buycomplete.paymentid}}</td>
                    <td>{{buycomplete.product_id}}</td>
                    <td>{{buycomplete.status}}</td>
                    <td>{{buycomplete.tracking_number}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import router from "../router"
export default {
    data(){
        const token = localStorage.usertoken
        return{
            payments:[],
            buycompletes:[],
            token:token,
            id:'',
            cart_id: '',
            product_id: '',
            amount:'',
            user_sell_id:'',
            user_buy_id:'',
            user_buy_address:'',
            receipt:'',
            status:'',
            tracking_number:'',
        }
    },
    methods: {
        getuserbuy(){
            axios.get('/users/profile',{
                headers: { 'Authorization': this.token }
            }).then(res => {
                this.id = res.data.id
                axios.get(`/payments/userbuy/${this.id}`).then(
                    result => {
                        console.log(result.data)
                        this.payments = result.data
                    },
                    error => {
                        console.error(error)
                    }
                )
            }).catch(err => {
                console.log(err)
            })
        },
        completeBuy(paymentid){
            axios.put(`/payments/update/${paymentid}`,
                {
                    status : "ได้รับสินค้าแล้ว",
                }
            ).then((res) => {
                this.status = ''
                console.log(res)
                this.getuserbuy()
            })
            .catch((err) => {
                console.log(err)
            })
        },
        buycomplete(){
            axios.get('/users/profile',{
                headers: { 'Authorization': this.token }
            }).then(res => {
                this.id = res.data.id
                axios.get(`/payments/buycomplete/${this.id}`).then(
                    result => {
                        console.log(result.data)
                        this.buycompletes = result.data
                    },
                    error => {
                        console.error(error)
                    }
                )
            }).catch(err => {
                console.log(err)
            })
        },
    },
    mounted() {
        this.getuserbuy()
        this.buycomplete()
    },
}
</script>
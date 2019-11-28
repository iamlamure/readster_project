<template>
    <div>
        <h1 class="title is-1">Admin Payment<router-link class="button is-primary is-rounded" to="Dashboard" >
                หน้าหลัก
        </router-link></h1>
        <div class="container">
            <div>
                <hr class="style11">
                <h1 class="title is-1">รอการตรวจสอบ</h1>
                <h5 class="title is-5">Payment List {{payments.length}} ชิ้น</h5>
                <table class="table is-fullwidth">
                    <thead>
                        <th>รหัสคำสั่งซื้อ</th>
                        <th>ไอดีผู้ซื้อ</th>
                        <th>ไอดีผู้ขาย</th>
                        <th>จำนวนการโอน</th>
                        <th>ธนาคาร</th>
                        <th>วันที่โอน</th>
                        <th>เวลาโอน</th>
                        <th class="text-right" >ACTION</th>
                    </thead>
                    <tbody>
                        <tr v-for="(payment) in payments" v-bind:key="payment.paymentid" v-bind:title="payment.cart_id">
                            <td>{{payment.cart_id}}</td>
                            <td>{{payment.user_buy_id}}</td>
                            <td>{{payment.user_sell_id}}</td>
                            <td>{{payment.amount}}</td>
                            <th>{{payment.bank}}</th>
                            <th>{{payment.date_pay}}</th>
                            <td>{{payment.time_pay}}</td>
                            <td class="text-right">
                                <button  v-on:click="rejectpayment(payment.paymentid)" type="button"  class="button is-danger is-rounded">Reject</button>
                                <button  v-on:click="confirmpayment(payment.paymentid,payment.product_id)" type="button"  class="button is-success is-rounded">Confirm</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h1 class="title is-1">รอดำเนินการโอนเงินให้ผู้ขาย</h1>
                <h5 class="title is-5">รอดำเนินการ {{paymentcheckbyadmins.length}} รายกาย</h5>
                <table class="table is-fullwidth">
                    <thead>
                        <th>รหัสคำสั่งซื้อ</th>
                        <th>ไอดีผู้ขาย</th>
                        <th>จำนวนการโอน</th>
                        <th>สถานะ</th>
                        <th class="text-right" >ACTION</th>
                    </thead>
                    <tbody>
                        <tr v-for="(paymentcheckbyadmin) in paymentcheckbyadmins" v-bind:key="paymentcheckbyadmin.paymentid" v-bind:title="paymentcheckbyadmin.cart_id">
                            <td>{{paymentcheckbyadmin.cart_id}}</td>
                            <td>{{paymentcheckbyadmin.user_sell_id}}</td>
                            <td>{{paymentcheckbyadmin.amount}}</td>
                            <td>{{paymentcheckbyadmin.status}}</td>
                            <td class="text-right">
                                <button  v-on:click="paymentOk(paymentcheckbyadmin.paymentid)" type="button"  class="button is-success is-rounded">โอนเงินให้กับผู้ใช้เรียบร้อยแล้ว</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h1 class="title is-1">สำเร็จแล้ว</h1>
                <h5 class="title is-5">สำเร็จแล้ว {{adminsendmoneys.length}} ชิ้น</h5>
                <table class="table is-fullwidth">
                    <thead>
                        <th>รหัสคำสั่งซื้อ</th>
                        <th>ไอดีผู้ขาย</th>
                        <th>จำนวนการโอน</th>
                        <th>สถานะ</th>
                    </thead>
                    <tbody>
                        <tr v-for="(adminsendmoney) in adminsendmoneys" v-bind:key="adminsendmoney.paymentid" v-bind:title="adminsendmoney.cart_id">
                            <td>{{adminsendmoney.cart_id}}</td>
                            <td>{{adminsendmoney.user_sell_id}}</td>
                            <td>{{adminsendmoney.amount}}</td>
                            <td>{{adminsendmoney.status}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import router from "../router";

export default {
     data(){
         img : '/uploads/payment/receipt/1.jpg'
        //const token = localStorage.usertoken
        return {
            payments: [],
            paymentcheckbyadmins: [],
            adminsendmoneys:[],
            paymentid:'',
            cart_id:'',
            product_id:'',
            amount:'',
            user_sell_id:'',
            user_buy_id:'',
            user_buy_address:'',
            receipt:'',
            status:'',
            time_pay:'',
            date_pay:''
        }
    },
    methods: {
        getallpayment() {
            axios.get('/payments/forcheckbyadmin/all').then(
                result => {
                    console.log(result.data)
                    this.payments = result.data
                },
                error => {
                    console.error(error)
                }
            )
        },
        getpaymentcomplete(){
            axios.get('/payments/all').then(
                result => {
                    this.paymentcheckbyadmins = result.data
                },
                error => {
                    console.error(error)
                }
            )
        },
         getadminsendMoney(){
            axios.get('/payments/all/complete').then(
                result => {
                    this.adminsendmoneys = result.data
                },
                error => {
                    console.error(error)
                }
            )
        },
        confirmpayment(paymentid,product_id,cart_id){
           axios.put(`/payments/update/${paymentid}`,
                {
                    status : "ชำระเงินสำเร็จแล้ว",
                },
                axios.put(`/products/update/${product_id}`,
                {
                    status : "สินค้าถูกสั่งซื้อแล้ว",
                }
                ).then((res) => {
                    this.status = ''
                    console.log(res)
                }),
                axios.put(`/carts/update/${cart_id}`,
                {
                    status : "สั่งซื้อแล้ว"
                }).then((res) => {
                    this.status = ''
                    console.log(res)
                })
            ).then((res) => {
                this.status = ''
                console.log(res)
                this.getallpayment()
            })
            .catch((err) => {
                console.log(err)
            })
       },
        rejectpayment(paymentid){
           axios.put(`/payments/update/${paymentid}`,
                {
                    status : "ยกเลิกการโอนเงิน",
                }
            ).then((res) => {
                this.status = ''
                console.log(res)
                this.getallpayment()
            })
            .catch((err) => {
                console.log(err)
            })
       },
        paymentOk(paymentid){
           axios.put(`/payments/update/${paymentid}`,
                {
                    status : "โอนเงินค่าสินค้าเรียบร้อยแล้ว",
                }
            ).then((res) => {
                this.status = ''
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
            this.getallpayment()
       }
    },
    mounted() {
        this.getallpayment()
        this.getpaymentcomplete()
        this.getadminsendMoney()
    },
}
</script>
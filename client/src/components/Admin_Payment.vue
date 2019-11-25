<template>
    <div>
        <h1 class="title is-1">Admin Payment<router-link class="button is-primary is-rounded" to="Dashboard" >
                หน้าหลัก
        </router-link></h1>
        <div class="container">
            <div>
                <hr class="style11">
                <h1 class="title is-1">ตรวจสอบการชำระเงิน</h1>
                <h5 class="title is-5">Payment List {{payments.length}} ชิ้น</h5>
                <table class="table is-fullwidth">
                    <thead>
                        <th>Cart_ID</th>
                        <th>User_Buy</th>
                        <th>User_sell</th>
                        <th>Amount</th>
                        <th>Receipt</th>
                        <th class="text-right" >ACTION</th>
                    </thead>
                    <tbody>
                        <tr v-for="(payment) in payments" v-bind:key="payment.paymentid" v-bind:title="payment.cart_id">
                            <td>{{payment.cart_id}}</td>
                            <td>{{payment.user_buy_id}}</td>
                            <td>{{payment.user_sell_id}}</td>
                            <td>{{payment.amount}}</td>
                            <td><img  v-bind:src="payment.receipt" /></td>
                            <td class="text-right">
                                <button  v-on:click="rejectpayment(payment.paymentid)" type="button"  class="button is-danger is-rounded">Reject</button>
                                <button  v-on:click="confirmpayment(payment.paymentid,payment.product_id)" type="button"  class="button is-success is-rounded">Confirm</button>
                            </td>
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
            paymentid:'',
            cart_id:'',
            product_id:'',
            amount:'',
            user_sell_id:'',
            user_buy_id:'',
            user_buy_address:'',
            receipt:'',
            status:'',
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
        confirmpayment(paymentid,product_id){
           axios.put(`/payments/update/${paymentid}`,
                {
                    status : "ชำระเงินสำเร็จแล้ว",
                },
                axios.put(`/products/update/${product_id}`,
                {
                    status : "สินค้าถูกสั่งซื้อแล้ว",
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
       }
    },
    mounted() {
        this.getallpayment()
    },
}
</script>
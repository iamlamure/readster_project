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
        <h2 class="title is-2">รายการ</h2>
        <hr class="style11">
        <table class="table is-fullwidth">
            <thead class="title is-4">
                <th>สินค้า</th>
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
                    <td>
                        <figure class="image is-64x64">
                            <img src="https://readery.co/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/7/4/74238125_463268774542092_2482475965918216192_n.jpg" alt="Image">
                        </figure>
                    </td>
                    <td></td>
                    <td>{{payment.user_buy_id}}</td>
                    <td>900</td>
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
        }
    },
    mounted() {
        this.getuserbuy()
    },
}
</script>
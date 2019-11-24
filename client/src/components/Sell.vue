<template>
    <div class="container">
        <h1 class="title is-1">จัดการการขาย</h1>
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
                <th>สลิป</th>
                <th>คำสั่ง</th>
                <th>แจ้งเลขพัสดุ</th>
            </thead>
            <tbody>
                <tr v-for="(payment) in payments" v-bind:key="payment.paymentid" v-bind:title="payment.cart_id">
                    <td>
                        <figure class="image is-64x64">
                            <img src="https://readery.co/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/7/4/74238125_463268774542092_2482475965918216192_n.jpg" alt="Image">
                        </figure>
                    </td>
                    <td></td>
                    <td>{{payment.paymentid}}</td>
                    <td>900</td>
                    <td>{{payment.status}}</td>
                    <td>
                        <div>
                            <div v-if="isOpen">
                                <h5 class="title is-5">ที่อยู่ </h5>
                                <p>{{payment.user_buy_address}}</p>
                            </div>
                            <button class="button is-warning is-fullwidth is-rounded is-small" @click="isOpen=!isOpen">ที่อยู่ในการจัดส่ง</button>
                        </div>
                    </td>
                    <td>รออัพโหลด</td>
                    <td>
                        <a class="button is-danger is-rounded is-small">ยกเลิก</a>
                    </td>
                    <td>
                        <form v-on:submit.prevent="updateSell(payment.paymentid)">
                            <input v-model="tracking_number" name="payment.tracking_number"  class="input is-rounded is-small " type="text">
                            <button type="submit" class="button is-success is-fullwidth is-rounded is-small">จัดส่ง</button>
                        </form>
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
    data:function(){
        const token = localStorage.usertoken
        return {
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
            isOpen: false
        }
    },
    methods: {
        getusersell(){
            axios.get('/users/profile',{
                headers: { 'Authorization': this.token }
            }).then(res => {
                this.id = res.data.id
                axios.get(`/payments/usersell/${this.id}`).then(
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
        updateSell(paymentid){
            axios.put(`/payments/update/${paymentid}`,
                {
                    status : "จัดส่งเรียบร้อยแล้ว",
                    tracking_number : this.tracking_number
                }
            ).then((res) => {
                this.status = ''
                this.tracking_number = ''
                console.log(res)
                this.getusersell()
            })
            .catch((err) => {
                console.log(err)
            })
        }
    },
    mounted() {
        this.getusersell()
    },
    
}
</script>
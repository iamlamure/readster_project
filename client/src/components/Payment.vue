<template>
    <div class="container">
        <h1 class="title is-1">Payment {{cartid}}</h1>
        <div>
            <figure class="image is-64x64 is-pulled-right">
                <img src="https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/s/c/screen_shot_2562-10-22_at_1.43.56_am.png" alt="Image">
            </figure>
        </div>
        <hr class="style1">
        <h3 class="title is-3">{{product_id}}</h3>
        <h3 class="title is-3">ยอดชำระทั้งหมด : {{price}} บาท </h3>
            <form v-on:submit.prevent="addpayment">
                <h1 class="title is-4">การจัดส่ง : EMS</h1>
                <h1 class="title is-4">กรอกที่อยู่ผู้รับ และ เบอร์โทรศัพท์</h1>
                <div class="columns is-mobile is-centered" >
                    <textarea v-model="user_buy_address" class="textarea" placeholder="ชื่อ-ที่อยู่ และ เบอร์โทรศัพท์ผู้รับ" rows="10"></textarea>
                </div>
                <div class="columns">
                    <div class="column">
                       <div class="file has-name">
                        <label class="file-label">
                            <input class="file-input" type="file" name="resume">
                            <span class="file-cta">
                            <span class="file-icon">
                                <i class="fas fa-upload"></i>
                            </span>
                            <span class="file-label">
                                อัพโหลดสลิป
                            </span>
                            </span>
                            <span class="file-name">
                               สลิปธนาคาร.jpg
                            </span>
                        </label>
                        </div>
                    </div>
                </div>
                <button class="button is-success  is-fullwidth">แจ้งโอนเงิน</button>   
            </form>    
    </div>
</template>
<script>
//ต้อง Create view และ join เข้ามาจะแสดงชื่อสินค้าได้
import axios from 'axios'
import router from '../router'

export default {
    name: 'Payment',
    data(){
        const token = localStorage.usertoken
        return {
            payment:this.$route.params.cartid,
            cartid:'',
            product_id:'',
            price:'',
            user_id:'',
            qty:'',
            shippingcost:'',
            amount:'',
            status:'',
            user_sell_id:'',
            user_buy_id:'',
            token: token,
            user_address:'',
            user_buy_address:''
        }
    },
    methods: {
        getpayment(cart){
            axios.get(`/carts/cart_detail/${this.$route.params.cart}`
            ).then((res) => {
                this.cartid = res.data.cartid,
                this.product_id = res.data.productid,
                this.price = res.data.price,
                this.user_id = res.data.user_id,
                this.qty = res.data.qty,
                this.shippingcost = res.data.shippingcost,
                this.amount = res.data.amount,
                this.status = res.data.status
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        },
        addpayment(cartid){
              axios.get('/users/profile',{
                  headers: { 'Authorization': this.token }
              }).then(res =>{
                  this.id = res.data.id
                  axios.get(`/carts/cart_detail/${this.$route.params.cart}`)
                  .then(res =>{
                    this.cartid = res.data.cartid
                    this.product_id = res.data.product_id
                    this.price = res.data.product_price
                    this.shippingcost = res.data.shippingcost
                    this.user_id = res.data.user_id
                    this.amount = res.data.price
                    this.qty = res.data.qty  
                  axios.post('/payments/addpayment',{
                    cart_id : this.cartid,
                    product_id : this.product_id,
                    amount : this.amount,
                    user_sell_id : this.user_id,
                    user_buy_id : this.id,
                    user_buy_address : this.user_buy_address,
                    receipt : this.receipt,
                    status : "แจ้งชำระเงินเรียบร้อยแล้ว",
                  }).then((res) => {
                    this.cart_id = '',
                    this.product_id = '',
                    this.amount = '',
                    this.user_sell_id = '',
                    this.user_buy_id = '',
                    this.user_buy_address = '',
                    this.receipt = '',
                    this.status = '',
                    console.log(res)
                    this.getpayment()
                })
                })        
              })
                .catch((err) => {
                console.log(err)
            })
        }
    },
    mounted() {
        this.getpayment();
    },
}
</script>
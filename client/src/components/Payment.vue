<template>
  <div class="container">
    <h1 class="title is-1">ชำระเงินรหัสคำสั่งซื้อที่ : {{cartid}}</h1>
    <h1 class="title is-4">ชื่อบัญชี บริษัท รีดส์เตอร์ จำกัด</h1>
    <h1 class="title is-5">เลขที่บัญชี : 0000-000000-000-0 ธนาคาร กรุงไทย</h1>
    <h1 class="title is-5">เลขที่บัญชี : 0000-000000-000-0 ธนาคาร ไทยพาณิช</h1>
    <h1 class="title is-5">เลขที่บัญชี : 0000-000000-000-0 ธนาคาร ทหารไทย</h1>
    <h1 class="title is-5">เลขที่บัญชี : 0000-000000-000-0 ธนาคาร กรุงศรีอยุธยา</h1>
    <h1 class="title is-5">เลขที่บัญชี : 0000-000000-000-0 ธนาคาร กสิกรไทย</h1>
    <div>
      <figure class="image is-64x64 is-pulled-right">
      </figure>
    </div>
    <hr class="style1">
    <h3 class="title is-3">{{product_id}}</h3>
    <form v-on:submit.prevent="addpayment">
      <h1 class="title is-4">กรอกที่อยู่ผู้รับ และ เบอร์โทรศัพท์</h1>
      <div class="columns is-mobile is-centered">
        <textarea v-model="user_buy_address" class="textarea" placeholder="ชื่อ-ที่อยู่ และ เบอร์โทรศัพท์ผู้รับ"
          rows="10"></textarea>
      </div>
      <div class="columns">
        <div class="column">
          <div  class="select">
            <label class="title is-4">ธนาคารที่โอนเงิน</label>
            <select v-model="bank">
              <option>ธนาคาร กรุงไทย</option>
              <option>ธนาคาร ไทยพาณิช</option>
              <option>ธนาคาร ทหารไทย</option>
              <option>ธนาคาร กรุงศรีอยุธยา</option>
              <option>ธนาคาร กสิกรไทย</option>
            </select>
          </div>
        </div>
        <div class="column">
          <label class="title is-4">จำนวนเงินที่ชำระ</label>
          <input v-model="amount" class="input" type="number">
        </div>
        <div class="column">
          <label class="title is-4">วันที่ที่โอน</label>
          <input v-model="date_pay" class="input" type="date">
        </div>
        <div class="column">
          <label class="title is-4">เวลาที่โอน</label>
          <input v-model="time_pay" class="input" type="time">
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
    data() {
      const token = localStorage.usertoken
      return {
        payment: this.$route.params.cartid,
        cartid: '',
        product_id: '',
        price: '',
        user_id: '',
        qty: '',
        shippingcost: '',
        amount: '',
        status: '',
        user_sell_id: '',
        user_buy_id: '',
        token: token,
        user_address: '',
        user_buy_address: '',
        receipt: '',
        id: '',
        user_id: '',
        product_user_id: '',
        time_pay:'',
        date_pay:'',
        bank:''
      }
    },
    methods: {
      getpayment(cart) {
        axios.get(`/carts/cart_detail/${this.$route.params.cart}`).then((res) => {
          this.cartid = res.data.cartid,
            this.product_id = res.data.productid,
            this.price = res.data.price,
            this.user_id = res.data.user_id,
            this.qty = res.data.qty,
            this.shippingcost = res.data.shippingcost,
            this.amount = res.data.amount,
            this.status = res.data.status,
            //this.receipt = res.data.receipt
            console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      },
      addpayment(cartid) {
        axios.get('/users/profile', {
            headers: {
              'Authorization': this.token
            }
          }).then(res => {
            this.id = res.data.id
            axios.get(`/carts/cart_detail/${this.$route.params.cart}`)
              .then(res => {
                this.cartid = res.data.cartid
                this.product_id = res.data.product_id
                this.price = res.data.product_price
                this.shippingcost = res.data.shippingcost
                this.user_id = res.data.user_id
                //this.amount = res.data.amount
                this.qty = res.data.qty
                //this.receipt = res.data.receipt
                axios.put(`/carts/update/${this.cartid}`, {
                  status: "สั่งซื้อแล้ว",
                }).then((res) => {
                  this.status = ''
                  console.log(res)
                })
                axios.get(`/products/product_detail/${this.product_id}`)
                  .then(res => {
                    console.log(res.data)
                    this.product_user_id = res.data.product_user_id
                    axios.post('/payments/addpayment', {
                      cart_id: this.cartid,
                      product_id: this.product_id,
                      amount: this.amount,
                      user_sell_id: this.product_user_id,
                      user_buy_id: this.id,
                      user_buy_address: this.user_buy_address,
                      //receipt : this.receipt,
                      status: "รอการตรวจสอบชำระเงิน",
                      time_pay:this.time_pay,
                      date_pay:this.date_pay,
                      bank:this.bank
                    }).then((res) => {
                      this.cart_id = '',
                        this.product_id = '',
                        this.amount = '',
                        this.user_sell_id = '',
                        this.user_buy_id = '',
                        this.user_buy_address = '',
                        //this.receipt = '',
                        this.status = '',
                        this.time_pay = '',
                        this.date_pay = ''
                        console.log(res)
                    })
                    router.push({
                      name: 'Purchase'
                    })
                  })
              })
          })
          .catch((err) => {
            console.log(err)
          })
      },
      getuser() {
        axios.get('/users/profile', {
          headers: {
            'Authorization': this.token
          }
        }).then(res => {
          this.id = res.data.id
          this.first_name = res.data.first_name
          this.last_name = res.data.last_name
          this.email = res.data.email
        }).catch(err => {
          console.log(err)
          router.push({
            name: 'Login'
          })
        })
      },
    },
    mounted() {
      this.getpayment()
      this.getuser()
    },
  }

</script>

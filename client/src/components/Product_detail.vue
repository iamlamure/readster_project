<template>
   <div class="container">
        <div class="container is-fluid">
            <div class="container">
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <div class="tile is-child box">
                <button v-on:click="addcart(productid)" class="button is-link is-outlined is-pulled-right">เพิ่มลงตะกร้าสินค้า</button>
                <h1 class="title is-1"> {{product_name}} </h1>
                <p class="is-pulled-right"> วันที่ </p>
                <h5 class="title is-5"> รายละเอียด : {{product_detail}} </h5>
                <h5 class="subtitle is-5"> ราคา : {{product_price}} </h5>
                <p>จำนวนชิ้น : {{qty}}</p>
                <p>สภาพสินค้า : {{product_condition}}</p>
                <p>การจัดส่ง : {{shipping}}</p>
                <p>ค่าจัดส่ง : {{shippingcost}}</p>
                <hr class="style11">
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
</template>
<script>
// Please Create VIEWS in DB Product VIEW

import axios from 'axios'
import router from '../router'

export default {
    name: 'Product_detail',
    data() {
        const token = localStorage.usertoken
        return {
            product_detail:this.$route.params.productid,
            productid:'',
            product_name:'',
            product_detail:'',
            product_img:'',
            product_price:'',
            qty:'',
            product_condition:'',
            shipping:'',
            shippingcost:'',
            product_user_id:'',
            token: token
        }
    },
    methods: {
        getproduct_detail(product){
            axios.get(`/products/product_detail/${this.$route.params.product}`
            ).then((res) => {
                this.productid = res.data.productid,
                this.product_name = res.data.product_name,
                this.product_detail = res.data.product_detail,
                this.product_img = res.data.product_img,
                this.product_price = res.data.product_price,
                this.qty = res.data.qty,
                this.product_condition = res.data.product_condition,
                this.shipping = res.data.shipping,
                this.shippingcost = res.data.shippingcost,
                this.product_user_id = res.data.product_user_id
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        },
        addcart(productid){
              axios.get('/users/profile',{
                  headers: { 'Authorization': this.token }
              }).then(res =>{
                  this.id = res.data.id
                  axios.get(`/products/product_detail/${productid}`)
                  .then(res =>{
                    this.productid = res.data.productid
                    this.product_id = res.data.productid
                    this.price = res.data.product_price
                    this.shippingcost = res.data.shippingcost
                    this.user_id = res.data.id
                    this.amount = res.data.price
                    this.qty = res.data.qty  
                    this.product_user_id = res.data.product_user_id
                  axios.post('/carts/addcart',{
                    product_id : this.productid,
                    price : this.price,
                    user_sell_id:this.product_user_id,
                    shippingcost : this.shippingcost,
                    user_id : this.id,
                    amount : this.amount,
                    qty : this.qty
                  }).then((res) => {
                    this.product_id = ''
                    this.price = ''
                    this.shippingcost = ''
                    this.user_id = ''
                    this.amount = ''
                    this.qty = ''
                    console.log(res)
                    //this.getproducts()
                })
                })        
              })
                .catch((err) => {
                console.log(err)
            })
        }
    },
    mounted() {
        this.getproduct_detail();
    },
}
</script>
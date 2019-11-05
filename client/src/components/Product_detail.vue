<template>
   <div class="container">
        <div class="container is-fluid">
            <div class="container">
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <div class="tile is-child box">
                  <p class="is-pulled-right"> POST {{blog_date}}</p>
                <h1 class="title is-1"> {{product_name}} </h1>
                <h5 class="title is-5"> รายละเอียด : {{product_detail}} </h5>
                <h5 class="subtitle is-5"> ราคา : {{product_price}} </h5>
                <p>จำนวนชิ้น : {{qty}}</p>
                <p>สภาพสินค้า : {{product_condition}}</p>
                <p>การจัดส่ง : {{shipping}}</p>
                <p>ค่าจัดส่ง : {{shippingcost}}</p>
                <hr class="style11">
                <p>{{blog_article}}</p>
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
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }
    },
    mounted() {
        this.getproduct_detail();
    },
}
</script>
<template>
    <div class="container">
        <div class="jumbotron mt-5">
            <h1>ชื่อสินค้า: {{this.product_name}}</h1>
            <hr class="style11">
            <h1>รายละเอียดสินค้า: {{this.product_detail}}</h1>
            <h1>ราคาสินค้า: {{this.product_price}}</h1>
            <h1>จำนวน: {{this.qty}}</h1>
            <h1>สภาพ: {{this.product_condition}}</h1>
            <h1>บริการขนส่ง: {{this.shipping}}</h1>
            <h1>ค่าส่ง: {{this.shippingcost}}</h1>
            <div>
                <button  class=" btn btn-info btn-lg">Add to cart</button>
                <button  type="button"  class=" btn btn-danger btn-lg">Buy now !</button>
            </div>
        </div>
    </div>
</template>
<script>

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
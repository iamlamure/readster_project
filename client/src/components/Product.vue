<template>
     <div class="container">
        <div class="jumbotron mt-5">
            <h1 class="title is-1">เพิ่มสินค้า</h1>
            <h1>{{products.length}}</h1>
            <hr class="style1">
            <form v-on:submit.prevent="addproduct">
                <h1 class="title is-4">ชื่อสินค้า</h1>
                <div class="columns is-mobile is-centered" >
                    <input class="input" type="text" name="product_name">
                </div>
                <h1 class="title is-4">รายละเอียดสินค้า</h1>
                <div class="columns is-mobile is-centered" >
                    <textarea class="textarea" placeholder="10 lines of textarea" rows="10"></textarea>
                </div>
                <div class="columns">
                    <div class="column">
                        <label class="title is-4">ราคา</label>
                        <input class="input" type="text" name="product_name">
                    </div>
                    <div class="column">
                       <label class="title is-4">จำนวน</label>
                        <input class="input" type="text" name="product_name">
                    </div>
                    <div class="column">
                        <label class="title is-4">สภาพ</label>
                        <input class="input" type="text" name="product_name">
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <label class="title is-4">การจัดส่ง</label>
                        <div class="select">
                            <select>
                                <option>REG - ลงทะเบียน</option>
                                <option>EMS - ไปรษณีย์ด่วนพิเศษ</option>
                                <option>KERRY - พัศดุด่วนพิเศษ</option>
                                <option>ผู้ขายจัดส่งเอง</option>
                            </select>
                        </div>
                    </div>
                    <div class="column">
                        <div>
                            <label class="title is-4">ค่าจัดส่ง</label>
                            <input class="input" type="text" name="product_name">
                        </div>
                    </div>
                    <div class="column">
                    </div> 
                </div>   
            </form>
                <hr class="style11">
                <table class="table">
                    <th>ID</th>
                    <th>PRODUCT NAME</th>
                    <th>QTY</th>
                    <th>PRICE</th>
                    <th class="text-right" >ACTION</th>
                    <tr v-for="(product) in products" v-bind:key="product.productid" v-bind:title="product.product_name">
                        <td>{{product.productid}}</td>
                        <td>
                            <h5 @click="getproduct_detail(product.productid)">{{product.product_name}}</h5>
                        </td>
                        <td>{{product.qty}}</td>
                        <td>{{product.product_price}}</td>
                        <td class="text-right">
                            <button  class=" btn btn-info ">Edit</button>
                            <button  v-on:click="deleteproduct(product.productid)" type="button"  class=" btn btn-danger ">Delete</button>
                        </td>
                    </tr>
                </table>
            
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import router from "../router";
export default {
    data(){
        const token = localStorage.usertoken
        return {
            products: [],
            productid:'',
            product_name:'',
            product_detail:'',
            product_img:'',
            product_price:'',
            qty:'',
            product_condition:'',
            shipping:'',
            shippingcost:'',
            token: token
        }
    },
    mounted() {
        this.getproducts()
    },

    methods: {

        addproduct(){
            axios.post('/products/addproduct',
                {
                    product_name: this.product_name,
                    product_detail:this.product_detail,
                    product_img:this.product_img,
                    product_price:this.product_price,
                    qty:this.qty,
                    product_condition:this.product_condition,
                    shipping:this.shipping,
                    shippingcost:this.shippingcost,
                    headers: { 'Authorization': this.token }
                }
            ).then((res) => {
                this.product_name = ''
                this.product_detail = ''
                this.product_img = ''
                this.product_price = ''
                this.qty = ''
                this.product_condition = ''
                this.shipping = ''
                this.shippingcost = ''
                this.getproducts()
                console.log(res)
            }).catch((err) => {
                console.log(err)
                router.push({ name: 'Login' })
            })
        },


        //Get All Products
        getproducts() {
            axios.get('/products/products').then(
                result => {
                    console.log(result.data)
                    this.products = result.data
                },
                error => {
                    console.error(error)
                }
            )
        },

        //Delete Product By ID
        deleteproduct(productid) {
            axios.delete(`/products/products/${productid}`
            ).then((res) => {
                this.getproducts()
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        },

        //get product_detail
        getproduct_detail(productid){
            this.$router.push({
                name:'Product_detail',
                params: {product:productid}
            }).then((res) => {
                this.getproducts()
            }).catch((err)=> {
                console.log(err)
            })
        }
    },
    
}
</script>
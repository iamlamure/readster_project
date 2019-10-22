<template>
     <div class="container">
        <div class="jumbotron mt-5">
            <h1>เพิ่มสินค้า</h1>
            <hr class="style1">
            <form v-on:submit.prevent="addproduct">
                <div class="form-group">
                    <label for="product_name">ชื่อสินค้า</label>
                    <input type="text"  v-model="product_name" class="form-control" name="product_name" placeholder="โปรดระบุชื่อสินค้า">
                </div>
                <div class="form-group">
                    <label for="product_detail">รายละเอียด/เรื่องย่อ</label>
                    <textarea type="text" v-model="product_detail" class="form-control" name="product_detail" placeholder="โปรดระบุราละเอียด/เรื่องย่อ"></textarea>
                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="product_price">ราคา</label>
                        <input type="text" v-model="product_price" class="form-control" name="product_price" placeholder="ราคา">
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="qty">จำนวน</label>
                        <input type="text" v-model="qty" class="form-control" name="qty" placeholder="จำนวน">
                    </div>
                    <div class="col-md-4 mb-3">  
                        <label for="product_condition">สภาพ</label>
                        <select class="form-control" v-model="product_condition" id="product_condition">
                            <option>สินค้าใหม่</option>
                            <option>สินค้ามือสอง</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="product_img">รูปสินค้า</label>
                    <input type="file" name="product_img" >
                </div>
                <hr class="style1">
                <h4>
                    การจัดส่ง
                </h4>
                <div class="form-row">
                    <div class="col-md-4 mb-3">  
                        <label for="shipping">บริการขนส่ง</label>
                        <select class="form-control" v-model="shipping" id="shipping">
                            <option>EMS - ไปรษณีย์ไทย</option>
                            <option>REG - ไปรษณีย์ไทย</option>
                            <option>ส่งด่วน - Kerry</option>
                            <option>ส่งด่วน - DHL</option>
                        </select>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="shippingcost">ค่าจัดส่ง</label>
                        <input type="text" v-model="shippingcost" class="form-control" name="shippingcost" placeholder="ค่าจัดส่ง">
                    </div>
                </div>
                
                <button type="submit" class="btn btn-lg btn btn-success font-weight-bold btn-block">Add Product Now!</button>
                <hr class="style11">
                <table class="table">
                    <th>ID</th>
                    <th>PRODUCT NAME</th>
                    <th>QTY</th>
                    <th>PRICE</th>
                    <th class="text-right" >ACTION</th>
                    <tr v-for="(product) in products" v-bind:key="product.productid" v-bind:title="product.product_name">
                        <td>{{product.productid}}</td>
                        <td>{{product.product_name}}</td>
                        <td>{{product.qty}}</td>
                        <td>{{product.product_price}}</td>
                        <td class="text-right">
                            <button  class=" btn btn-info ">Edit</button>
                            <button  v-on:click="deleteproduct(product.productid)" type="button"  class=" btn btn-danger ">Delete</button>
                        </td>
                    </tr>
                </table>
            </form>
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
        }
    },
    
}
</script>
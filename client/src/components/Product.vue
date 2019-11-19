<template>
     <div class="container">
            <h1 class="title is-1">เพิ่มสินค้า</h1>
            <hr class="style1">
            <form v-on:submit.prevent="addproduct">
                <h1 class="title is-4">ชื่อสินค้า</h1>
                <div class="columns is-mobile is-centered" >
                    <input v-model="product_name" class="input" type="text" name="product_name">
                </div>
                <h1 class="title is-4">รายละเอียดสินค้า</h1>
                <div class="columns is-mobile is-centered" >
                    <textarea v-model="product_detail" class="textarea" placeholder="เพิ่มรายละเอียดสินค้า" rows="10"></textarea>
                </div>
                <div class="columns">
                    <div class="column">
                        <label class="title is-4">ราคา</label>
                        <input v-model="product_price" class="input" type="text" name="product_name">
                    </div>
                    <div class="column">
                       <label class="title is-4">จำนวน</label>
                        <input v-model="qty" class="input" type="text" name="product_name">
                    </div>
                    <div class="column">
                        <div class="select">
                        <label class="title is-4">สภาพ</label>
                            <select v-model="product_condition">
                                <option>สินค้าใหม่</option>
                                <option>สินค้ามือสอง</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="select">
                        <label class="title is-4">การจัดส่ง</label>
                            <select v-model="shipping">
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
                            <input v-model="shippingcost" class="input" type="text" name="product_name">
                        </div>
                    </div>
                    <div class="column">
                        <div class="select">
                        <label class="title is-4">หนังสือที่ขาย : </label>
                            <select v-model="product_book_id" required>
                                <option for="book_id" v-for="(book) in books" v-bind:key="book.bookid" v-bind:title="book.book_name" v-bind:value="book.bookid">{{book.book_name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="column">
                        <div class="select">
                        <label class="title is-4">ขายโดย : </label>
                            <select v-model="product_user_id" required>
                                <option v-bind:value="id">{{first_name}}</option>
                            </select>
                        </div>
                    </div>  
                </div>
                <button class="button is-primary  is-fullwidth">เพิ่มสินค้า</button>   
            </form>
            <div>
                <hr class="style11">
                <h1 class="title is-1">รายการสินค้า</h1>
                <h5 class="title is-5">สินค้าของคุณทั้งหมด {{products.length}} ชิ้น</h5>
                <table class="table is-fullwidth">
                    <thead>
                        <th>ID</th>
                        <th>PRODUCT NAME</th>
                        <th>QTY</th>
                        <th>PRICE</th>
                        <th class="text-right" >ACTION</th>
                    </thead>
                    <tbody>
                        <tr v-for="(product) in products" v-bind:key="product.productid" v-bind:title="product.product_name">
                            <td>{{product.productid}}</td>
                            <td>
                                <h5 @click="getproduct_detail(product.productid)">{{product.product_name}}</h5>
                            </td>
                            <td>{{product.qty}}</td>
                            <td>{{product.product_price}}</td>
                            <td class="text-right">
                                <button  class="button is-warning is-rounded ">Edit</button>
                                <button  v-on:click="deleteproduct(product.productid)" type="button"  class="button is-danger is-rounded">Delete</button>
                            </td>
                        </tr>
                    </tbody>
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
            books: [],
            productid:'',
            product_name:'',
            product_detail:'',
            product_img:'',
            product_price:'',
            qty:'',
            product_condition:'',
            shipping:'',
            shippingcost:'',
            product_user_id :'',
            product_book_id:'',
            first_name:'',
            token: token
        }
    },
    mounted() {
        this.getproducts()
        this.getbooks()
        this.getuser()
    },

    methods: {

        addproduct(){
            axios.post('/products/addproduct',
                {
                productid:this.productid,
                product_name:this.product_name,
                product_detail:this.product_detail,
                product_img:this.product_img,
                product_price:this.product_price,
                qty:this.qty,
                product_condition:this.product_condition,
                shipping:this.shipping,
                shippingcost:this.shippingcost,
                product_user_id :this.product_user_id,
                product_book_id : this.product_book_id,
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
            axios.get('/products/all').then(
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
            axios.delete(`/products/delete/${productid}`
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
        },

        //Show Books
        getbooks () {
            axios.get('/books/all').then(
                result => {
                    console.log(result.data)
                    this.books = result.data
                },
                error => {
                    console.error(error)
                }
            )
        },

        //Get User
        getuser () {
                axios.get('/users/profile', {
                headers: { 'Authorization': this.token }
            }).then(res => {
                this.id = res.data.id
                this.first_name = res.data.first_name
            }).catch(err => {
                console.log(err)
                router.push({ name: 'Login' })
            })
        },

    },
    
}
</script>
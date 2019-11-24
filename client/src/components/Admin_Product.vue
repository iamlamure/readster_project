<template>
    <div class="container">
        <h1 class="title is-1">จัดการสินค้า<router-link class="button is-primary is-rounded" to="Dashboard" >
                หน้าหลัก
        </router-link></h1>
        <table class="table is-fullwidth">
            <thead>
                <th>ID</th>
                <th>PRODUCT NAME</th>
                <th>PRICE</th>
                <th>SHIPPINGCOST</th>
                <th>AMOUNT</th>
                <th class="text-right" >ACTION</th>
            </thead>
                <tbody>
                    <tr v-for="(product) in products" v-bind:key="product.productid" v-bind:title="product.product_name">
                        <td>{{product.productid}}</td>
                        <td>
                            <h5 @click="getproduct_detail(product.productid)">{{product.product_name}}</h5>
                        </td>
                        <td>{{product.product_price}}</td>
                        <td>{{product.shippingcost}}</td>
                        <td>{{product.product_price + product.shippingcost}}</td>
                        <td class="text-right">
                            <button  class="button is-warning is-rounded ">Edit</button>
                            <button  v-on:click="deleteproduct(product.productid)" type="button"  class="button is-danger is-rounded">Delete</button>
                        </td>
                    </tr>
                </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios'
import router from "../router";
export default {
    data() {
        return {
            products: [],
            productid:'',
            product_name:'',
            product_detail:'',
            product_img:'',
            product_price:'',
            amount : '',
            product_condition:'',
            shipping:'',
            shippingcost:'',
            product_user_id :'',
            product_book_id:'',
            first_name:'',
            status: '',
            qty:''
        }
    },
    methods: {
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
            //UserUpdate Status
            axios.put(`/products/update/${productid}`,
                {
                    status : "ยกเลิกสินค้า",
                }
            ).then((res) => {
                this.status = ''
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

    },
    mounted() {
        this.getproducts()
    },

}
</script>
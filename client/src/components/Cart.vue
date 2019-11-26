<template>
    <div class="container">
        <h1 class="title columns is-mobile is-centered">ตะกร้าสินค้า</h1>
        <h1 class="title columns is-mobile is-centered"></h1>
        <hr class="style11">
        <div class="tile is-ancestor">
            <div class="tile is-child box">
                <table class="table is-fullwidth">
                    <thead>
                        <th>สินค้า</th>
                        <th></th>
                        <th>ราคาต่อชิ้น</th>
                        <th>ค่าจัดส่ง</th>
                        <th>ราคารวม</th>
                        <th>action</th>
                    </thead>
                    <tbody>
                        <tr v-for="(cart) in carts" v-bind:key="cart.cartid" v-bind:title="cart.user_buy_address">
                            <td>{{cart.product_id}}</td>
                            <td></td>
                            <td>{{cart.price}}</td>
                            <td>{{cart.shippingcost}}</td>
                            <td>{{cart.price + cart.shippingcost}}</td>
                            <td>
                                <button @click="deleteItemCart(cart.cartid)" class="button is-danger is-outlined is-rounded" href="">ยกเลิก</button>
                                <button @click="getcart_topayment(cart.cartid)" class="button is-info is-rounded">ชำระเงิน</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
            carts:[],
            cartid:'',
            product_id:'',
            price:'',
            user_id:'',
            qty:'',
            shippingcost:'',
            amount:'',
            status:'',
            token: token,
        }
    },
    mounted() {
        this.getallcart()
        //this.getcart_topayment()
        //this.deleteItemCart()
        this.getusercart()
        this.getuser()
    },
    methods: {
    // Get cart by userid
         getusercart () {
           axios.get('/users/profile',{
            headers: { 'Authorization': this.token }
           }).then(res => {
               this.id = res.data.id
               axios.get(`/carts/user/${this.id}`).then(
                result => {
                    console.log(result.data)
                    this.carts = result.data
                },
                error => {
                    console.error(error)
                }
            )
           })   
        },

        getallcart() {
            axios.get('/carts/all').then(
                result => {
                    console.log(result.data)
                    this.carts = result.data
                }
            )
        },
        getcart_topayment(cartid){
            this.$router.push({
                name:'Payment',
                params: {cart:cartid}
            }).then((res) => {
                    console.log(res)
            }).catch((err)=> {
                console.log(err)
            })
        },
        //Delete Product By ID
        deleteItemCart(cartid) {
            axios.delete(`/carts/delete/${cartid}`
            ).then((res) => {
                this.getusercart()
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        },
        getuser() {
            axios.get('/users/profile', {
                headers: { 'Authorization': this.token }
            }).then(res => {
                this.id = res.data.id
                this.first_name = res.data.first_name
                this.last_name = res.data.last_name
                this.email = res.data.email
            }).catch(err => {
                console.log(err)
                router.push({ name: 'Login' })
            })
        },
    }
}
</script>
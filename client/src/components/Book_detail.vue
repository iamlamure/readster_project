<template>
        <div class="container">
            <h1 class="title"> ข้อมูลหนังสือ : {{book_name}} </h1>
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-parent">
                    <div class="tile is-child box">
                        <article class="media">
                            <div class="media-left">
                                <figure class="image">
                                    <img  :src="book_img" />
                                </figure>
                            </div>
                            <div class="media-content is-mobile">
                                <div class="content">
                                    <!-- @click insert book to Fevbook -->
                                    <!--<button class="button is-primary is-outlined is-rounded is-pulled-right">เพิ่มในชั้นหนังสือ</button>-->
                                    <p class="title">{{book_name}}</p>
                                    <h4 class="title id-4">ผู้เขียน : {{author_name}}</h4>
                                    <h6 class="title id-6">สำนักพิมพ์ : {{publisher}}</h6>
                                    <h6 class="title id-6">รายละเอียด และ เรื่องย่อ</h6>
                                    <div class="content">
                                        <dl>
                                            <li>ราคา : {{price}}</li>
                                            <li>หน้า : {{pages}}</li>
                                        </dl>
                                    </div>
                                    <p>{{book_detail}}</p>
                                    <div class="tile is-child box">
                                        <div class="container">
                                            <h4 class="title is-4">รายการขายหนังสือเล่มนี้</h4>
                                            <!-- @click gotoProduct Detail -->
                                            <div class="table-container">
                                                <table class="table">
                                                <thead>
                                                    <th>ชื่อสินค้า</th>
                                                    <th>สภาพ</th>
                                                    <th>ราคา</th>
                                                    <th></th>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(product) in products" v-bind:key="product.productid" v-bind:title="product.product_name">
                                                        <td>{{product.product_name}}</td>
                                                        <td>{{product.product_condition}}</td>
                                                        <td>{{product.product_price}}</td>
                                                        <td><button v-on:click="addcart(product.productid)" class="button is-link is-outlined">เพิ่มลงตะกร้าสินค้า</button></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-parent">
                    <div class="tile is-child box">
                        <!-- @click gotoBookReview  -->
                        <!--<button class="button is-warning is-rounded is-pulled-right">เขียนรีวิว</button>-->
                        <h1 class="title"> รวมบทความเกี่ยวกับหนังสือเล่มนี้ !</h1>
                        <div class="columns is-multiline">
                        <div class="tile is-ancestor column is-6">
                            <div class="column tile is-mobile is-parent" v-for="(blog) in blogs" v-bind:key="blog.blogid" v-bind:title="blog.blog_title">
                                <div v-on:click="gotodetail(blog.blogid)" class="tile is-child box" >
                                    <article class="media">
                                        <div class="media-left">
                                        </div>
                                        <div class="media-cnp,ontent">
                                        <div class="content">
                                            <p>
                                            <strong>{{blog.blog_title}}</strong> <small> เมื่อวันที่ {{blog.blog_date}}</small>
                                            <br>
                                            </p>
                                            <h6 class="subtitle is-6">เขียนโดย : {{blog.first_name}}</h6>
                                        </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import axios from 'axios'
import router from '../router'

export default {
    name: 'Book_detail',
    data() {
        const token = localStorage.usertoken
        return {
            books :[],
            products:[],
            blogs:[],
            product_name:'',
            book_name:'',
            author_name: '',
            book_detail: '',
            publisher: '',
            category: '',
            price: '',
            pages: '',
            book_img: '',
            first_name:'',
            token : token
        }
    },
    methods: {
        getbook_detail(book){
            axios.get(`/books/book_detail/${this.$route.params.book}`
            ).then((res) => {
               this.book_name = res.data.book_name,
                this.author_name = res.data.author_name,
                this.book_detail = res.data.book_detail,
                this.publisher = res.data.publisher,
                this.category = res.data.category,
                this.price = res.data.price,
                this.pages = res.data.pages,
                this.book_img = res.data.book_img
                console.log(res)
            }).catch((err => {
                console.error(error)   
            })
            )
        },

        getbooksell(book){
            axios.get(`/products/booksell/get_all/${this.$route.params.book}`
            ).then(result => {
                    console.log(result.data)
                    this.products = result.data
                },
                error => {
                    console.error(error)
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
                  axios.post('/carts/addcart',{
                    product_id : this.productid,
                    price : this.price,
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
                    router.push({ name: 'Cart' })
                    //this.getproducts()
                })
                })        
              })
                .catch((err) => {
                console.log(err)
            })
        },
        getuser () {
            axios.get('/users/profile', {
                headers: { 'Authorization': this.token }
            }).then(res => {
                this.id = res.data.id
                this.first_name = res.data.first_name
                this.last_name = res.data.last_name
                this.email = res.data.email
            }).catch(err => {
                console.log(err)
                //router.push({ name: 'Login' })
            })
        },
        getblog_book(book){
            axios.get(`/blogview/book/review/${this.$route.params.book}`
            ).then(result => {
                console.log(result.data)
                this.blogs = result.data
            },
            error => {
                console.error(error)
            })
        },

        // Gotoreadblog
        gotodetail(blogid){
            this.$router.push({
                name:'Read',
                params:{blog:blogid}
            }).then((res) => {
                this.getblog()
            }).catch((err) => {
                console.log(err)
            })
        },
        
    },
    mounted() {
        this.getbook_detail()
        this.getbooksell()
        this.getblog_book()
    },
}
</script>
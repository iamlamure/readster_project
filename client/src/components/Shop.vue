<template>
    <div class="container">
        <h1 class="title columns is-mobile is-centered">รายการสินค้าทั้งหมด</h1>
        <br>
        <div class="columns is-centered">
        <div class="column is-half ">
          <p class="bd-notification is-primary">
            <input class="input is-rounded" type="text" placeholder="สินค้าที่ต้องการ">
          </p>
        </div>
      </div>
        <hr class="style11">
        <br>
        <div class="tile is-ancestor">
            <div class="tile is-child box">
                <h4 class="title is-4"> สินค้ามาใหม่วันนี้ </h4>
                <div class="container">
                    <div class="columns is-multiline">
                        <div class="column tile is-2 is-vertical is-mobile is-parent is-narrow" v-for="(product) in products" v-bind:key="product.productid" v-bind:title="product.product_name">
                            <div  class="tile is-child box">
                                <div @click="getproduct_detail(product.productid)" class="card-image has-text-centered">
                                    <figure class="image is-inline-block">
                                        <img src="https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/9/7/9786163016942.jpg">
                                    </figure>
                                </div>
                                <h6  class="title columns is-mobile is-centered card-header-title is-6">{{product.product_name}}</h6>
                                <h6  class="subtitle columns is-mobile is-centered is-6 color-is">฿ {{product.product_price}}</h6>
                                <a @click="addcart(product.productid)" class="button columns is-centered is-primary is-outlined is-rounded is-small">Add Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <section>
        <hr class="style11">
        <div class="tile is-ancestor">
            <div class="tile is-child box">
                <h4 class="title is-4"> สินค้าที่ถูกรีวิวมากที่สุด </h4>
                <div class="container">
                    <div class="columns is-multiline">
                        <div class="column tile is-2 is-vertical is-mobile is-parent is-narrow">
                            <div class="tile is-child box">
                                <div class="card-image has-text-centered">
                                    <figure class="image is-inline-block">
                                        <img src="https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/9/7/9786163016560.jpg">
                                    </figure>
                                </div>
                                <h5  class="title columns is-mobile is-centered card-header-title is-5">เซเปียนส์: ประวัติย่อมนุษยชาติ</h5>
                                <h6  class="title columns is-mobile is-centered is-6">฿450</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>
</template>
<script>
    import axios from 'axios'
    import router from "../router";
export default {
    data() {
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
            //token: token
    }
},
mounted() {
    this.getproducts()
    this.addcart(productid)
},

methods: {
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
        
         addcart(productid){
            axios.post('/carts/addcart',
            {
                productid:productid,
                price:req.data.product_price,
                qty:req.data.qty,
                shippingcost:req.data.shippingcost,
                amount:'',
                status:''
            }
        ).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
            
        }
},

    
}
</script>
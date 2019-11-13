<template>
        <div class="container">
            <h1 class="title"> ข้อมูลหนังสือ : {{book_name}} </h1>
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-parent">
                    <div class="tile is-child box">
                        <article class="media">
                            <div class="media-left">
                                <figure class="image">
                                    <img src="http://www.kalyanamitra.org/th/images/book/MAGAZINE/hopevol_10.jpg" alt="Image">
                                </figure>
                            </div>
                            <div class="media-content is-mobile">
                                <div class="content">
                                    <!-- @click insert book to Fevbook -->
                                    <button class="button is-primary is-outlined is-rounded is-pulled-right">เพิ่มในชั้นหนังสือ</button>
                                    <p class="title">{{book_name}}</p>
                                    <h4 class="title id-4">ผู้เขียน : {{author_name}}</h4>
                                    <h6 class="title id-6">สำนักพิมพ์ : {{publisher}}</h6>
                                    <h6 class="title id-6">รายละเอียด และ เรื่องย่อ</h6>
                                    <div class="content">
                                        <dl>
                                            <li>ราคา : {{price}}</li>
                                            <li>หน้า : {{pages}}</li>
                                            <li>หมวดหมู่ : {{category}}</li>
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
                                                    <th>ราคา</th>
                                                    <th>ผู้ขาย</th>
                                                    <th></th>
                                                </thead>
                                                <tbody>
                                                    <td>เล่นดนตรีง่ายๆสไตล์ตะวัน สภาพดี</td>
                                                    <td>150</td>
                                                    <td>Nattaphong</td>
                                                    <td><button class="button is-link is-outlined">เพิ่มลงตะกร้าสินค้า</button></td>
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
                        <button class="button is-warning is-rounded is-pulled-right">เขียนรีวิว</button>
                        <h1 class="title"> รวมบทความเกี่ยวกับหนังสือเล่มนี้ !</h1>
                        <div class="columns is-multiline">
                        <div class="tile is-ancestor column is-6">
                            <div class="column tile is-mobile is-parent">
                                <div class="tile is-child box">
                                    <article class="media">
                                        <div class="media-left">
                                        <figure class="image is-64x64">
                                            <img src="http://www.kalyanamitra.org/th/images/book/MAGAZINE/hopevol_10.jpg" alt="Image">
                                        </figure>
                                        </div>
                                        <div class="media-content">
                                        <div class="content">
                                            <p>
                                            <strong>Nattaphong Kajud</strong> <small>เมื่อ 15 วันที่แล้ว</small>
                                            <br>
                                                หนังสือสอนเล่นดนตรีที่ไม่ใช่เพียงว่า เล่นพื้นฐาน แต่ยังสอดแทรกเทคนิคการเล่นอย่างไรให้เข้าถึงอารมณ์และประยุกต์ใช้
                                            </p>
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
        return {
            book_name:'',
            author_name: '',
            book_detail: '',
            publisher: '',
            category: '',
            price: '',
            pages: '',
            book_img: ''
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
            }).catch((err) => {
                console.log(err)
            })
        },
        
    },
    mounted() {
        this.getbook_detail()
    },
}
</script>
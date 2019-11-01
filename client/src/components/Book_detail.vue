<template>
        <div class="container">
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-parent">
                    <div class="tile is-child box">
                        <article class="media">
                            <div class="media-left">
                                <figure class="image">
                                    <img src="https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/b/o/book_l_less.png" alt="Image">
                                </figure>
                            </div>
                            <div class="media-content">
                                <div class="content">
                                    <a class="button is-warning is-rounded is-pulled-right" href="">เขียนรีวิว</a>
                                    <p class="title">{{book_name}}</p>
                                    <h4 class="title id-4">ผู้เขียน : {{author_name}}</h4>
                                    <h6 class="title id-6">รายละเอียด</h6>
                                    <p>{{book_detail}}</p>
                                    <div class="tile is-child box">
                                        <div class="container">
                                            <h4 class="title is-4">รายการขายหนังสือเล่มนี้</h4>
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
                        <h1 class="title"> รวมรีวิวหนังสือเล่มนี้ !</h1>
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
        }
    },
    mounted() {
        this.getbook_detail()
    },
}
</script>
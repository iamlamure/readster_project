<template>
    <div class="container">
        <div class="jumbotron mt-5">
            <h1>ชื่อหนังสือ:  {{this.book_name}}</h1>
            <hr class="style11">
            <h1>ผู้แต่ง/ผู้เขียน:  {{this.author_name}}</h1>
            <h1>รายละเอียด:  {{this.book_detail}}</h1>
            <h1>สำนักพิมพ์:  {{this.publisher}}</h1>
            <h1>หมวดหมู่:  {{this.category}}</h1>
            <h1>ราคาปก:  {{this.price}} บาท</h1>
            <h1>จำนวนหน้า:  {{this.pages}} หน้า</h1>
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
<template>
<div>
    <div class="container is-fluid">
    <h1 class="title columns is-mobile is-centered">รายการหนังสือ</h1>
      <hr class="style11">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
            <article class="tile is-child box">
                <div class="card-content">
                    <p class="title">
                    รับราชกาลยังไงให้ได้
                    </p>
                    <p class="subtitle">
                    Jeff Atwood
                    </p>
                </div>
                <footer class="card-footer">
                    <p class="card-footer-item">
                    <a>
                       เพิ่มลงตะกร้า
                    </a>
                    </p>
                    <p class="card-footer-item">
                    <a>
                        ซื้อทันที!
                    </a>
                    </p>
                </footer>
            </article>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child box">
            <p class="title">Two</p>
            <p class="subtitle">Subtitle</p>
            </article>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child box">
            <p class="title">Three</p>
            <p class="subtitle">Subtitle</p>
            </article>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child box">
            <p class="title">Four</p>
            <p class="subtitle">Subtitle</p>
            </article>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child box">
            <p class="title">Five</p>
            <p class="subtitle">Subtitle</p>
            </article>
        </div>
    </div>
</div>
</div>
</template>
<!-- eslint-disable -->
</template>

<script>

import axios from 'axios'
import router from '../router'

export default {

    data () {

        const token = localStorage.usertoken

        return {
               books:[],
               bookid:'',
               book_name:'',
               author_name: '',
               book_detail: '',
               publisher: '',
               category: '',
               price: '',
               pages: '',
               book_img: '',
               id:'',
               token: token,
               first_name:''

        }
    },
    mounted() {
        this.getbooks()
        this.getuser()
    },

    methods: {

        //Add Book
        addbook () {
            axios.post('/books/addbook',
                {
                    book_name: this.book_name,
                    author_name: this.author_name,
                    book_detail: this.book_name,
                    publisher: this.publisher,
                    category: this.category,
                    price: this.price,
                    pages: this.pages,
                    book_img: this.book_img
                },
            ).then((res) => {
                this.book_name =''
                this.author_name = ''
                this.book_detail = ''
                this.publisher = ''
                this.category = ''
                this.price = ''
                this.pages = ''
                this.getbooks()
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        },

        //Show Books
        getbooks () {
            axios.get('/books/books').then(
                result => {
                    console.log(result.data)
                    this.books = result.data
                },
                error => {
                    console.error(error)
                }
            )
        },

        //Delete Book by id
        deletebook (bookid) {
            axios.delete(`/books/books/${bookid}`
            ).then((res) => {
                this.getbooks()
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        },

        //getbookdetail
        getbookdetail(bookid) {
            this.$router.push({
                name:'Book_detail',
                params: {book:bookid}
            }).then((res) => {
                this.getbooks()
                this.getuser()
            }).catch((err) => {
                console.log(err)
            })
        },

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
    }
    }
/*

        ยังขาด Update & Upload
        
*/

}
</script>


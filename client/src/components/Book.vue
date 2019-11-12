<template>
<div>
    <div class="container is-fluid">
    <h1 class="title columns is-mobile is-centered">รายการหนังสือ</h1>
    {{ books.length }}
      <hr class="style11">
      <br>
      <div class="container">
          <div class="columns is-multiline">
            <div class="column tile is-3 is-vertical is-mobile is-parent is-narrow" v-for="(book) in books" v-bind:key="book.bookid" v-bind:title="book.book_name" >
                <div @click="getbookdetail(book.bookid)" class="tile is-child box">
                    <div class="card-image has-text-centered">
                        <figure class="image is-inline-block">
                            <img src="https://readery.co/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/b/o/book_l_less.png">
                        </figure>
                    </div>
                    <h5  class="title columns is-mobile is-centered card-header-title is-5">{{book.book_name}}</h5>
                    <h6  class="title columns is-mobile is-centered is-6">฿{{book.price}}</h6>
                </div>
            </div>
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
                //router.push({ name: 'Login' })
        })
    }
    }
/*

        ยังขาด Update & Upload
        
*/

}
</script>


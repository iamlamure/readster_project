<template>
  <div class="container is-fluid">
    <div class="container">
      <h1 class="title  columns is-mobile is-centered"> ค้นพบบทความ และ หนังสือที่คุณถูกใจ </h1>
      <br>
      <div class="columns is-centered">
        <div class="column is-half ">
          
        </div>
      </div>
      <hr class="style11">
      <br>
      <h4 class="title is-4"> หนังสือใหม่ </h4>
        <div class="container">
          <div class="columns is-multiline">
            <div class="column tile is-2 is-vertical is-mobile is-parent is-narrow" v-for="(book) in books" v-bind:key="book.bookid" v-bind:title="book.book_name">
                <div @click="getbookdetail(book.bookid)" class="tile is-child box">
                    <div class="card-image has-text-centered">
                        <figure class="image is-inline-block">
                            <img src="https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/9/7/9786163016942.jpg">
                        </figure>
                    </div>
                        <h5  class="title columns is-mobile is-centered card-header-title is-5">{{book.book_name}}</h5>
                        <h6  class="title columns is-mobile is-centered is-6 color-is">฿{{book.price}}</h6>
                </div>
            </div>
          </div>
        </div>
      <br>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {
  data(){
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
  }
  },
  mounted() {
        this.getbooks()
  },
  methods: {
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
  },
}
</script>
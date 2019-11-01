<template>
  <div class="container">
    <div class="jumbotron mt-5">
      <div class="col-sm-8 mx-auto">
        <h1 class="text-center">WELCOME</h1>
        <form>
          <h1 class="title columns is-centered">ค้นพบ บทความ หรือ หนังสือที่ตรงตามใจคุณ</h1>
          <input class="input" type="text" name="bookname" v-model="search">
        </form>
        <div>
          <ul>
            <li v-for="(book) in books" v-bind:key="book.bookid" v-bind:title="book.book_name" >{{book.book_name}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
    book_name:"",
    books:[],
    search:"",
  }
  },
  mounted() {
        this.getbooks()
  },
  methods: {
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
  },
}
</script>
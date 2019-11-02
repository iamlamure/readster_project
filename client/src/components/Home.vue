<template>
  <div class="container is-fluid">
    <div class="container is-fluid">
      <h1 class="title  columns is-mobile is-centered"> ค้นพบบทความ และ หนังสือที่คุณถูกใจ </h1>
      <br>
      <div class="columns is-centered">
        <div class="column is-half ">
          <p class="bd-notification is-primary">
            <input class="input is-rounded" type="text" placeholder="บทความ หรือ หนังสือ">
          </p>
        </div>
      </div>
      <hr class="style11">
      <br>
      <h4 class="title is-4"> หนังสือใหม่ </h4>
      <div class="container">
          <div class="columns is-multiline">
            <div class="column tile is-2 is-vertical is-mobile is-parent is-narrow">
                <div class="tile is-child box">
                    <div class="card-image has-text-centered">
                        <figure class="image is-inline-block">
                            <img src="https://readery.co/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/b/o/book_l_less.png">
                        </figure>
                    </div>
                    <h5  class="title columns is-mobile is-centered card-header-title is-5">ชื่อหนังสือ</h5>
                    <h6  class="title columns is-mobile is-centered is-6">฿ราคา</h6>
                </div>
            </div>
        </div>
      </div>
      <br>
      <h4 class="title is-4"> วรรณกรรมใหม่ </h4>
      <div class="container">
          <div class="columns is-multiline">
            <div class="column tile is-2 is-vertical is-mobile is-parent is-narrow">
                <div class="tile is-child box">
                    <div class="card-image has-text-centered">
                        <figure class="image is-inline-block">
                            <img src="https://readery.co/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/b/o/book_l_less.png">
                        </figure>
                    </div>
                    <h5  class="title columns is-mobile is-centered card-header-title is-5">ชื่อหนังสือ</h5>
                    <h6  class="title columns is-mobile is-centered is-6">฿ราคา</h6>
                </div>
            </div>
        </div>
      </div>
      <br>
      <h4 class="title is-4"> Fiction </h4>
      <div class="container">
          <div class="columns is-multiline">
            <div class="column tile is-2 is-vertical is-mobile is-parent is-narrow">
                <div class="tile is-child box">
                    <div class="card-image has-text-centered">
                        <figure class="image is-inline-block">
                            <img src="https://readery.co/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/b/o/book_l_less.png">
                        </figure>
                    </div>
                    <h5  class="title columns is-mobile is-centered card-header-title is-5">ชื่อหนังสือ</h5>
                    <h6  class="title columns is-mobile is-centered is-6">฿ราคา</h6>
                </div>
            </div>
        </div>
      </div>
      <br>
      <h4 class="title is-4"> How to </h4>
      <div class="container">
          <div class="columns is-multiline">
            <div class="column tile is-2 is-vertical is-mobile is-parent is-narrow">
                <div class="tile is-child box">
                    <div class="card-image has-text-centered">
                        <figure class="image is-inline-block">
                            <img src="https://readery.co/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/b/o/book_l_less.png">
                        </figure>
                    </div>
                    <h5  class="title columns is-mobile is-centered card-header-title is-5">ชื่อหนังสือ</h5>
                    <h6  class="title columns is-mobile is-centered is-6">฿ราคา</h6>
                </div>
            </div>
        </div>
      </div>
      <hr class="style11">
      <br>
      <h4 class="title is-4"> รีวิวใหม่ </h4>
      <div class="container">
          <div class="columns is-multiline">
            <div class="column tile is-2 is-vertical is-mobile is-parent is-narrow">
                <div class="tile is-child box">
                    <div class="card-image has-text-centered">
                        <figure class="image is-inline-block">
                            <img src="https://readery.co/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/b/o/book_l_less.png">
                        </figure>
                    </div>
                    <h5  class="title columns is-mobile is-centered card-header-title is-5">ชื่อหนังสือ</h5>
                    <h6  class="title columns is-mobile is-centered is-6">฿ราคา</h6>
                  </div>
            </div>
        </div>
      </div>     
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
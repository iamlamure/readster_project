<template>
<div class="container">
    <div class="jumbotron mt-5">
        <h1>เพิ่มหนังสือ</h1>
        <form v-on:submit.prevent="addbook">
          <div class="form-group">
            <label for="book_name">ชื่อหนังสือ</label>
            <input type="text" v-model="book_name" class="form-control" name="book_name" placeholder="โปรดระบุชื่อหนังสือ">
          </div>
          <div class="form-group">
            <label for="name">ผู้เขียน/ผู้แต่ง</label>
            <input type="text" v-model="author_name" class="form-control" name="author_name" placeholder="โปรดระบุชื่อผู้เขียน">
          </div>
          <div class="form-group">
            <label for="book_detail">รายละเอียด/เรื่องย่อ</label>
            <input type="text" v-model="book_detail" class="form-control" name="book_detail" placeholder="โปรดระบุราละเอียด/เรื่องย่อ">
          </div>
          <div class="form-group">
            <label for="publisher">สำนักพิมพ์</label>
            <input type="text" v-model="publisher" class="form-control" name="publisher" placeholder="สำนักพิมพ์">
          </div>
          <div class="form-group">
            <label for="category">หมวดหมู่</label>
            <input type="text" v-model="category" class="form-control" name="category" placeholder="หมวดหมู่">
          </div>
          <div class="form-group">
            <label for="price">ราคา</label>
            <input type="text" v-model="price" class="form-control" name="price" placeholder="ราคา">
          </div>
          <div class="form-group">
            <label for="pages">จำนวนหน้า</label>
            <input type="text" v-model="pages" class="form-control" name="pages" placeholder="ระบุจำนวนหน้า">
          </div>
          <button type="submit" class="btn btn-lg btn-primary btn-block">Add Book Now!</button>
        </form>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import router from '../router'

export default {

    data () {
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
                }
            ).then((res) => {
                router.push({ name: 'profile'})
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }
    }


}
</script>
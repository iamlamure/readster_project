<template>
    <div class="container">
        <div class="jumbotron mt-5">
            <h1>เพิ่มหนังสือ</h1>
            <h6>ชื่อผู้ใช้ <span class="badge badge-secondary">{{first_name}}</span></h6>
            <hr class="style11">
            <form v-on:submit.prevent="addbook">
                <div class="form-group">
                    <label for="book_name">ชื่อหนังสือ</label>
                    <input type="text" v-model="book_name" class="form-control" name="book_name" placeholder="โปรดระบุชื่อหนังสือ">
                </div>
                <div class="form-group">
                        <label for="book_detail">รายละเอียด/เรื่องย่อ</label>
                        <textarea type="text" v-model="book_detail" class="form-control" name="book_detail" placeholder="โปรดระบุราละเอียด/เรื่องย่อ"></textarea>
                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="name">ผู้เขียน/ผู้แต่ง</label>
                        <input type="text" v-model="author_name" class="form-control" name="author_name" placeholder="โปรดระบุชื่อผู้เขียน">
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="publisher">สำนักพิมพ์</label>
                        <input type="text" v-model="publisher" class="form-control" name="publisher" placeholder="สำนักพิมพ์">
                    </div>
                     <div class="col-md-4 mb-3">
                        <label for="category">หมวดหมู่</label>
                        <input type="text" v-model="category" class="form-control" name="category" placeholder="หมวดหมู่">
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="price">ราคา</label>
                        <input type="text" v-model="price" class="form-control" name="price" placeholder="ราคา">
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="pages">จำนวนหน้า</label>
                        <input type="text" v-model="pages" class="form-control" name="pages" placeholder="ระบุจำนวนหน้า">
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="pages">อัพโหลดรูปหน้าปกหนังสือ</label>
                        <input type="file" name="book_img" >
                    </div>
                </div>
                
                <div>
                    <button type="submit" class="btn btn-lg btn-success font-weight-bold btn-block">Add Book Now!</button>
                </div>
                <hr class="style11">
                <h1>userid : {{id}}</h1>
                <div class="table-responsive-md">
                    <table class="table">
                    <thead>
                        <tr class="thead-dark">
                            <th>ID</th>
                            <th>Cover</th>
                            <th>Book Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tr v-for="(book) in books" v-bind:key="book.bookid" v-bind:title="book.book_name" >
                        <td>{{book.bookid}}</td>
                        <td>
                            {{book.book_img}}
                        </td>
                        <td>
                            <h5 @click="getbookdetail(book.bookid)">{{book.book_name}}</h5>
                        </td>
                        <td class="text-right">
                            <button v-on:click="editTask(todo.task_name, todo.id)" class=" btn btn-info ">Edit</button>
                            <button v-on:click="deletebook(book.bookid)" class=" btn btn-danger ">Delete</button>
                        </td>
                    </tr>
                </table>
                </div>
            </form>
        </div>
    </div>
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


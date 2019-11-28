<template>
    <div class="container">
         <h1 class="title is-1">จัดการหนังสือ<router-link class="button is-primary is-rounded" to="Dashboard" >
                หน้าหลัก
        </router-link></h1>
         <form v-on:submit.prevent="addbook">
                <div class="columns is-mobile is-centered" >
                    <input v-model="book_name" class="input is-medium title is-5" type="text" name="product_name" placeholder="ชื่อหนังสือ">
                </div>
                <h1 class="title is-4">รายละเอียดหนังสือ</h1>
                <div class="columns is-mobile is-centered" >
                    <textarea v-model="book_detail" class="textarea" placeholder="แบ่งปันประสบการณ์ที่นี่" rows="20"></textarea>
                </div>
                <div class="columns">
                    <div class="column">
                        <label class="title is-4">ชื่อผู้เขียน </label>
                        <input v-model="author_name" class="input" type="text">
                    </div>
                    <div class="column">
                        <label class="title is-4">สำนักพิมพ์ : </label>
                        <input v-model="publisher" class="input" type="text">
                    </div>
                    <div class="column">
                        <label class="title is-4">ราคา : </label>
                        <input v-model="price" class="input" type="text">
                    </div>
                    <div class="column">
                        <label class="title is-4">จำนวนหน้า : </label>
                        <input v-model="pages" class="input" type="text">
                    </div>
                </div>
                <button class="button is-primary is-fullwidth title is-4">เพิ่มหนังสือ</button>   
            </form>
            <hr class="style11">
        <table class="table is-fullwidth">
            <thead>
                <th>ID</th>
                <th></th>
                <th>BOOK NAME</th>
                <th class="text-right" ></th>
            </thead>
            <tbody>
                <tr v-for="(book) in books" v-bind:key="book.bookid" v-bind:title="book.book_name">
                    <td>{{book.bookid}}</td>
                    <td></td>
                    <td>
                        <h5 @click="getbookdetail(book.bookid)">{{book.book_name}}</h5>
                    </td>
                    <td class="text-right">
                        <button  v-on:click="deletebook(book.bookid)" type="button"  class="button is-danger is-rounded">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>           
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
    methods: {
        bookedit(){

        },
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
                    //book_img: this.book_img
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
        getbooks() {
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

         //Delete Book by id
        deletebook(bookid) {
            axios.put(`/books/update/${bookid}`,
            {
                    status : "ระงับหนังสือ",
            }
            ).then((res) => {
                this.status = ''
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
    },
    mounted() {
        this.getbooks()
    },
}
</script>
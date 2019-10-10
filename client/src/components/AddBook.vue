<template>
<div class="container">
    <div class="jumbotron mt-5">
        <h1>เพิ่มหนังสือ</h1>
            <form v-on:submit.prevent="addbook">
                <div class="container">
                    <div>
                        <input type="text" v-model="book_name" class="form-control" placeholder="ชื่อหนังสือ">
                        <input type="text" v-model="author_name" class="form-control" placeholder="ผู้เขียน">
                        <div class="form-group">         
                        </div>
                        <div class="form-group">
                            <label for="bookdetail">รายละเอียด/เนื้อเรื่องย่อ</label>
                            <textarea v-model="book_detail" class="form-control" id="bookdetail" rows="3"></textarea>
                        </div>

                        <!-- Vue IF dropdown-->
                        <div class="form-row">
                            <div class="form-group col-md-2">
                                <!-- Vue IF dropdown-->
                                <select class="form-control" v-model="publisher" id="exampleFormControlSelect1">
                                <option>SE-ED</option>
                                <option>แสงดาว</option>
                                <option>นายอินทร์</option>
                                <option>สยามดรีม</option>
                                <option>ป๊อป</option>
                            </select>
                            </div>
                            <div class="form-group col-md-2">
                                <!-- Vue IF dropdown-->
                            <select class="form-control" v-model="category" id="exampleFormControlSelect2">
                                <option>เลือกหมวดหมู่</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            </div>
                            <div class="form-group col-md-2">
                                <input type="number" v-model="price" class="form-control" placeholder="ราคา">
                            </div>
                            <div class="form-group col-md-2">
                                <input type="number" v-model="pages" class="form-control" placeholder="จำนวนหน้า">
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-lg btn-block">บันทึก</button>
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
        return {
               book_name:'',
               author_name: '',
               book_detail: '',
               publisher: '',
               category: '',
               price: '',
               pages: '',
               //book_img: ''
        }
    },

    methods: {
        addbook() {
            axios.post('/books/addbook',
                {
                    book_name: this.book_name,
                    author_name: this.author_name,
                    book_detail: this.book_name,
                    publisher: this.publisher,
                    category: this.category,
                    price: this.price,
                    pages: this.pages,
                   // book_img: this.book_img  
                }
            ).then((res) => {
                router.push({ name: 'Addbook'})
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }
    }


}
</script>
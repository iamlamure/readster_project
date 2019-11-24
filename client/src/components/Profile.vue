<template>
  <div class="container">
      <h1 class="title columns is-mobile is-centered"> ข้อมูลผู้ใช้ </h1>
      <hr class="style11">
      <div class="tile is-ancestor">
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <br>
          <h3 class="title is-3 columns is-mobile is-centered">{{first_name}} {{last_name}}</h3>
          <p></p>
          <h5 class="subtitle is-5 columns is-mobile is-centered">{{email}}</h5>
          <br>
          <div>
            <!--<router-link class="button is-info is-fullwidth title is-6" to="/user/user_detail">อัพเดทข้อมูลผู้ใช้</router-link>-->
          </div>
        </div>
        <div class="tile is-child box">
          <h3 class="title is-3">ซื้อ / ขาย</h3>
          <br>
              <router-link class="button is-warning is-fullwidth title is-6" to="/product">จัดการสินค้า</router-link>
              <router-link class="button is-danger is-fullwidth title is-6" to="/sell">จัดการการขาย</router-link>
              <router-link class="button is-success is-fullwidth title is-6" to="/user/purchase">การสั่งซื้อของฉัน</router-link>
        </div>
      </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            <a class="title">บทความของคุณ</a>
            <router-link class="button is-primary is-rounded is-pulled-right" to="write_blog">เขียนรีวิว</router-link>
            <div class="container">
              <table class="table is-fullwidth">
                <thead>
                  <th class="subtitle is-5">ชื่อเรื่อง</th>
                  <th class="subtitle is-5">วันที่</th>
                  
                  <th></th>
                </thead>
                <tbody>
                  <tr v-for="(blog) in blogs" v-bind:key="blog.blogid" v-bind:title="blog.blog_title">
                    <td><a v-on:click="gotodetail(blog.blogid)">{{blog.blog_title}}</a></td>
                    <td>{{blog.blog_date}}</td>
                    
                    <td>
                      <button v-on:click="deleteBlog(blog.blogid)" class="button is-danger is-small is-rounded is-pulled-right">Delete</button>
                      <button class="button is-warning is-small is-rounded is-pulled-right">Edit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br>
            </div>
          </div>
        </div>
      </div>
      <hr class="style11">
      <!--
      <section class="section columns is-half is-centered">
        <div class="container">
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <div class="tile is-child box">
                <h4 class="title is-4"> ชั้นหนังสือของคุณ </h4>
                 <div class="columns is-multiline">
                  <div class="column tile is-2 is-vertical is-mobile is-parent is-narrow">
                      <div class="tile is-child box">
                          <div class="card-image has-text-centered">
                              <figure class="image is-inline-block">
                                  <img src="https://readery.co/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/b/o/book_l_less.png">
                              </figure>
                          </div>
                          <h6  class="title columns is-mobile is-centered card-header-title is-6">ชื่อหนังสือ</h6>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      -->
  </div>
</template>

<script>
import router from '../router'
import axios from 'axios'

export default {
  data () {
    const token = localStorage.usertoken
    
    return {
      blogs:[],
      id:'',
      first_name: '',
      last_name: '',
      email: '',
      userblogid:'',
      token: token
    }
  },
  methods: {
    getuser () {
      axios.get('/users/profile', {
        headers: { 'Authorization': this.token }
      }).then(res => {
        this.id = res.data.id
        this.first_name = res.data.first_name
        this.last_name = res.data.last_name
        this.email = res.data.email
      }).catch(err => {
        console.log(err)
        router.push({ name: 'Login' })
      })
    },
    // Get all Blog by userid
         getblog() {
           //ยังเป็น Static อยู่
            axios.get('/users/profile', {
              headers: { 'Authorization': this.token }
            }).then(res => {
              this.id = res.data.id
              axios.get(`/blogview/userblog/${this.id}`).then(
                result => {
                    console.log(result.data)
                    this.blogs = result.data
                },
                error => {
                    console.error(error)
                }
            )
            }).catch(err => {
              console.log(err)
            })
            
        },

        //Delete Blog
        deleteBlog(blogid) {
          axios.delete(`blogs/delete/${blogid}`)
          .then((res) => {
            this.getblog()
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
        },
        // Gotoreadblog
        gotodetail(blogid){
            this.$router.push({
                name:'Read',
                params:{blog:blogid}
            }).then((res) => {
                this.getblog()
            }).catch((err) => {
                console.log(err)
            })
        },
  },
  mounted () {
    this.getuser()
    this.getblog()
  }
}
</script>


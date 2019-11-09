<template>
  <div class="container">
      <h1 class="title columns is-mobile is-centered"> ข้อมูลผู้ใช้ </h1>
      <hr class="style11">
      <div class="tile is-ancestor">
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <figure class="image is-square">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
          </figure>
          <br>
          <h3 class="title is-3 columns is-mobile is-centered">{{first_name}} {{last_name}}</h3>
          <p></p>
          <h5 class="subtitle is-5 columns is-mobile is-centered" href="">{{email}}</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          <br>
          <div>
            <router-link class="button is-warning is-fullwidth title is-6" to="/user/user_detail">อัพเดทข้อมูลผู้ใช้</router-link>
          </div>
        </div>
        <div class="tile is-child box">
          <a class="title">การขาย</a>
          <router-link class="button is-danger is-rounded is-pulled-right" to="/product">จัดการ</router-link>
          <table class="table is-fullwidth">
                <thead>
                  <th class="subtitle is-6">ชื่อสินค้า</th>
                  <th class="subtitle is-6">Qty</th>
                  <th class="subtitle is-6">สถานะ</th>
                </thead>
                <tbody>
                  <td>รับราชการยังไงให้ได้ 4000 ล้าน</td>
                  <td>1</td>
                  <td>400</td>
                </tbody>
              </table>
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
                  <th class="subtitle is-5"></th>
                  <th class="subtitle is-5"></th>
                  <th></th>
                </thead>
                <tbody>
                  <tr v-for="(blog) in blogs" v-bind:key="blog.blogid" v-bind:title="blog.blog_title">
                    <td><a @click="gotodetail(blog.blogid)">{{blog.blog_title}}</a></td>
                    <td>{{blog.book_name}}</td>
                    <td></td>
                    <td>
                    <a class="button is-danger is-small is-rounded is-pulled-right" href="">Delete</a>
                    <a class="button is-warning is-small is-rounded is-pulled-right" href="">Edit</a>
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
                          <h5  class="title columns is-mobile is-centered card-header-title is-5">ชื่อหนังสือ</h5>
                          <h6  class="title columns is-mobile is-centered is-6">฿ราคา</h6>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import router from '../router'
import axios from 'axios'

export default {
  data () {
    const token = localStorage.usertoken
    const userblogid = token.id
    return {
      id:'',
      first_name: '',
      last_name: '',
      email: '',
      token: token,
      userblogid: userblogid,

      //Blog
      blogs:[],
      books:[],
      blogid:'',
      blog_article:'',
      blog_title:'',
      blog_img:'',
      bookid:'',
      book_id:'',
      book_name:'',
      
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

    // Get Blog All
    getblog () {
            axios.get('/blogs/userblogs').then(
                result => {
                    console.log(result.data)
                    this.blogs = result.data
                    params:{userblogid:id}
                },
                error => {
                    console.error(error)
                }
            )
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


<template>
  <div class="container">
      <h1 class="title columns is-mobile is-centered"> ข้อมูลผู้ใช้ </h1>
      <hr class="style11">
      <div class="tile is-ancestor ">
      <div class="tile is-4 is-vertical is-parent ">
        <div class="tile is-child box ">
          <figure class="image is-square">
            <img class="is-rounded" src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.0-9/s960x960/72119991_2948702885158694_1902264873941729280_o.jpg?_nc_cat=110&_nc_eui2=AeF6F8CsOAfoqvUTJ5gjn626Crg2n_hOxFzj8GsMQk5Kml4svYUk54qNd-gXqwbSb6iOgOKC160pbZYTQMIIDBQnoITCJaWG3z5isl9yKzU2Qg&_nc_oc=AQkhnDSYNA8J0JQg_pNp9AHfxIsqo0UlWETrQYfOK2VAxI0BoLKZLuqU1WS9Wf8g1Lc&_nc_ht=scontent.fbkk5-4.fna&oh=17982eb8f5bfa03c155b54528a510db2&oe=5E597B3F">
          </figure>
          <br>
          <h3 class="title is-3 columns is-mobile is-centered">{{first_name}} {{last_name}}</h3>
          <p></p>
          <h5 class="subtitle is-5 columns is-mobile is-centered" href="">{{email}}</h5>
          <p>นักดนตรี นักอ่าน นักแต่งเพลง จากจังหวัดหนองค่น ที่หลงไหลในการอ่านหนังสือ วรรณกรรม แล้วนำมาเรียบเรียงเป็นบทเพลงสไตล์โฟลค</p>
          <br>
          <div>
            <router-link class="button is-warning is-fullwidth title is-6" to="/user/user_detail">อัพเดทข้อมูลผู้ใช้</router-link>
          </div>
        </div>
        <div class="tile is-child box">
          <a class="title">การขาย</a>
          <table class="table is-fullwidth">
                <thead>
                  <th class="subtitle is-6">ล่าสุด</th>

                  <th class="subtitle is-6">สถานะ</th>
                </thead>
                <tbody>
                  <td>A Little History of Economics</td>
                  <td>ได้รับสินค้าแล้ว</td>
                </tbody>
              </table>
              <router-link class="button is-warning is-fullwidth title is-6" to="/product">จัดการสินค้า</router-link>
              <router-link class="button is-warning is-fullwidth title is-6" to="/sell">จัดการการขาย</router-link>
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
                  <!-- <tr v-for="(blog) in blogs" v-bind:key="blog.blogid" v-bind:title="blog.blog_title">
                    <td>{{blog.blog_title}}</td>
                    <td>{{blog.blog_date}}</td>
                    <td></td>
                    <td>
                      <a class="button is-danger is-small is-rounded is-pulled-right" href="">Delete</a>
                      <a class="button is-warning is-small is-rounded is-pulled-right" href="">Edit</a>
                    </td>
                  </tr> -->
                  <tr>
                    <td>หลังสื่อรักที่เศร้ามากที่สุดเท่าที่เคยอ่านมา</td>
                    <td>13/11/62</td>
                    <td>
                      <a class="button is-danger is-small is-rounded is-pulled-right" href="">Delete</a>
                      <a class="button is-warning is-small is-rounded is-pulled-right" href="">Edit</a>
                    </td>
                  </tr>
                  <tr>
                    <td>เมื่อชีวิตเราเป็นไปตามเพลง อยากแนะนำหนังสือเล่มนี้</td>
                    <td>10/11/62</td>
                    <td>
                      <a class="button is-danger is-small is-rounded is-pulled-right" href="">Delete</a>
                      <a class="button is-warning is-small is-rounded is-pulled-right" href="">Edit</a>
                    </td>
                  </tr>
                  <tr>
                    <td>รีวิวหนังสือ : ผมปัญญาอ่อน</td>
                    <td>10/10/62</td>
                    <td>
                      <a class="button is-danger is-small is-rounded is-pulled-right" href="">Delete</a>
                      <a class="button is-warning is-small is-rounded is-pulled-right" href="">Edit</a>
                    </td>
                  </tr>
                  <tr>
                    <td>ปาฏิหาริย์ร้านชำของคุณนามิยะ โดย ฮิงาชิโนะ เคโงะ</td>
                    <td>10/09/62</td>
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
                                  <img src="https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/t/h/the_ask_and_the_answer_cover.jpg">
                              </figure>
                          </div>
                          <h5  class="title columns is-mobile is-centered card-header-title is-5">แอสก์ และ แอนเซอร์</h5>
                          <h6  class="title columns is-mobile is-centered is-6">฿399</h6>
                        </div>
                    </div>
                    <div class="column tile is-2 is-vertical is-mobile is-parent is-narrow">
                      <div class="tile is-child box">
                          <div class="card-image has-text-centered">
                              <figure class="image is-inline-block">
                                  <img src="https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/m/i/mistborn_illustrate_v05crop.jpg">
                              </figure>
                          </div>
                          <h5  class="title columns is-mobile is-centered card-header-title is-5">จักรวรรดิไฟนอล</h5>
                          <h6  class="title columns is-mobile is-centered is-6">฿617</h6>
                        </div>
                    </div>
                    <div class="column tile is-2 is-vertical is-mobile is-parent is-narrow">
                      <div class="tile is-child box">
                          <div class="card-image has-text-centered">
                              <figure class="image is-inline-block">
                                  <img src="https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/s/c/screen_shot_2562-10-14_at_8.51.06_pm.png">
                              </figure>
                          </div>
                          <h5  class="title columns is-mobile is-centered card-header-title is-5">ชายร้อยปีผู้ปีนออกทางหน้าต่าง แล้วหายตัวไป</h5>
                          <h6  class="title columns is-mobile is-centered is-6">฿333</h6>
                        </div>
                    </div>
                    <div class="column tile is-2 is-vertical is-mobile is-parent is-narrow">
                      <div class="tile is-child box">
                          <div class="card-image has-text-centered">
                              <figure class="image is-inline-block">
                                  <img src="https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/s/c/scan_6_4.png">
                              </figure>
                          </div>
                          <h5  class="title columns is-mobile is-centered card-header-title is-5">คิมจียอง เกิดปี82</h5>
                          <h6  class="title columns is-mobile is-centered is-6">฿161</h6>
                        </div>
                    </div>
                    <div class="column tile is-2 is-vertical is-mobile is-parent is-narrow">
                      <div class="tile is-child box">
                          <div class="card-image has-text-centered">
                              <figure class="image is-inline-block">
                                  <img src="https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/s/c/screen_shot_2562-10-09_at_7.38.24_pm.png">
                              </figure>
                          </div>
                          <h5  class="title columns is-mobile is-centered card-header-title is-5">ความลับในบ้านไลแลค</h5>
                          <h6  class="title columns is-mobile is-centered is-6">฿242</h6>
                        </div>
                    </div>
                    <div class="column tile is-2 is-vertical is-mobile is-parent is-narrow">
                      <div class="tile is-child box">
                          <div class="card-image has-text-centered">
                              <figure class="image is-inline-block">
                                  <img src="https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/s/c/scan_6_6.png">
                              </figure>
                          </div>
                          <h5  class="title columns is-mobile is-centered card-header-title is-5">ตามล่ายอดแฮ็กเกอร์</h5>
                          <h6  class="title columns is-mobile is-centered is-6">฿405</h6>
                        </div>
                    </div>
                    <div class="column tile is-2 is-vertical is-mobile is-parent is-narrow">
                      <div class="tile is-child box">
                          <div class="card-image has-text-centered">
                              <figure class="image is-inline-block">
                                  <img src="https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/s/c/scan_6_15.png">
                              </figure>
                          </div>
                          <h5  class="title columns is-mobile is-centered card-header-title is-5">ภาพชีวิตวัยเยาว์ของศิลปิน</h5>
                          <h6  class="title columns is-mobile is-centered is-6">฿315</h6>
                        </div>
                    </div>
                    <div class="column tile is-2 is-vertical is-mobile is-parent is-narrow">
                      <div class="tile is-child box">
                          <div class="card-image has-text-centered">
                              <figure class="image is-inline-block">
                                  <img src="https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/f/i/file_95_23.jpg">
                              </figure>
                          </div>
                          <h5  class="title columns is-mobile is-centered card-header-title is-5">รักของผู้ยากไร้</h5>
                          <h6  class="title columns is-mobile is-centered is-6">฿297</h6>
                        </div>
                    </div>
                    <div class="column tile is-2 is-vertical is-mobile is-parent is-narrow">
                      <div class="tile is-child box">
                          <div class="card-image has-text-centered">
                              <figure class="image is-inline-block">
                                  <img src="https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/s/c/screen_shot_2562-10-30_at_1.51.58_pm.png">
                              </figure>
                          </div>
                          <h5  class="title columns is-mobile is-centered card-header-title is-5">บาย-ไลน์</h5>
                          <h6  class="title columns is-mobile is-centered is-6">฿315</h6>
                        </div>
                    </div>
                    <div class="column tile is-2 is-vertical is-mobile is-parent is-narrow">
                      <div class="tile is-child box">
                          <div class="card-image has-text-centered">
                              <figure class="image is-inline-block">
                                  <img src="https://readery.co/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/b/o/book_l_less.png">
                              </figure>
                          </div>
                          <h5  class="title columns is-mobile is-centered card-header-title is-5">เลส</h5>
                          <h6  class="title columns is-mobile is-centered is-6">฿238</h6>
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
         getblog () {
            axios.get(`/blogview/userblog/${14}`).then(
                result => {
                    console.log(result.data)
                    this.blogs = result.data
                },
                error => {
                    console.error(error)
                }
            )
        },
  },
  mounted () {
    this.getuser()
    this.getblog()
  }
}
</script>


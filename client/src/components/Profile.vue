<template>
  <div class="container">
      <h1 class="title columns is-mobile is-centered"> ข้อมูลผู้ใช้ </h1>
      <hr class="style11">
      <div class="tile is-ancestor">
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <a class="title">{{first_name}} {{last_name}}</a>
           <a class="button is-warning is-rounded is-pulled-right" href="">อัพเดท</a>
           <p class="subtitle" href="">{{email}}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
        </div>
        <div class="tile is-child box">
          <a class="title">ตะกร้าสินค้า</a>
          <a class="button is-danger is-rounded is-pulled-right" href="">จัดการ</a>
          <table class="table is-fullwidth">
                <thead>
                  <th class="subtitle is-6">ชื่อสินค้า</th>
                  <th class="subtitle is-6">Qty</th>
                  <th class="subtitle is-6">Price</th>
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
            <a class="title">บทความ</a>
            <a class="button is-primary is-rounded is-pulled-right" href="">เขียนรีวิว</a>
            <div class="container">
              <table class="table is-fullwidth">
                <thead>
                  <th class="subtitle is-5">ชื่อเรื่อง</th>
                  <th class="subtitle is-5">วันที่</th>
                  <th class="subtitle is-5">ถูกใจ</th>
                </thead>
                <tbody>
                  <td>รับราชการยังไงให้ได้ 4000 ล้าน</td>
                  <td>10/10/63</td>
                  <td>1000</td>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <hr class="style11">
      <section class="section columns is-half is-centered">
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
      id:'',
      first_name: '',
      last_name: '',
      email: '',
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
    }
  },
  mounted () {
    this.getuser()
  }
}
</script>


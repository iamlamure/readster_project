<template>
  <div class="container">
    <div>
      <div class="columns is-mobile is-centered">
        <div class="column is-half">
            <form v-on:submit.prevent="adminlogin">
            <h1 class="title columns is-mobile is-centered">Admin</h1>
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" v-model="email" class="input" name="email" placeholder="Enter email">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" v-model="password" class="input" name="password" placeholder="Password">
            </div>
            <br>
              <button type="submit" class="button is-primary  is-fullwidth">Admin Login</button>
            <br>
            <div class="columns is-centered">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
import EventBus from './EventBus'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    adminlogin () {
      axios.post('/admins/login',
        {
          email: this.email,
          password: this.password
        }
      ).then((res) => {
        localStorage.setItem('admintoken', res.data)
        this.email = ''
        this.password = ''
        if (res) {
          this.emitMethod()
          router.push({ name: 'Dashboard' })
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    emitMethod () {
      EventBus.$emit('adminlogged-in', 'adminloggedin')
    }
  }
}
</script>

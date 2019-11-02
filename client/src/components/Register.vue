<template>
  <div class="container">
    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <form v-on:submit.prevent="register">
          <h1 class="title">Register</h1>
          <div class="form-group">
            <label for="name">First name</label>
            <input type="text" v-model="first_name" class="input" name="first_name" placeholder="Enter your first name">
          </div>
          <div class="form-group">
            <label for="name">Last name</label>
            <input type="text" v-model="last_name" class="input" name="last_name" placeholder="Enter your lastname name">
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" v-model="email" class="input" name="email" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="input" name="password" placeholder="Password">
          </div>
          <br>
          <a type="submit" class="button is-primary columns is-centered">Register!</a>
          <br>
          <div class="columns is-centered">
              <router-link to="/login">Have a account ? . Login Now</router-link>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import router from '../router'

export default {
  data () {
    return {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  },

  methods: {
    register () {
      axios.post('/users/register',
        {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password
        }
      ).then((res) => {
        router.push({ name: 'Login' })
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }

}
</script>

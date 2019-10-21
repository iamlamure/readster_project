<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-md-center" id="navbar" >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>

        <li v-if="auth=='' && (token==null || token==undefined)" class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li v-if="auth=='' && (token==null || token==undefined)" class="nav-item">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>
        <li v-if="auth=='loggedin' || token!=null || token!=undefined" class="nav-item">
          <router-link class="nav-link" to="/book">Book</router-link>
        </li>
        <li v-if="auth=='loggedin' || token!=null || token!=undefined" class="nav-item">
          <router-link class="nav-link" to="/blog">Blog</router-link>
        </li>
        <li v-if="auth=='loggedin' || token!=null || token!=undefined" class="nav-item">
          <router-link class="nav-link" to="/profile">Profile</router-link>
        </li>
        <li v-if="auth=='loggedin' || token!=null || token!=undefined" class="nav-item">
          <router-link class="nav-link" to="/product">Product</router-link>
        </li>
        <li v-if="auth=='loggedin' || token!=null || token!=undefined" class="nav-item float-right">
          <a class="nav-link float-right" href="" v-on:click="logout">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

import EventBus from './EventBus'
import Axios from 'axios'

EventBus.$on('logged-in', test => {
  console.log(test)
})
export default {
  data () {
    return {
      auth: '',
      token: localStorage.usertoken
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('usertoken')
    }
  },
  mounted () {
    EventBus.$on('logged-in', status => {
      this.auth = status
    })
  }

}
</script>

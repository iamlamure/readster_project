<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">
          Home
        </router-link>
        <router-link class="navbar-item" to="/book">
            Book
        </router-link>
        <router-link class="navbar-item" to="/blog">
            Blog
        </router-link>
        <router-link class="navbar-item" to="/profile">
            Profile
        </router-link>

      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <router-link class="button is-info is-rounded" to="/register">
                Register
              </router-link>
            </p>
            <p class="control">
              <router-link class="button is-success is-rounded" to="/login">
                Login
              </router-link>
            </p>
          </div>
        </div>
      </div>
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

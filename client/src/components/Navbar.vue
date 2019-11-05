<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <h1 class="title" width="112" height="28"> Readster </h1>
      </a>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample" aria-expanded="false" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu" v-bind:class="{'is-active': isOpen}">
      <div class="navbar-start">
        <router-link class="navbar-item titile is-5" to="/book" v-if="auth=='loggedin' || token!=null || token!=undefined">
            Book
        </router-link>
        <router-link class="navbar-item" to="/blog" v-if="auth=='loggedin' || token!=null || token!=undefined">
            Blog
        </router-link>
        <router-link class="navbar-item" to="/profile" v-if="auth=='loggedin' || token!=null || token!=undefined">
            Profile
        </router-link>
        <router-link class="navbar-item" to="/product" v-if="auth=='loggedin' || token!=null || token!=undefined">
            Product
        </router-link>

      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control" v-if="auth=='' && (token==null || token==undefined)">
              <router-link class="button is-success is-rounded" to="/login">
                Account
              </router-link>
            </p>
            <p class="control" v-if="auth=='loggedin' || token!=null || token!=undefined" >
              <router-link class="button is-success is-rounded" to="/">
                Cart
              </router-link>
            </p>
            <p class="control" v-if="auth=='loggedin' || token!=null || token!=undefined" >
              <a class="button is-danger is-rounded" href="/" v-on:click="logout">
                Logout
              </a>
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
      token: localStorage.usertoken,
      isOpen: false
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

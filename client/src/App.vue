<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
      <navbar></navbar>
      <br>
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    'Navbar': Navbar
  },
}
</script>


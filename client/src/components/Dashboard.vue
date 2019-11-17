<template>
    <div id="Dashboard">
        <adminnav></adminnav>
        <h1 class="title is-1">Admin Complete</h1>
    </div>
</template>

<script>
import Navbar from '../components/AdminNav'
import axios from 'axios'
import router from '../router'

export default {
    name: 'Dashboard',
    comments : {
        'Navbar': Navbar
    },
}
</script>
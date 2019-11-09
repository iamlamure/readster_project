<template>
    <div class="container">
       <div class="columns is-mobile is-centered">
        <div class="column is-half">
        <form v-on:submit.prevent="updateuser">
          <h1 class="title">อัพเดทข้อมูลผู้ใช้</h1>
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
          <hr class="style11">
          <div class="form-group">
            <label for="user_address">Address</label>
            <textarea type="text" v-model="user_address" class="textarea" name="user_address" rows="10"></textarea>
          </div>
          <br>
            <button type="submit" class="button is-warning  is-fullwidth title is-5">Confirm update</button>
          <br>
        </form>
      </div>
    </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            user_address:''
        }
    }
}
</script>
<template>
  <div id="app">
    <input placeholder="Login" type="text" v-model="login">
    <input placeholder="Hasło" type="password" v-model="password">
    <button v-on:click="logInRequest">ZALOGUJ</button>
  </div>
</template>

<script>
  import axios from '~/plugins/axios'
  const sha1 = require('sha1')
  
  export default {
    data () {
      return {login: '', password: ''}
    },
    methods: {
      async logInRequest () {
        const data = {login: this.login, password: sha1(this.password)}
        console.log(await this.asyncData(data))
      },
      asyncData (data) {
        return axios.post('/api/login', data).then((res) => {
          return res.data
        }).catch((e) => {
          return {success: false, data: {statusCode: 404, message: 'User not found'}}
        })
      }
    }
  }
</script>

<style>
  div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

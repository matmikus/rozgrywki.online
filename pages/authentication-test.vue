<template>
  <div id="app" v-if="!loading">
    <div id="form" v-if="!authenticated">
      <input placeholder="Login" type="text" v-model="login">
      <input placeholder="Hasło" type="password" v-model="password">
      <button v-on:click="onLogInClicked">ZALOGUJ</button>
    </div>
    <div>
      {{ message }}
    </div>
    <div v-if="authenticated">
      <a v-on:click="onLogOutClicked">Wyloguj się</a>
    </div>
    <div>
      <a href="">Odśwież stronę</a>
    </div>
  </div>
  <div v-else>Ładowanie...</div>
</template>

<script>
  import axios from '~/plugins/axios'
  
  const sha1 = require('sha1')
  
  export default {
    data () {
      return {
        loading: true,
        authenticated: false,
        login: '',
        password: '',
        message: ''
      }
    },
    mounted: async function () {
      if (await this.authenticate()) {
        this.authenticated = true
        this.message = 'Jesteś zalogowany'
      } else {
        this.message = 'Nie jesteś zalogowany'
      }
      this.loading = false
    },
    methods: {
      authenticate () {
        if (document.cookie === '') {
          return false
        }
        return axios.get('/api/authentication', document.cookie).then(res => res.data).catch(e => false)
      },
      async onLogInClicked () {
        const data = {login: this.login, password: sha1(this.password)}
        const result = await this.logInRequest(data)
        if (result.success) {
          this.authenticated = true
          this.message = 'Zalogowano pomyślnie'
        } else {
          this.message = result.message
        }
      },
      onLogOutClicked () {
        document.cookie = 'Bearer' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
        document.cookie = 'userId' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
        document.cookie = 'userLogin' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
        document.cookie = 'userName' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
        this.authenticated = false
      },
      logInRequest (data) {
        return axios.post('/api/login', data).then((res) => {
          return res.data
        }).catch((e) => {
          return {success: false, message: 'Błąd połączenia'}
        })
      }
    }
  }
</script>

<style>
  #app {
    height: 100%;
    flex-direction: column;
  }
  
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  #app > div {
    margin: 8px;
  }
  
  #form > * {
    margin: 8px;
  }
</style>

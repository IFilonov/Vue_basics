<template>
  <div id="app">
    <b-button-group class="mx-1">
      <b-button variant="link" to="/">Главная</b-button>
      <b-button variant="primary" to="/tasks">Список документов</b-button>
      <b-button variant="primary" to="/newtask">Новый документ</b-button>
      <b-button variant="link" to="/about">Курсы валют</b-button>
      <b-button variant="primary" @click="$router.go(-1)">Назад</b-button>
      <b-button variant="success" v-if="!store.isAuthorized" :to="{ name: 'login'}">Войти</b-button>
      <b-button variant="danger" v-if="store.isAuthorized" @click="logout" :to="{ name: 'noauthorized'}">Выйти</b-button>
    </b-button-group>
  </div>
</template>

<script>
export default {
  computed:{
    store() {
      return this.$store.getters
    }
  },
  methods: {
    login:function(){
      this.$store.dispatch('login','ddd111')
    },
    logout:function(){
      this.$store.dispatch('logout','ddd111')
    }
  }
}
</script>

<style scoped>
</style>

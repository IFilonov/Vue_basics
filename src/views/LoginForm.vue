<template>
  <div>
    <h1> Login </h1>

    <h1> Password </h1>

    <b-button variant="success" v-if="!store.isAuthorized" @click="login" :to="{ name: 'login'}">Войти</b-button>
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
       // post http://www.project-osnova.ru:8080/demo-auth
       // login password  если пароль и логин совпадают то ок, если не совпадают то выкидывает
       if (this.$router.path != "/"){
         this.$router.push("/")
       }
     }
   }
 }
</script>

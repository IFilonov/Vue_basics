<template>
  <div>
    <b-list-group v-for="type in currententry.types" :key="type.id">
        <b-list-group-item class="w-25 p-1 justify-content-between align-items-center" variant="outline-primary" :to="{ name: 'details', params: { typeid:type.id } }" >
          {{ type.name }}
          <b-badge variant="primary" pill>9</b-badge>
        </b-list-group-item>
    </b-list-group>
    <h1> {{ currententry.name }} </h1>
    <p>- {{ currententry.desc }} </p>

    <router-view :key="$route.path"/>

  </div>
</template>

<script>
import config from "@/router/config.js"

export default {
   props: ['docid'],
   computed: {
     currententry(){
       return config.entries.find( entry => entry.id === this.docid )
       //  === - точное совпадение, без приведения к одинаковому типу
     }
   }
}
</script>

<style scoped>
</style>

<template>
  <div class="shadow-lg p-3 mb-3 bg-white rounded">
    <b-form-select class="w-25" size="sm" v-model="favorite_code" :options="store.getUnFavoriteValutesCode"></b-form-select>
    <b-button variant="primary" size="sm" class="w-25" @click="addFavoriteCode">Добавить в фильтр</b-button>
    <b-button variant="primary" size="sm" class="w-50" @click="clearFavoriteCode">Очистить фильтр</b-button>
    <div class="shadow-lg p-3 mb-3 bg-white rounded">
      <b-form-select class="w-25" align="left" size="sm" v-model="un_favorite_code" :options="store.getFavorites"></b-form-select>
      <b-button variant="primary" size="sm" class="w-25" @click="clearFavoriteOneCode">Удалить из фильтра</b-button>
    </div>
    <div class="p-3 mb-3 bg-white rounded">
      <b-table striped hover :items="store.getFavoriteValutes" small
          primary-key="title" :tbody-transition-props="transProps">
      </b-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      transProps: {
          // Transition name
          name: 'flip-list'
        },
        favorite_code: [],
        un_favorite_code: []
    }
  },
  methods: {
    addValutes: function(valute) {
      this.$store.dispatch('addValutes', valute)
    },
    addFavoriteCode: function() {
      this.$store.dispatch('addFavoriteCode', this.favorite_code)
    },
    clearFavoriteCode: function() {
      this.$store.dispatch('clearFavoriteCode')
    },
    clearFavoriteOneCode: function() {
      this.$store.dispatch('clearOneFavoriteCode', this.un_favorite_code)
    }
  },
  created() {
    if (this.store.getValutes.length == 0)
    {
      const valutes_path = 'https://www.cbr-xml-daily.ru/daily_json.js'
      axios.get(valutes_path)
      .then(response =>
        {
          for (let key in response.data['Valute'])
            this.addValutes( response.data['Valute'][key] );
        }
      )
      .catch(error => console.log(error))
    }
  },
  computed: {
    store() {
      return this.$store.getters
    }
  }
}
</script>

<style>
</style>

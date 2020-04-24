import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) //не компонент

import config from "@/router/config.js"

//доступен из кода как $store
export default new Vuex.Store({
  state: {
    //Переменные, плоские данные
    tasks: [
        { title: 'Первая задача',    targetDate: '01.01.2020', responsible: 'Moose' },
        { title: 'Вторая задача',    targetDate: '05.02.2020', responsible: 'Cat' },
        { title: 'Третья задача',    targetDate: '10.03.2020', responsible: 'Dog' },
        { title: 'Четвертая задача', targetDate: '15.04.2020', responsible: 'Pig' },
        { title: 'Пятая задача',     targetDate: '10.03.2020', responsible: 'Bull' },
        { title: 'Шестая задача',    targetDate: '15.04.2020', responsible: 'Bird' },
      ],
    entries: config.entries,
    valutes: [],
    favorites: ['EUR', 'USD'],
    token: ""
  },
  getters:{ //можно задавать вычисляемые функции, не только напрямую свойства
    isAuthorized: state => {
      return state.token != ""
    },
    getTasks: state => {
      return state.tasks
    },
    getCountTasks: state => {
      return state.tasks.length
    },
    getEntries: state => {
      return state.entries
    },
    getValutes: state => {
      return state.valutes.sort()
    },
    getFavorites: state => /*code =>*/ {
      return state.favorites.sort()
    },
    getFavoriteValutes: (state, getters) => {
      if (state.favorites.length > 0)
      {
        return getters.getValutes.filter (
          entry => state.favorites.indexOf(entry.CharCode) != -1
        )
      }
      else
      {
        return getters.getValutes
      }
    },
    getUnFavoriteValutesCode: state => {
      return state.valutes.filter(
        entry => state.favorites.indexOf(entry.CharCode) == -1
      ).map( e =>  e.CharCode )
    }
  },
  mutations: {
   //Изменение данных в хранилище. Минус - синхронны. Как можно более маленькие, точечное изменение
   //данных в хранилище. Большими буквами.
   SET_TOKEN(state, payload){
     state.token = payload
   },
   ADD_TASK(state, payload){
     state.tasks.push(payload)
   },
   DELETE_TASK(state, index){
     state.tasks.splice(index, 1)
   },
   ADD_VALUTES(state, payload){
     state.valutes.push(payload)
   },
   ADD_FAVORITE(state, payload){
     state.favorites.push(payload)
   },
   CLEAR_FAVORITE(state){
     state.favorites = []
   },
   CLEAR_ONE_FAVORITE(state, payload){
     state.favorites.pop(payload)
   }
   // у store commit вызывает мутацию
   // Напрямую вызывать не рекомендуется. Необходимо оборачивать в действие
  },
  actions: {
    //Действия - асинхронные процедуры. Можно вызывать из кода, может включать несколько мутаций
    login (context, payload){
      context.commit('SET_TOKEN', payload)
    },
    logout (context){
      context.commit('SET_TOKEN', "")
    },
    addTask( context, payload ){
      context.commit('ADD_TASK', payload)
    },
    deleteTask( context, index ){
      context.commit('DELETE_TASK', index)
    },
    addValutes( context, payload ){
      context.commit('ADD_VALUTES', payload)
    },
    addFavoriteCode( context, payload ){
      context.commit('ADD_FAVORITE', payload)
    },
    clearFavoriteCode( context){
      context.commit('CLEAR_FAVORITE')
    },
    clearOneFavoriteCode( context, payload ){
      context.commit('CLEAR_ONE_FAVORITE', payload)
    }
  },
  modules: {
    //Для разделения на части. Обычно по функионалу.
  }
})

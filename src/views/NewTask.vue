<template>
  <div class="shadow p-3 mb-5 bg-white rounded">
    <b-card class="shadow-none mb-2" :title="header" >
      <!-- v-if удаляет из дом дерева, будет больше обновлений -->
      <!-- v-show скрывает из дом дерева, работает быстрее. Больше затраты на первоначальную отрисовку -->
      <b-input-group prepend="Введите задачу, срок и ФИО"
        @keyup.enter="addTask">
        <b-form-input aria-label="First name" v-model="newtask.title"></b-form-input>
        <!-- b-form-input aria-label="Last name" v-model="newtask.targetDate"></b-form-input> -->
        <b-form-datepicker id="example-datepicker" placeholder="DD-MM-YYYY" locale="ru"
          :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" @context="onContext" v-model="newtask.targetDate"></b-form-datepicker>
        <b-form-input aria-label="Last name" v-model="newtask.responsible"></b-form-input>
        <b-input-group-append>
          <b-button variant="primary" @click="addTask">
            Добавить
          </b-button>
        </b-input-group-append>
      </b-input-group>
   </b-card>

   <!--
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
          <TheTask :source="task"/><br>
          <button class=btn @click="removeTask(index)">
            Удалить
          </button>
      </li>
    </ul>
    -->
    <!--привязка модели к хедеру -->
    <!--
    <input placeholder="Введите описание задачи" class="input" v-model="newtask.title" @keyup.enter="addTask"/>
    <br>
    <input placeholder="Введите контрольный срок" class="input" v-model="newtask.targetDate" @keyup.enter="addTask"/>
    <br>
    <input placeholder="Укажите ответственного" class="input" v-model="newtask.responsible" @keyup.enter="addTask"/>
    <br>
  -->
      <!--ниже вместо v-on: можно написать @  -->
  </div>
</template>

<script>
//import Tasks from '@/views/Tasks.vue'

export default {
  components: {
    //Tasks
  },
  data(){
    return {
      header: 'Новая задача',
      newtask: {
        title: "",
        targetDate: "",
        responsible: ""
      }
    }
  },
  methods: {
    addTask: function() {

      var clone = {};
      for (var key in this.newtask) {
        clone[key] = this.newtask[key];
      }
      /*
      Tasks.tasks.push(clone)*/
      this.$store.dispatch('addTask', clone)
      this.newtask = ""
      this.$router.push('Tasks')
    },
    onContext(ctx) {
        // The date formatted in the locale, or the `label-no-date-selected` string
        this.formatted = ctx.selectedFormatted
        // The following will be an empty string until a valid date is entered
        this.selected = ctx.selectedYMD
      }
  }
}

</script>

<style>
</style>

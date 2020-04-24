<template>
  <div class="shadow-lg p-3 mb-5 bg-white rounded">
    <div class="split-left">
      <b-list-group  v-for="entry in store.getEntries" :key="entry.id">
        <b-list-group-item class="w-25 p-1 justify-content-between align-items-center" variant="outline-primary" :to= "{ name: 'doc', params: { docid: entry.id }}" >
          {{ entry.name }}
          <b-badge variant="primary" pill>
            {{ store.getCountTasks }}
          </b-badge>
        </b-list-group-item>
      </b-list-group>
    </div>
    <div class="split-right">
      <b-card :title="header" >
        <b-table id="table-transition-example" striped :items="store.getTasks" small :fields="fields"
          primary-key="title" :tbody-transition-props="transProps">
          <template v-slot:cell(index)="data">
            {{ data.index + 1 }}
          </template>
          <template v-slot:cell(title)="data">
            <b class="text-primary">{{ data.value }}</b>
          </template>
          <template v-slot:cell(remove)="data">
            <b-button variant="primary" size="sm" @click="removeTask(data.index)" class="mr-2">
              Удалить
            </b-button>
          </template>
        </b-table>
      </b-card>

     <!--
      <ul>
      <! v-if удаляет из дом дерева, будет больше обновлений >
      <! v-show скрывает из дом дерева, работает быстрее. Больше затраты на первоначальную отрисовку >

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
  </div>
</template>

<script>
/*import TheTask from '@/components/TheTask.vue'*/
//import config from "@/router/config.js"

export default {
/*  components: {
    TheTask
  },*/
  data(){
    return {
      //entries: config.entries,
      transProps: {
          // Transition name
          name: 'flip-list'
        },
      props: ['tasks'],
      header: 'Список задач',
      fields: [
         { key: 'index', sortable: false },
         { key: 'title', sortable: true },
         { key: 'targetDate', sortable: true },
         { key: 'responsible', sortable: true },
         { key: 'remove', sortable: false }
       ]
    }
  },
  methods: {
    removeTask: function(index) {
      this.$store.dispatch('deleteTask', index)
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
.flip-list-move {
  transition: transform 1s;
}

.split-left {
  width: 100%;
  position: fixed;
  left: 0;
  padding-top: 5px;
}

.split-right {
  width: 80%;
  position: fixed;
  right: 0;
  padding-top: 5px;
}
</style>

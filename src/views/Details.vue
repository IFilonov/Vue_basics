<template>
  <div>
    <p>Это описание подвида выбранного документа - </p>
    <p> {{ docid }} </p>
    <p> {{ typeid }} </p>
      <!--{{ type.name }} -->
    {{ currententrytype.desc }}
  </div>
</template>

<script>
import config from "@/router/config.js"

export default {
     props:  ['docid', 'typeid'],
     /*{
         docid: {
           type: String,
           required: true
         },
         typeid: {
           type: String,
           required: true
         }
       }*/
     computed: {
       currententrytype(){
         return config.entries.find( entry => entry.id === this.docid ).types.find( type => type.id === this.typeid)
         //.type.find( type => type.id === this.typeid)
         //  === - точное совпадение, без приведения к одинаковому типу
       }
     }
}
</script>

<style scoped>
</style>

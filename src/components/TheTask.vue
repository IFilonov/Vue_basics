<template>
  <div>
    {{ source.title }}
    {{ source.targetDate }}
    {{ source.responsible }}
  </div>
</template>

<script>
  export default {
    props: {
      source: null
    }
  }
</script>

<style>
</style>

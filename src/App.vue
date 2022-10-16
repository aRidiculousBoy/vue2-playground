<template>
  <div id="app">
    <h-directive></h-directive>
    <v-table></v-table>
  </div>
</template>

<script>
// 导入组件
import VTable from './components/table.vue'
import HDirective from '@/views/directive'

export default {
  name: 'App',
  components: {
    VTable,
    HDirective
  }
}
</script>

<style>

</style>

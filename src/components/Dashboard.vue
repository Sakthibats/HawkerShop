<template>
  <div id="app">
    <BarChart></BarChart>
    <lineChart></lineChart>
  </div>
</template>

<script>
import BarChart from './Charts/BarChart.vue'
import lineChart from './Charts/CallAPI.vue'

export default {
    components:{
      BarChart, lineChart
    }
}

</script>

<style>
</style>

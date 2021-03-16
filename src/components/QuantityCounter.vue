<template>
  <div id="it">
    <button class="count" v-on:click="decrement()">-</button>
    <a>{{count}}</a>
    <button class="count" v-on:click="increment()">+</button>
  </div>
</template>

<script>
export default {
  name: 'QuantityCounter',
  props:["it"], 
  data(){
    return{
      count:0,
    }
  },
  methods:{
    increment : function(){
      if (this.count>=10){
        alert("You cannot buy more than 10 items")
      }else{
        this.count++;
        this.$emit('counter', this.it, this.count)
      }
    },
    decrement : function(){
      if (this.count>0){
        this.count--;
        this.$emit('counter', this.it, this.count)
      }
    }
  }

}
</script>

<style>
  .count {
    background-color: #4fa3e7;
    color: white;
    padding: 15px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 26px;
    border: 3px solid #000000;
    width: 75px;
    border-radius: 15px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  }
  a {
    font-size: 30px;
    padding: 60px;
    font-family: Helvetica;

  }
</style>

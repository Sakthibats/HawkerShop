<template>
  <div id="selects">
    <h1> Menu </h1>
    <u1>
      <li v-for="(select, index) in selects" :key="`select-${index}`">
        <h2> {{select[0]}} x {{select[1]}} </h2>
      </li>
    </u1>
    <br>
    <button id="calc" v-on:click="sendOrder()"> Send Order </button>
    <br>
  </div>
</template>

<script>
import database from "../firebase.js"

export default {
  name: 'QuantityCounter',
  props:["selects"], 
  data(){
    return{
      calc:false,
      subtotal:0,
      order:{ 
        prawn:0,
        dry:0,
        sambal:0,
        pork:0,
        mapo:0,
        cereal:0,
      }
    }
  },
  methods:{
    sendOrder:function(){
      for(let i =0; i < this.selects.length; i++){
        if(this.selects[i][0]=="Prawn omelette"){
          this.order.prawn = this.selects[i][1];
          continue;
        }
        if(this.selects[i][0]=="Dry Beef Hor Fun"){
          this.order.dry = this.selects[i][1];
          continue;
        }
        if(this.selects[i][0]=="Sambal KangKung"){
          this.order.sambal = this.selects[i][1];
          continue;
        }
        if(this.selects[i][0]=="Pork Fried Rice"){
          this.order.pork = this.selects[i][1];
          continue;
        }
        if(this.selects[i][0]=="Mapo Tofu"){
          this.order.mapo = this.selects[i][1];
          continue;
        }
        if(this.selects[i][0]=="Cereal Prawn"){
          this.order.cereal = this.selects[i][1];
          continue;
        }
      }
      database.collection('orders').add(this.order).then(() => location.reload());
      this.order.prawn=0;
      this.order.dry=0;
      this.order.sambal=0;
      this.order.pork=0;
      this.order.mapo=0;
      this.order.cereal=0;
    }
  }
}
</script>

<style>
#tots {
  font-size: 26px;
}

li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 0px;
  padding-left: 25px;
  padding-right: 25px;
  border: 4px inset rgb(233, 52, 28);
  margin: 10px;
  list-style: none;
  border-radius: 10px;
}
#calc{
  background-color: #06477c;
  color: white;
  padding: 15px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 26px;
  border: 3px solid #000000;
  width: 200px;
  border-radius: 15px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

</style>

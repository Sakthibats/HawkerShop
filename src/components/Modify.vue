<template>
  <div>
    <ul>
      <li class="modi" v-for="ord in this.orders" :key="ord.id">
        <h3> Prawn omelette: {{ord.prawn}}</h3>
        <label for="0"></label>
        <input id="0" name="0" placeholder=0 type="number" min=0 size=50 value=0 required>
        <h3> Dry Beef Hor Fun: {{ord.dry}}</h3>
        <label for="1"></label>
        <input id="1" name="1" placeholder=0 type="number" min=0 size=50 value=0 required>
        <h3> Sambal KangKung: {{ord.sambal}}</h3>
        <label for="2"></label>
        <input id="2" name="2" placeholder=0 type="number" min=0 size=50 value=0 required>
        <h3> Pork Fried Rice: {{ord.pork}}</h3>
        <label for="3"></label>
        <input id="3" name="3" placeholder=0 type="number" min=0 size=50 value=0 required>
        <h3> Mapo Tofu: {{ord.mapo}}</h3>
        <label for="4"></label>
        <input id="4" name="4" placeholder=0 type="number" min=0 size=50 value=0 required>
        <h3> Cereal Prawn: {{ord.cereal}}</h3>
        <label for="5"></label>
        <input id="5" name="5" placeholder=0 type="number" min=0 size=50 value=0 required>
        <br><br>
        <button class="update" v-on:click="updateOrder"> Update Order </button>
      </li>
    </ul>
  </div>
</template>
<script>
import database from "../firebase.js"

export default {
  props:["uid"],
  data(){
    return{
      orders:[]
    }
  },
  methods:{
    fetchItems:function(){
      database.collection('orders').doc(this.uid).get().then((doc)=>{
        let od={}
        od=doc.data()
        od.show=false
        od.id=doc.id
        this.orders.push(od) 
      })
    }, 
    updateOrder:function(){
      database.collection('orders').doc(this.uid).update({
        prawn:document.getElementById('0').value,
        dry:document.getElementById('1').value,
        sambal:document.getElementById('2').value,
        pork:document.getElementById('3').value,
        mapo:document.getElementById('4').value,
        cereal:document.getElementById('5').value
      }).then(()=>this.$router.push('/orders'))
    }
  }, 
  created(){
      this.fetchItems();
  }
}
</script>

<style>
.modi{
  text-align: left;
  flex-grow: 1;
  flex-basis: 300px;
  padding: 0px;
  padding-left: 25px;
  padding-right: 25px;
  border: none;
  margin: 10px;
  list-style: none;
  border-radius: none;
  font-size: 15px;
}

.update{
  background-color: #5b1a99;
  color: white;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  border: 6px #ffffff;
  width: 250px;
  border-radius: 15px;
}

</style>

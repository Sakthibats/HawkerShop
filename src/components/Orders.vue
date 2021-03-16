<template>
  <div>
    <ul>
      <li v-for="ord in this.orders" :key="ord.id">
        <div class="row">
          <div class="column">
            <h3 id> Prawn omelette: {{ord.prawn}}</h3>
            <h3 id> Dry Beef Hor Fun: {{ord.dry}}</h3>
            <h3 id> Sambal KangKung: {{ord.sambal}}</h3>
            <h3 id> Pork Fried Rice: {{ord.pork}}</h3>
            <h3 id> Mapo Tofu: {{ord.mapo}}</h3>
            <h3 id> Cereal Prawn: {{ord.cereal}}</h3>
          </div>
          <div class="column">
            <button class="delete" v-on:click="deleteItem(ord.id)">Delete</button>
            <button class="modify" v-bind:md="ord.id" v-on:click="route(ord.id)">Modify</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import database from "../firebase.js"

export default {
  data(){
    return{
      orders:[]
    }
  },
  methods:{
    fetchItems:function(){
      database.collection('orders').get().then((snapshot)=>{
        let od={}
        snapshot.docs.forEach(doc=>{
          od=doc.data()
          od.show=false
          od.id=doc.id
          this.orders.push(od) 
        })
      })
    },
    deleteItem:function(id){
      database.collection('orders').doc(id).delete().then(() => location.reload());
    }, 
    route: function(id){
      this.$router.push({ name: 'modify', params: { uid: id } })
      
    } 
  }, 
  created(){
      this.fetchItems();
  }
}
</script>

<style>

.row {
  display: flex;
}

.column {
  flex: 50%;
  padding: 10px;
  height: auto; 
  text-align: center;
}
.delete{
  background-color: #cc3232;
  color: white;
  padding:8px;
  padding-left: auto;
  padding-right: auto;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  border: 3px solid #ffffff;
  width: auto;
  border-radius: 15px;
}
.modify{
  background-color: #329bcc;
  color: white;
  padding:8px;
  padding-left: auto;
  padding-right: auto;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  border: 3px solid #ffffff;
  width: auto;
  border-radius: 15px;
}
</style>

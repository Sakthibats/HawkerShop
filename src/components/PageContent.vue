<template>
  <div>
    <ul id="items">
      <li id="PC" v-for="item in items" :key="item.id">
        <h2 id ="itemName"> {{item.name}}</h2>
        <img v-bind:src=item.imageURL>
        <h1 id = "price"> ${{item.price}}</h1>
        <QuantityCounter v-bind:it={item} v-on:counter="onCounter"></QuantityCounter>
      </li>
    </ul>
    <Basket id = "shoppingBasket" v-bind:selects="itemsSelected"></Basket>
  </div>
</template>

<script>
import QuantityCounter from './QuantityCounter.vue'
import Basket from './Basket.vue'
import database from "../firebase.js"

  export default {
    components:{
      QuantityCounter, Basket
    }, 
    data(){
      return{
        itemsSelected:[],
        items:[]
      }
    },
    methods:{
      fetchItems:function(){
        database.collection('menu').get().then((snapshot)=>{
          let it={}
          snapshot.docs.forEach(doc=>{
            console.log(doc.data());
            it=doc.data()
            it.show=false
            it.id=doc.id
            this.items.push(it) 
            })
          })
      },
      onCounter: function (item, count) {
        if (this.itemsSelected.length == 0 && count > 0) {
          //If there is nothing in items selected, push the ORDER in
          this.itemsSelected.push([item["item"]["name"], count, item["item"]["price"]]);
        } else {
          var change = 0;
          for (let i = 0; i < this.itemsSelected.length; i++) {
            const curr_item = this.itemsSelected[i];
            const item_name = curr_item[0];          
            if (item_name===item["item"]["name"] && count>0){
              this.itemsSelected[i][1] = count;
              change++;
            }
            else if (item_name===item["item"]["name"] && count==0){
              this.itemsSelected.splice(i, 1);
              change++;
            }
          }if (change==0){
            this.itemsSelected.push([item["item"]["name"], count, item["item"]["price"]])
          }
        }
        this.itemsSelected.push([0]);
        this.itemsSelected.splice(this.itemsSelected.length-1, 1);
      }
    },
    created(){
      this.fetchItems();
    }
  }
</script>

<style>
#items {
  width: 100%;
  max-width: 70%;
  margin: 0px;
  padding: 0 5px;
  font-family: "Helvetica"
}
#PC {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
  list-style: none
}
img {
  width: 135px;
  height: 135px;
}

#price {
  font-size: 30px;
}

#itemName {
  font-size: 30px;
}

#shoppingBasket {
  position: absolute;
  top: 45%;
  left: 75%;
  font-family: "Helvetica"

}

</style>

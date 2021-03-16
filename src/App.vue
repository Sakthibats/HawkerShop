<template>
  <div>
    <nav>
      <h1 id="header">Sakthi's Zi Char Shop</h1>
      <ul>
        <li id="routes"><router-link to="/" exact>Home</router-link></li>
        <li id="routes"><router-link to="/orders" exact>Orders</router-link></li>
        <li id="routes"><router-link to="/dash" exact>Dashboard</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
    <basket></basket>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#header {
  padding: 50px;
  text-align: center;
  background:url("https://i.ytimg.com/vi/b0M2GChyAOo/maxresdefault.jpg") top center;
  color: white;
  font-family: "Monotype Corsiva";
  font-size: 50px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  font-family: "Helvetica";
  font-size: 14px;
}

#routes {  
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 5px;
  padding-left: 25px;
  padding-right: 25px;
  border: 8px inset rgb(28, 93, 233);
  margin: 10px;
  list-style: none;
  border-radius: 15px;

}



</style>

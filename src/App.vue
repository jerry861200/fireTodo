<template>
  <div id="app">
    <!-- nav -->
    <div id="nav"><router-link to="/all">全部</router-link> |
    <router-link to="/finish">完成</router-link> |
    <router-link to="/active">未完成</router-link></div>
    
    <!-- input -->
    <listInput />
    <!-- 呈現 -->
    <div class="itemDiv">
      <listItem v-for=" index in todoIndex" :index="index" :key="index"/>
    </div>
  </div>
</template>

<script>
import listInput from "@/components/listInput";
import listItem from "@/components/listItem";

export default {
  components: {
    listInput,
    listItem
  },
  
  mounted() {
    this.$store.dispatch("getData")
   
  },
  computed:{
    
      todos () {return this.$store.state.todos},
      todoIndex () {
        return this.$store.getters.todoIndex
      }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 24px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.itemDiv{
  width: 40rem;
  margin: 15px auto;
  background-color: #42b983;
  border-radius: 10px;
  padding: 25px;
}

a{
  text-decoration: none;
}
</style>
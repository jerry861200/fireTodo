<template>
  <div>
    <label for="content">新增</label>
    <input type="text" v-model="newData" @keyup.enter="submitHandler" class="contentInput">
    
  </div>
</template>

<script>
export default {
  data(){
    return {
      newData:''
    }
  },
  methods:{
    submitHandler() {
      this.$store.dispatch('pushData',{
        content: this.newData,
        complete: false
      })
      this.newData = ''
    }
  }
}
</script>

<style>
  .contentInput{
    margin: 0 15px;
    width: 15rem;
    height: 2rem;
    font-size: 26px;
  }
</style>
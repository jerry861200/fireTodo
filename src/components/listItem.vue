<template>
  <div class="item">
    <input type="checkbox" v-model="complete"> 
    <label for="" 
    class="todoContent"
    :class="{complete:complete}"
     v-if="safe" @dblclick="safe = false"> {{todo.content}} </label>
    <input type="text" class="todoContent" v-else  v-model="edit" @keyup.enter="updateHandler" @keyup.esc="safe = true">
    <button @click="deleteHandler" >刪除</button>
  </div>
</template>

<script>
export default {
  props:{
    index:{
      type:Number, 
      required: true
    }
  },
  data(){
    return {
      safe: true,
      edit:null,

    }
  },
  methods:{
    deleteHandler(){
      if(confirm(`是否刪除${this.todo.content}`))
        return this.$store.dispatch('deleteData',
        {
          id:this.todo.id,
          index:this.index
          })
    },
    updateHandler(){
      if(this.edit === ''){
        this.safe = true
      }else {
        //畫面先修改
        this.todo.content = this.edit;
        //關閉修改輸入列
        this.safe = true;
        // 執行資料庫更新
        this.$store.dispatch('updateData',
        {id:this.todo.id,
         content:this.edit,
         index:this.index,
         complete: this.todo.complete
        })
        this.edit = null
      }
    }
  },
  computed:{
    todo(){
      return this.$store.state.todos[this.index]
    },
    complete:{
      get(){
        return this.todo.complete
      },
      set(val){
        // this.todo = {content:this.todo.content,complete:val};
        this.todo.complete = val;
        this.$store.dispatch('updateData',
        {
        id:this.todo.id, 
        content:this.todo.content,
        index:this.index,
        complete: val
        })
      }
    }
    
  }
}
</script>

<style  scoped>
.item{
  width: 90%;
  display: flex;
  justify-content: left;
  padding: 15px;
  background-color: #fff;
  margin: 15px 0px;
  border-radius: 7px;
}

.item input[type="checkbox"]{
  margin: 7px 1px 0 1px ;
}

.item input[type="text"]{
  height: 26px;
  font-size: 24px;
}

.todoContent{
  margin: 0 10px;
  width: 80%;
  text-align: left;
}

.item button {
  margin-left: auto;
  border-radius: 5px;
  background-color: antiquewhite;
  border: none;
}

.item button:hover{
  background-color: darkkhaki;
}

.complete{
  color: lightgray;
  text-decoration: line-through;
  transition-duration: 0.5s;
}
</style>
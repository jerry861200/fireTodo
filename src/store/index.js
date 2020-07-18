import Vue from "vue";
import Vuex from "vuex";
import { todoDB } from "@/main.js";
// import { filter } from "vue/types/umd";

Vue.use(Vuex);

let filter = {
  finish(todos){
    return todos.filter((todo)=> todo.complete )
  },
  active(todos){
    return todos.filter((todo)=> !todo.complete )
  },
  all(todos){
    return todos
  }
}

export default new Vuex.Store({
  
  getters: {
    todoIndex(state) {
      return filter[state.route.name](state.todos).map(todo => state.todos.indexOf(todo))
      // return state.todos.map(todo => state.todos.indexOf(todo))
    },
  },
  state: {
    todos: [],
  },
  mutations: {
    GET_TODO(state, data) {
      state.todos = data;
    },
    PUSH_TODO(state, data) {
      state.todos.push(data);
    },
    DELETE_TODO(state, index) {
      // state.todos.filter((todo) => todo.id !== id);
      state.todos.splice(index,1)
    },
    UPDATE_TODO(state, pac) {
      console.log(pac)
      let {index,content,complete} = pac
      state.todos[index] = {content,complete};
      console.log(state.todos[index])
    },
  },
  actions: {
    getData({ commit }) {
      return new Promise((resolve, reject) => {
        todoDB
          .get()
          .then((querySnapshot) => {
            const documents = querySnapshot.docs.map((doc) => {
              return { ...doc.data(), id: doc.id };
            });
            commit("GET_TODO", documents);
            resolve();
          })
          .catch(({ response }) => reject(response.status));
      });
    },
    pushData({ commit }, newData) {
      return new Promise((resolve, reject) => {
        todoDB
          .add(newData)
          .then((querySnapshot) => {
            console.log(querySnapshot.id)
            commit("PUSH_TODO",{...newData,id:querySnapshot.id});
            resolve();
          })
          .catch((error) => reject(error));
      });
    },
    deleteData({ commit }, data) {
      let {id,index} = data
        return new Promise((resolve, reject) => {
          todoDB
            .doc(id)
            .delete()
            .then(() => {
              commit("DELETE_TODO",index);
              resolve();
            })
            .catch((error) => reject(error));
        });
    },
    updateData({ commit }, pac) {
      
      return new Promise((resolve, reject) => {
        todoDB
          .doc(pac.id)
          .set({content:pac.content,complete:pac.complete})
          .then(() => {
            commit("UPDATE_TODO",pac);
            resolve();
          })
          .catch((error) => reject(error));
      });
    
  },
  },
  modules: {},
});

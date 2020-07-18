import Vue from 'vue'
import App from './App.vue'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/firestore'
import router from './router'
import { sync } from 'vuex-router-sync'

sync(store, router)


Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBw_nEyqD3n5XOb3QiuwEfw7hgcWAFz5W4",
  authDomain: "todo-26b66.firebaseapp.com",
  databaseURL: "https://todo-26b66.firebaseio.com",
  projectId: "todo-26b66",
  storageBucket: "todo-26b66.appspot.com",
  messagingSenderId: "380628340928",
  appId: "1:380628340928:web:6c6cb2020c851533ecdd25"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const todoDB = firebase.firestore().collection('todo');

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Header></Header>
    <router-view 
    v-bind:todos="todos"
    v-on:add-todo='addTodo'/>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'App',
  components:{Header},
   created: function () {
    if(localStorage.getItem('vue-todo-localData')!== null){
      this.todos = JSON.parse(localStorage.getItem('vue-todo-localData'));
      //console.log('Second');
    }else{
       const todos = [
        {
          title: 'Todo A',
          project: 'Project A',
          done: false,
        },
         {
          title: 'Todo B',
          project: 'Project B',
          done: true,
        },
         {
          title: 'Todo C',
          project: 'Project C',
          done: false,
        }
      ]

      localStorage.clear();
      localStorage.setItem('vue-todo-localData', JSON.stringify(todos));
      this.todos = JSON.parse(localStorage.getItem('vue-todo-localData'));
    }
    
  },
  data(){
    return {todos:[]}
  },
  methods:{
    addTodo(todo){
      this.todos.push(todo);
      localStorage.clear();
      localStorage.setItem('vue-todo-localData', JSON.stringify(this.todos));
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

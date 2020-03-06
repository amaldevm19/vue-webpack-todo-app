<template>
    <div class="ui container ">
       <p>Completed Task:{{todos.filter((todo)=>{return todo.done === true}).length}}</p>
       <p>Pending Task:{{todos.filter((todo)=>{return todo.done === false}).length}}</p>
       <div class="ui grid">
       <Todo 
       v-for="(todo,index) in todos" :key="index" 
       v-bind:todo="todo" class='todo-class ui' 
       v-on:delete-todo='deleteTodo'
       v-on:change-status='changeStatus'
       v-on:update-todo='updateTodo'></Todo>
       </div>
    </div>
    
</template>

<script>
import Todo from '@/components/Todo'
export default {
    name:'TodoList',
    props: ['todos'],
    components:{Todo},
    methods:{
        deleteTodo(todo){
            const indexOfTodo = this.todos.indexOf(todo)
            this.todos.splice(indexOfTodo,1);
            localStorage.clear();
            localStorage.setItem('vue-todo-localData', JSON.stringify(this.todos));
        },
        changeStatus(todo){
            const indexOfTodo = this.todos.indexOf(todo);
            this.todos[indexOfTodo].done = !this.todos[indexOfTodo].done;
            localStorage.clear();
            localStorage.setItem('vue-todo-localData', JSON.stringify(this.todos));
        },
        updateTodo(todo){
            const indexOfTodo = this.todos.indexOf(todo);
            this.todos[indexOfTodo] = todo;
            localStorage.clear();
            localStorage.setItem('vue-todo-localData', JSON.stringify(this.todos));
        }
       
    }
}
</script>

<style scoped>
.todo-class{
    margin-top: 20px;
}
.flex{
    display: flex;
    flex-wrap:  wrap;
}
</style>
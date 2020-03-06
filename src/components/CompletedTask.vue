<template>
    <div>
        <div class="ui container ">
            <p>Completed Task:{{completedTodos.filter((todo)=>{return todo.done === true}).length}}</p>
            <p>Pending Task:{{completedTodos.filter((todo)=>{return todo.done === false}).length}}</p>
            <div class="ui grid">
                <Todo 
                v-for="(todo,index) in completedTodos" :key="index" 
                v-bind:todo="todo" class='todo-class' 
                v-on:delete-todo='deleteTodo'
                v-on:change-status='changeStatus'
                v-on:update-todo='updateTodo'></Todo>
            </div>
        </div>
    </div>
</template>

<script>
import Todo from '@/components/Todo';
export default {
    name:"completed-task",
    components:{Todo},
    props:['todos'],
    data(){
        return {completedTodos :[]}
    },
    created(){
        this.completedTodos = this.todos.filter((todo)=>{
           return todo.done === true;
        })
    },
     methods:{
        deleteTodo(todo){
            const indexOfTodo = this.completedTodos.indexOf(todo)
            this.completedTodos.splice(indexOfTodo,1);
            localStorage.clear();
            localStorage.setItem('vue-todo-localData', JSON.stringify(this.completedTodos));
        },
        changeStatus(todo){
            const indexOfTodo = this.completedTodos.indexOf(todo);
            this.completedTodos[indexOfTodo].done = !this.completedTodos[indexOfTodo].done;
            localStorage.clear();
            localStorage.setItem('vue-todo-localData', JSON.stringify(this.completedTodos));
        },
        updateTodo(todo){
            const indexOfTodo = this.completedTodos.indexOf(todo);
            this.completedTodos[indexOfTodo] = todo;
            localStorage.clear();
            localStorage.setItem('vue-todo-localData', JSON.stringify(this.completedTodos));
        }
       
    }
}
</script>
    
<style>
.todo-class{
    margin-top: 20px;
}
</style>
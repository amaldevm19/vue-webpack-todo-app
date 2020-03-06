<template>
<div>
    <div class="ui centered card" >
           <div class="content" v-show="!isEditing">
               <div class="header">
                   {{todo.title}}
               </div>
               <div class="meta">
                   {{todo.project}}
               </div>
               <div class="extra content">
                   <span class="right floated edit icon" v-on:click="showHideForm">
                       <i class="class edit icon"></i>
                   </span>
                   <span class="right floated trash icon" v-on:click="deleteTodo(todo)">
                       <i class='trash icon'></i>
                   </span>
               </div>
           </div>
           <div class="content" v-show="isEditing">
               <div class='ui form'>
                   <div class="feild">
                       <label>Title</label>
                       <input type="text" v-model="todo.title">
                   </div>
                   <div class="feild">
                       <label>Project</label>
                       <input type="text" v-model="todo.project">
                   </div>
                   <div class="ui two button attached buttons">
                       <button class="ui basic blue button" v-on:click='showHideForm'>Close X</button>
                   </div>
               </div>
           </div>
            <div class="ui bottom attached green basic button" v-show="!isEditing && todo.done" v-on:click='changeStatus(todo)'>
                Completed
            </div>
            <div class="ui bottom attached red basic button" v-show="!isEditing && !todo.done" v-on:click='changeStatus(todo)'>
                Complete
            </div>
    </div>
</div>
</template>

<script>
export default {
    name:'Todo',
    props: ['todo'],
    data(){
        return {
            isEditing : false,
        }
    },
    methods:{
        showHideForm(){
            this.isEditing = !this.isEditing;
            this.$emit('update-todo', this.todo)
        },
        deleteTodo(thisTodo){
           this.$emit("delete-todo",thisTodo);
        },
        changeStatus(thisTodo){
            this.$emit("change-status", thisTodo)
        }
     
    }
}
</script>

<style>

</style>
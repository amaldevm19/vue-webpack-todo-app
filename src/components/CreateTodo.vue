<template>
    <div class="ui basic content center aligned segment">
        <button class="ui basic button icon" v-on:click="openForm" v-show='!isCreating'>
            <i class="plus icon"></i>
        </button>
        <div class="ui centered card" v-show='isCreating'>
            <div class="content">
                <div class="ui form">
                    <div class="feild">
                        <label>Title</label>
                        <input type="text" v-model='titleText' defaultValue="">
                    </div>
                    <div class="feild">
                        <label>Project</label>
                        <input type="text" v-model='projectText' defaultValue="">
                    </div>
                    <div class="ui two button attached buttons">
                        <button class="ui basic blue button" @click="sendForm">
                            Add
                        </button>
                        <button class="ui basic red button" @click="closeForm">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'CreateTodo',
    data(){
      return {  titleText:'',
                projectText:'',
                isCreating:false
      }
    },
    methods:{
        openForm(){
            this.isCreating = true;
        },
        sendForm(){
            if(this.titleText.length>0 && this.projectText.length>0){
                const todo = {
                    title:this.titleText,
                    project:this.projectText,
                    done:false
                }
                this.$emit('add-todo',todo);
                this.titleText ='';
                this.projectText='';
            }
        },
        closeForm(){
            this.titleText='';
            this.projectText='';
            this.isCreating = false;
        }
    }
}
</script>

<style>

</style>
<template>
  <div >
    <h1>{{msg}}</h1>
    <div class="ui three item menu">
      <router-link to="/add-todo" class='item'>Create New Todo</router-link>
      <router-link to="/" class='item'>All Todo</router-link>
      <router-link to="/completed-todo" class='item'>Completed Todo</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'TodoList APP'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}
</style>

import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import CreateTodo from '@/components/CreateTodo'
import CompletedTask from '@/components/CompletedTask'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/add-todo',
      name: 'CreateTodo',
      component: CreateTodo
    },
    {
      path: '/completed-todo',
      name: 'CompletedTask',
      component: CompletedTask
    }
  ]
})

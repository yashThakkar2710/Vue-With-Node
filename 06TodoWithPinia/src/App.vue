<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  </div>
</template>

<script>
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoForm,
    TodoList,
  },
};
</script>

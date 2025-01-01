<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-8">
    <div class="w-full max-w-lg">
      <h1 class="text-3xl font-bold text-center mb-8">Todo App</h1>
      <!-- Pass todos and methods as props to TodoForm and TodoList components -->
      <TodoForm :addTodo="addTodo" />
      <TodoList :todos="todos" :toggleTodo="toggleTodo" :deleteTodo="deleteTodo" :updateTodo="updateTodo" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import TodoForm from './components/TodoForm.vue'; // Import TodoForm
import TodoList from './components/TodoList.vue'; // Import TodoList

export default {
  components: {
    TodoForm,
    TodoList,
  },
  setup() {
    // Reactive state for todos
    const todos = ref([]);

    // Actions
    const addTodo = (text) => {
      todos.value.push({ id: Date.now(), text, completed: false });
    };

    const toggleTodo = (id) => {
      const todo = todos.value.find((t) => t.id === id);
      if (todo) todo.completed = !todo.completed;
    };

    const deleteTodo = (id) => {
      todos.value = todos.value.filter((t) => t.id !== id);
    };

    const updateTodo = (id, newText) => {
      const todo = todos.value.find((t) => t.id === id);
      if (todo) todo.text = newText;
    };

    return {
      todos,
      addTodo,
      toggleTodo,
      deleteTodo,
      updateTodo,
    };
  },
};
</script>

<style>
/* Global styles */
</style>

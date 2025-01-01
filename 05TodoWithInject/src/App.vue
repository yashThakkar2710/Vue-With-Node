<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-8">
    <div class="w-full max-w-lg">
      <h1 class="text-3xl font-bold text-center mb-8">Todo App</h1>
      <!-- Render TodoForm and TodoList components -->
      <TodoForm />
      <TodoList />
    </div>
  </div>
</template>

<script>
import { reactive, provide } from 'vue';
import TodoForm from './components/TodoForm.vue'; // Import TodoForm
import TodoList from './components/TodoList.vue'; // Import TodoList

export default {
  components: {
    TodoForm,
    TodoList,
  },
  setup() {
    // Reactive state for todos
    const todos = reactive([]);

    // Actions
    const addTodo = (text) => {
      todos.push({ id: Date.now(), text, completed: false });
    };

    const toggleTodo = (id) => {
      const todo = todos.find((t) => t.id === id);
      if (todo) todo.completed = !todo.completed;
    };

    const deleteTodo = (id) => {
      const index = todos.findIndex((t) => t.id === id);
      if (index !== -1) todos.splice(index, 1);
    };

    const updateTodo = (id, newText) => {
      const todo = todos.find((t) => t.id === id);
      if (todo) todo.text = newText;
    };

    // Provide state and actions
    provide('todos', todos);
    provide('addTodo', addTodo);
    provide('toggleTodo', toggleTodo);
    provide('deleteTodo', deleteTodo);
    provide('updateTodo', updateTodo);
  },
};
</script>

<style>
/* Global styles */
</style>

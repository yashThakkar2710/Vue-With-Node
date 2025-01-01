<template>
  <form 
    @submit.prevent="addTodo" 
    class="flex items-center gap-4 bg-white shadow-md rounded-lg p-4 mb-6"
  >
    <input
      v-model="newTodo"
      type="text"
      placeholder="What needs to be done?"
      class="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
    <button
      type="submit"
      class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      Add
    </button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useTodoStore } from '../stores/todoStore';

export default {
  setup() {
    const todoStore = useTodoStore();
    const newTodo = ref('');

    const addTodo = () => {
      if (newTodo.value.trim()) {
        todoStore.addTodo(newTodo.value.trim());
        newTodo.value = '';
      }
    };

    return { newTodo, addTodo };
  },
};
</script>

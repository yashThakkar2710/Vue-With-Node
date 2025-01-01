<template>
  <form @submit.prevent="handleSubmit" class="flex gap-4 mb-8">
    <input
      v-model="newTodo"
      type="text"
      placeholder="Add a new todo"
      @keydown.enter="handleSubmit" 
      class="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      type="submit"
      class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
    >
      Add
    </button>
  </form>
</template>

<script>
import { ref, inject } from 'vue';

export default {
  setup() {
    const addTodo = inject('addTodo');
    const newTodo = ref('');

    // Handle form submission
    const handleSubmit = () => {
      if (newTodo.value.trim()) {
        addTodo(newTodo.value.trim());
        newTodo.value = '';
      }
    };

    return { newTodo, handleSubmit };
  },
};
</script>

<style scoped>
/* Style adjustments */
</style>

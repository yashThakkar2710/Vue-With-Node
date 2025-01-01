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
export default {
  props: {
    addTodo: Function, // Accept the addTodo method as a prop
  },
  data() {
    return {
      newTodo: '',
    };
  },
  methods: {
    handleSubmit() {
      if (this.newTodo.trim()) {
        this.addTodo(this.newTodo.trim());
        this.newTodo = '';
      }
    },
  },
};
</script>

<style scoped>
/* Style adjustments */
</style>

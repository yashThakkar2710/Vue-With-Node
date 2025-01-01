<template>
  <ul class="space-y-4">
    <li
      v-for="todo in todos"
      :key="todo.id"
      class="flex items-center justify-between bg-white shadow-md rounded-lg p-4"
    >
      <div class="flex items-center gap-4">
        <!-- Checkbox for toggling completion -->
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="toggleTodo(todo.id)"
          class="h-5 w-5 text-blue-500 rounded border-gray-300 focus:ring-0"
        />

        <!-- Editable text -->
        <div v-if="!editingId || editingId !== todo.id">
          <span :class="{ 'line-through text-gray-400': todo.completed }">
            {{ todo.text }}
          </span>
          <button
            @click="startEditing(todo.id, todo.text)"
            class="ml-2 text-blue-500 hover:text-blue-600 focus:outline-none"
          >
            Edit
          </button>
        </div>

        <!-- Input for editing -->
        <div v-else class="flex items-center gap-2">
          <input
            v-model="editedText"
            type="text"
            class="border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            @click="saveEdit(todo.id)"
            class="text-green-500 hover:text-green-600 focus:outline-none"
          >
            Save
          </button>
          <button
            @click="cancelEdit"
            class="text-gray-500 hover:text-gray-600 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>

      <!-- Delete button -->
      <button
        @click="deleteTodo(todo.id)"
        class="text-red-500 hover:text-red-600 focus:outline-none"
      >
        Delete
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    todos: Array, // Accept the todos array as a prop
    toggleTodo: Function, // Accept the toggleTodo method as a prop
    deleteTodo: Function, // Accept the deleteTodo method as a prop
    updateTodo: Function, // Accept the updateTodo method as a prop
  },
  data() {
    return {
      editingId: null,
      editedText: '',
    };
  },
  methods: {
    startEditing(id, text) {
      this.editingId = id;
      this.editedText = text;
    },
    saveEdit(id) {
      if (this.editedText.trim()) {
        this.updateTodo(id, this.editedText.trim());
        this.editingId = null;
        this.editedText = '';
      }
    },
    cancelEdit() {
      this.editingId = null;
      this.editedText = '';
    },
  },
};
</script>

<style scoped>
.line-through {
  text-decoration: line-through;
}
</style>

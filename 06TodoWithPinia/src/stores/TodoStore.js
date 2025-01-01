import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    todos: [],
  }),
  actions: {
    addTodo(todo) {
      this.todos.push({ id: Date.now(), text: todo, completed: false });
    },
    toggleTodo(id) {
      const todo = this.todos.find((t) => t.id === id);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo(id) {
      console.log("Deleting todo with id:", id);
      this.todos = [...this.todos.filter((t) => t.id !== id)]; // Spread into a new array for reactivity
    },
  },
});

import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router/Index.js"; // Import the router
import "./assets/style.css";

const app = createApp(App);

app.use(router); // Use the router in the app

app.mount("#app");

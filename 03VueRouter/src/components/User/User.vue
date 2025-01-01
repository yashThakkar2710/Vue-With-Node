<template>
  <div class="bg-gray-600 text-white text-3xl p-4">
    User: {{ userid }}
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  name: "User",
  setup() {
    const route = useRoute();
    const userid = route.params.userid;  // Accessing the dynamic route parameter

    return {
      userid,
    };
  },
};
</script>

<style scoped>
/* Add custom styles here if necessary */
</style>

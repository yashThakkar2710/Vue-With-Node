<template>
  <div class="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
    <h2>Github followers: {{ githubData.followers }}</h2>
    <img :src="githubData.avatar_url" alt="GitHub Avatar" width="300" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      githubData: {
        followers: 0,
        avatar_url: '',
      },
    };
  },
  created() {
    this.fetchGithubData();
  },
  methods: {
    async fetchGithubData() {
      try {
        const response = await fetch('https://api.github.com/users/yashThakkar2710');
        const data = await response.json();
        this.githubData = data;
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Add any styles for the GitHub page here */
</style>

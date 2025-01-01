<template>
  <header class="bg-gray-800 text-white p-4 sticky top-0 shadow-lg z-50">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo Section -->
      <router-link to="/" class="flex items-center space-x-2">
        <img
          src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
          alt="Logo"
          class="h-12"
        />
       
      </router-link>

      <!-- Navigation Links -->
      <nav>
        <ul class="flex space-x-6">
          <li>
            <router-link
              to="/"
              class="text-white hover:text-orange-500 transition duration-300"
              active-class="text-orange-500"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              class="text-white hover:text-orange-500 transition duration-300"
              active-class="text-orange-500"
            >
              About
            </router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              class="text-white hover:text-orange-500 transition duration-300"
              active-class="text-orange-500"
            >
              Contact
            </router-link>
          </li>
          <li>
            <router-link
              to="/github"
              class="text-white hover:text-orange-500 transition duration-300"
              active-class="text-orange-500"
            >
              Github
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
/* Header styles */
header {
  background-color: #2d3748; /* Dark background */
  padding: 1rem;
}

header .container {
  max-width: 1200px; /* Center content within the container */
}

nav ul {
  display: flex;
  gap: 1.5rem; /* Space between navigation links */
}

nav a {
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
}

nav a:hover {
  color: #f59e0b; /* Orange hover effect */
}
</style>

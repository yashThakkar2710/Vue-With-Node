<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-6">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
      <h1 class="text-2xl font-bold mb-6 text-center">Resume Uploader</h1>
      <form @submit.prevent="handleSubmit">
        <!-- Name -->
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium mb-1">Name</label>
          <input
            id="name"
            type="text"
            v-model="formData.name"
            class="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your name"
            required
          />
        </div>

        <!-- Email -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium mb-1">Email</label>
          <input
            id="email"
            type="email"
            v-model="formData.email"
            class="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your email"
            required
          />
        </div>

        <!-- Phone -->
        <div class="mb-4">
          <label for="phone" class="block text-sm font-medium mb-1">Phone Number</label>
          <input
            id="phone"
            type="tel"
            v-model="formData.phone"
            class="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your phone number"
            required
          />
        </div>

        <!-- Expected Salary -->
        <div class="mb-4">
          <label for="salary" class="block text-sm font-medium mb-1">Expected Salary</label>
          <input
            id="salary"
            type="number"
            v-model="formData.salary"
            class="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Expected salary in USD"
            required
          />
        </div>

        <!-- Portfolio -->
        <div class="mb-4">
          <label for="portfolio" class="block text-sm font-medium mb-1">Portfolio Link</label>
          <input
            id="portfolio"
            type="url"
            v-model="formData.portfolio"
            class="w-full p-2 border border-gray-300 rounded-md"
            placeholder="https://yourportfolio.com"
          />
        </div>

        <!-- Preferred Job Location -->
        <div class="mb-4">
          <label for="location" class="block text-sm font-medium mb-1">Preferred Job Location</label>
          <input
            id="location"
            type="text"
            v-model="formData.location"
            class="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Preferred job location"
          />
        </div>

        <!-- Description -->
        <div class="mb-4">
          <label for="description" class="block text-sm font-medium mb-1">Short Description</label>
          <textarea
            id="description"
            v-model="formData.description"
            class="w-full p-2 border border-gray-300 rounded-md"
            placeholder="A short description about yourself"
          ></textarea>
        </div>

        <!-- Resume -->
        <div class="mb-4">
          <label for="resume" class="block text-sm font-medium mb-1">Resume</label>
          <input
            id="resume"
            type="file"
            @change="handleFileUpload"
            class="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition disabled:bg-gray-400"
        >
          {{ loading ? 'Uploading...' : 'Submit' }}
        </button>
      </form>

      <!-- Success Message -->
      <div v-if="message" class="mt-4 text-center text-green-500 font-medium">
        {{ message }}
      </div>

      <!-- Error Message -->
      <div v-if="error" class="mt-4 text-center text-red-500 font-medium">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ResumeUploader",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        salary: "",
        portfolio: "",
        location: "",
        description: "",
        resume: null,
      },
      loading: false,
      message: "",
      error: "",
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.formData.resume = file;
    },
    async handleSubmit() {
      if (!this.formData.resume) {
        alert("Please upload your resume.");
        return;
      }

      this.loading = true;
      this.message = "";
      this.error = "";

      const formData = new FormData();
      Object.keys(this.formData).forEach((key) => {
        formData.append(key, this.formData[key]);
      });

      try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/users/upload-resume",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        this.message = "Resume uploaded successfully!";
      } catch (err) {
        console.error("Error uploading resume:", err);
        this.error = "An error occurred while uploading the resume. Please try again.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
/* Add styles if necessary */
</style>

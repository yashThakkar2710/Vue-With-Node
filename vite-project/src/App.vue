<script setup>

import {  ref} from "vue";

    const name =ref('yash')
    const status = ref('active')
    const tasks= ref(['one','two','three'])
    const newTask = ref('')

    const toggleStatus = ()=>{
      if (status.value==='active') {
        status.value ='pending'
    }else if(status.value==='pending'){
      status.value=''
    }else{
      status.value='active'
    }
    }

    const addTask=()=>{
      if(newTask.value.trim() !== ''){
        tasks.value.push(newTask.value)
        newTask.value=''
      } 
    }
    
  
</script>

<template>
  <h1>Hello from the {{ name }} </h1>
  <h2 v-if="status === 'active'">user is active</h2>
  <h2 v-else-if="status === 'pending'">user is pending</h2>
  <p v-else>user is not active</p>
 
 
  <h2>taks</h2>
  <ul>
   <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
 
  <!-- <a v-bind:href="link">open google</a> -->
  <!-- <a :href="link">open google</a> -->
 
 <br>
 <br>
 <!-- <button v-on:click="toggleStatus()"> change stauts</button> -->
 <button @click="toggleStatus()"> change stauts</button>

 <form @submit.prevent="addTask">
  <label for="newTask">add Task</label>
  <input type="text" id="newTask" name="newTask" v-model="newTask">
  <button  type="submit"> addtask</button>
 </form>
 </template>
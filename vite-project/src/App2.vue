<script >
  export default{
    data(){
    return {
    name:"thakkar Yash",
    status:"active",
    tasks :['taskone','tasktwo','taskthree'],
    link:"https://google.com"
  }
 },
 methods:{ 
  toggleStatus(){
    if (this.status==='active') {
      this.status ='pending'
    }else if(this.status==='pending'){
      this.status=''
    }else{
      this.status='active'
    }
  }
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
 <a :href="link">open google</a>

<br>
<br>
<button v-on:click="toggleStatus()"> change stauts</button>
</template>

<style scoped>

</style>

<template>
hello From the Props
<h1>My Name Is : {{ name }} {{ user.surName }}</h1>
<h2> Email : {{ user.Email }}</h2>

<button v-on:click="passData(userName)">chick</button>
</template>

<script>
export default{
  
  name:'Props',
  data(){
    return{
      userName:"Yash Thakkar"
    }
  },
  props:{
    name:String,
    user:Object,
    passData:Function
  }
}
</script>
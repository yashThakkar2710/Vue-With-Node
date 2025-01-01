<template>
<h1>Hello From the Homr Component</h1>
<h2>Email : {{ email }}</h2>
<h2>Mobile: {{ monile }}</h2>
<h2>name : {{ getname() }}</h2>
<h2>Email : {{ getEmail() }}</h2>
</template>
<script>
export default {
  name:"Home",
  data(){
//  data fuction is used to pass the script variable to the template this is called interpolation
    return{
      email:'yash@gmail.com',
      monile: 999999,
      getname(){
        return 'yash Thakkar'
      }
    }
  },
  methods:{
    // method fuction is used for the getting the access of the data variable in the functions
    getEmail(){
      return this.email
    }
  }
}
</script>

<style scoped> 
/* scoped style will make its scope only to the component it will not pass or share with other */
h1{
  color: blueviolet;
}

</style>

<template>

  <h1>Hello From ConditioanlRendering</h1>

  <h2 v-if="show === 'active'">User Is active</h2>
  <h2 v-else-if="show === 'pending'">User Is pending</h2>
  <h2 v-else="show">user is inActive</h2>
  <button v-on:click="ChnageUser()">change</button>
</template>
<script>
export default{
  name:'ConditionalREndering',
  data(){
    return{
      show:'pending'
    }
  },
  methods:{
    ChnageUser(){
      if(this.show ==='active'){
        this.show= 'pending'
      }else if(this.show === 'pending'){
        this.show =''
      }else{
        this.show ='active'
      }
    }
  }
}
</script>
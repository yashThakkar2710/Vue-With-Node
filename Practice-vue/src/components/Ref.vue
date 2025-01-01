<template>

<h2>hello from ref</h2>
<input type="text" ref="input"/>
<button v-on:click="getData">click Me</button>
<p>{{ val }}</p>
</template>
<script>
export default{
  name:"Ref",
  data(){
    return{

      val:''
    }
  },
  methods:{
    getData(){
      this.$refs.input.focus()
      this.val = this.$refs.input.value

    }
  }
}</script>
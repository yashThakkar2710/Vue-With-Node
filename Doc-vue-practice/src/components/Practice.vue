<script>
import vue from '../assets/vue.svg'


export default {
  name:'Practice',
  data(){
    return{
       rawHtml: '<h1>This is a <span style="color: red;">raw HTML</span> example</h1>',
        imageUrl:vue ,
      imageAlt: 'Example image'
    }
    
  }

  
}</script>
<template>
  
  Hello from the Practice
  <div v-html="rawHtml"></div>
  <div >{{ rawHtml }}</div>

  <img v-bind:src="imageUrl" v-bind:alt="imageAlt" />
  <img :src="imageUrl" :alt="imageAlt" />




</template>

<script>
export default{
    name :'Event',
    data(){
     return{

       count:0,
       text:'',
       name:null,
       email:null,
       technology:[]
     }
    },
    methods:{
      testOn(data){
        console.log(data)
      },
      increaseCount(){
        this.count++
      },
      decreaseCount(){
        this.count--
      },
      getData(){
        
          console.log('name :',this.name , 'email :', this.email)
        
      }
    }
  }
</script>
<template>
  <h1>Hello From THe even</h1>
  <button v-on:click="testOn('yash')">click Me</button>
  <h3>count {{ count }}</h3>
  <button v-on:click="increaseCount()">+</button>
  <button v-on:click="decreaseCount()">-</button>
<br>
<br>
<br>

<!-- // two way binding in this we use v-model so when me make change it will change in the variable also -->
<input  type="text"  v-model="text"/>
<p>{{ text }}</p>

<br>
<br>

<input  type="text"  placeholder="name" v-model="name"/>
<br>
<br>
<input  type="password" placeholder="password" v-model="email"/>
<button v-on:click="getData()">getData</button>
<p>'name :',{{ name}} , 'email :', {{email }} </p>




<h3>
  Technology
</h3>

<label for="javaScript">javaScript</label>
<input type="checkbox" value="javaScript" v-model="technology" id="javaScript">


<label for="react">react</label>
<input type="checkbox" value="react" v-model="technology" id="react">


<label for="vue">vue</label>
<input type="checkbox" value="vue" v-model="technology" id="vue">

<p>{{ technology }}</p>



<ul>
  <li v-for="tech of technology" :key="tech">{{ tech }}</li>
</ul>
</template>
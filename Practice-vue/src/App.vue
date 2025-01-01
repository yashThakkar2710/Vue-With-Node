<script >
// import Home from './components/Home.vue';
// import ConditionalREndering from './components/ConditionalREndering.vue';
// import Event from './components/Event.vue';
// import Props from './components/Props.vue';

import Ref from './components/Ref.vue';



export default {
  name:'App',
  components :{
    // Home,
    // Event,
    // ConditionalREndering
    // Props
    Ref
  },
  data(){
    return{
      user:{surName:"Thakkar",Email:"yash@gmail.com"},
      fullName:""
    }
  },
  methods:{
      passData(data){
        console.log(this.user.surName)
        console.log(data)
        this.fullName = data
      }
    }
}
 </script>

<template>
 <!-- <Home/> -->
<!-- <Event/> -->
<!-- <ConditionalREndering/> -->
 <!-- <Props name="Yash"  :user="user"  :passData="passData"/> -->
 <!-- <h2>{{ fullName }}</h2> -->
  <Ref/>
</template>


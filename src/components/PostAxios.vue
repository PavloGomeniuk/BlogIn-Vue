<template lang="html">
  <div>
   <form @submit.prevent="formSubmit">
   <input type="text" v-model="postBody.title"/>
   <input type="submit"/>
   </form>
    <ul v-if="errors && errors.length">
    <li v-for="(error,index) of errors" :key="index">
    {{error.message}}
    </li>
    </ul>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data: ()=> ({
      postBody:{
        title:"",
      },
      errors:[]
    }),

methods: {
  formSubmit() {
    const Big=this.postBody;
  axios
    .post(
      "http://localhost:3000/posts/",
      Big
    )
    .then(response => {
      this.resp = response;
    })
    .catch(e => {
      console.error(e);
    })}
}
}

   
</script>

<style lang="scss" scoped>
 
</style>

<template lang="html">
  <div class="journal-item">
      <h3>{{post.title}}</h3>
       <p class="full-post__text">{{post.text}}</p>
      <router-link :to="{ name: 'journal'}">
        <button>Back</button>
      </router-link> 
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    props: ['id'],

    metaInfo() {
      return {
        title: this.post && this.post.title,
      };
    },

    data() {
      return {
        post: null,
        endpoint: 'http://localhost:3000/posts/',
      }
    },

    methods: {
      getPost(id) {
        axios(this.endpoint + id)
          .then(response => {
            this.post = response.data
          })
          .catch( error => {
            console.log('-----error-------');
            console.log(error)
          })
      }
    },
    
    created() {
      this.getPost(this.id);
    },

    watch: {
      '$route'() {
        this.getPost(this.id);
      }
    }
  }
</script>

<style lang="scss" scoped>
 .journal-item{
  display: flex;
  flex-direction: column;
    text-align: center;
    h3{
      font-size: 40px;
      margin-bottom: 50px;
    }
    p{
      font-size: 15px;
      font-style: italic;
      margin-bottom: 20px;
    }
    a{
      button{
      width:90px;
      text-align:center;
      display:block;
      font-family: arial;
      text-decoration: none;
      font-weight: 300;
      font-size: 14px;
      border: #1c673a 1px solid;
      color: #2b332c;
      padding: 3px;
      padding-left: 5px;
      padding-right: 5px;
       margin: 20px auto;
      transition: .5s;
      border-radius: 0px;
      &:hover {
        top: 5px;
        transition: .5s;
        color: #10FF58;
        border: #10FF58 1px solid;
        border-radius: 10px;
      }
      &:active {
        color: #000;
        border: #1A1A1A 1px solid;
        transition: .07s;
        background-color: #FFF;
      }
        }
    }
}
</style>

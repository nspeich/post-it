<template >

  <h1>Welcome in your new post-it app </h1>
<h2>Add a new post it
  <button v-on:click="addPostIt" class="btn bg">+</button></h2>
  <div class="panel">
    <PostIt
      @deleted="onDeleteChild"
      v-for="postit in postitList"
      v-bind:postitObject="postit"
      v-bind:key="postit.id"
    >
    </PostIt>
      </div>
    <footer>All right reserved by Coding Academy</footer>

</template>

<script>
import PostIt from "./PostIt.vue";
import { getAllPostIt, deletePostIt } from "./PostItService";
import router from "../router/index";

export default {
  name: "PostItPanel",
  components: {
    PostIt,
  },
  data() {
    return {
      postitList: getAllPostIt(),
    };
  },
  methods: {
    addPostIt: function () {
      router.replace({ name: "AddPostIt" });
    },
    onDeleteChild: function (value) {
      console.log("deleting posit id "+value);
      deletePostIt(value);
      this.postitList = getAllPostIt();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.panel {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 250px 250px 250px;
  column-gap: 100px;
  row-gap: 30px;
  justify-content: center;
  padding-top: 20px;
  background: linear-gradient(-455deg, #bbbbbb, #a0bdfa)
}

.bg {
  background: linear-gradient(-455deg, #bbbbbb, #a0bdfa);
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.btn {
  text-decoration: none;
  border:none;
  background: transparent;
  /* color: rgb(51, 48, 1); */
  font-family: sans-serif;
  font-size: 25px;
  box-shadow: 0.125rem 0.125rem 0.25rem #f8f1b1;
}
.btn:hover{
  box-shadow: 0.2rem 0.2rem 0.25rem #fade3f;

}

</style>


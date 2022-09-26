<template>
  <div class="container">
    <label for="title" class="label">Title</label>

    <input type="text" id="title" v-model="title" placeholder="Post-it title" />

    <label for="subject" class="label">Post-it content</label>
    <textarea
      id="subject"
      v-model="description"
      placeholder="write your post-it here"
      style="height: 200px"
    ></textarea>
<div class="button-container">
    <input type="submit" value="Add Post-it" v-on:click="addPostIt"/>
    <input type="submit" value="Cancel" v-on:click="cancelAddPostIt"/>
</div>
  </div>
</template>

<script>
import { createPostIt } from "./PostItService";
import router from '../router/index';

export default {
  name: "AddPostIt",
  data() {
    return {
      title: "",
      description: "",
    };
  },
    methods: {
    addPostIt: function () {
      createPostIt(this.title,this.description);
      router.replace({ name: "PostItPanel" });
    },
    cancelAddPostIt: function () {
      router.replace({ name: "PostItPanel" });
    },
  },
};
</script>

<style scoped>
.label {
  display: flex;
  width: 300px;
  font-style: Roboto;
  color: rgb(52, 119, 243);
  font-size: medium;
  font-weight: 700;
  margin-left: 5px;
  margin-bottom: 0px;
  margin-top: 10px;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}
* {
  box-sizing: border-box;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 12px;
  font-style: Roboto;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: #6183ca;
  color: white;
  width: 125px;
  font-style: Roboto;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: auto;
}

input[type="submit"]:hover {
  background-color: cornflowerblue;
}

.container {
  display: flex;
  flex-direction: column;
  width: 400px;
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 5em;
  margin-bottom: 40px;
  margin-left: auto;
  font-style: Roboto;
  margin-right: auto;
  user-select: none;
  overflow-x: auto;
  border-radius: 5px;
  background-color: rgb(248, 230, 150);
  padding: 20px;
  box-shadow: 0.25rem 0.25rem 0.5rem #99add8;
  border-radius: 0.75rem;
}

.button-container{
  display: flex;
  flex-direction: row;  
  width: 100%;
  justify-content: space-between;
}
</style>
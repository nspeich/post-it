<template>
  <div id="id" class="postit">
    <i class="icon" v-on:click="deletePostit">x</i>
    <div v-on:click="modifyPostIt" class="post-it-note" ref="postit">
      <p>{{ postitObj.title }}</p>
      {{ postitObj.description.substring(0, 150) + " ..." }}
    </div>
  </div>
</template>

<script>
import router from "../router/index";

export default {
  name: "PostIt",
  props: ["postitObject"],
  data() {
    return {
      postitObj: this.postitObject,
    };
  },
  methods: {
    // created: function () {
    //   this.$refs.postit.style.background = this.postitObj.color;
    // },
    deletePostit: function () {
      this.$emit("deleted", this.postitObj.id);
    },
    modifyPostIt: function () {
      router.replace({ name: "ModifyPostIt" , params: { id: ""+this.postitObject.id}});
    },
  },
};
</script>

<style>
h1 {
  font-family: Helvetica;
  color: black;
  text-align: center;
}

.postit {
  display: flex;
  flex-direction: column;
  border-radius: 5%;
  width: auto;
  border-style: 1px solid #6b6b04;
  background-color: #ffd707;
  padding: 0.3rem;
  box-shadow: 0.25rem 0.25rem 0.5rem #5c6c8f;
}

.icon {
  color: #a59227;
  font-size: larger;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;
  font-weight: 600;
  align-self: flex-end;
  margin-top: -5px;
  margin-bottom: -15px;
  margin-right: 3px;
}

.icon:hover {
  color: #6183ca;
}

.post-it-notebody {
  background: #323232;
}

div {
  /* width: 20%; */
  min-width: 10em;
  margin: 1em auto;
}

p {
  font-family: helvetica;
  font-size: 2em;
  font-weight: bold;
  margin-top: 25px;
}

.post-it-note {
  padding: 0.5em;
  background: rgb(243, 243, 134);
  position: relative;
  font-style: Roboto;
  font-size: small;
  min-height: 7em;
  height: 80%;
  margin: 2px;
  margin-top: 15px;
  cursor: text;
}
</style>
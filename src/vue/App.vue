<template>
<div>
  <h2>hello vue</h2>
  <h2>{{message}}</h2>
  <hello-world></hello-world>
</div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue"
  export default {
    components: {
      HelloWorld
    },
    data() {
      return {
        title: "hello world",
        message: "hhh"
      }
    }
  }
</script>

<style scoped>
h2 {
  color: red;
}
</style>
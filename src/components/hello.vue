<template>
  <div class="hello">
    <div>
      <input placeholder="姓名" v-model="username"/>
      <button @click="directHome">start</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome You',
      username: ''
    }
  },
  methods: {
    directHome: function () {
      this.$store.commit('setUsername', this.username)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

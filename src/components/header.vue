<template>
  <div>
    <div class="header-left">
      <button @click="confirmReturnHome">返回</button>
    </div>
    <div class="header-right">
      <span>{{$store.getters.getUsername()}}</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    confirmReturnHome: function () {
      let confirm = window.confirm('返回欢迎页')
      if (confirm === true) {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style>
  .header-left {
    float: left;
  }

  .header-right {
    float: right;
  }
</style>

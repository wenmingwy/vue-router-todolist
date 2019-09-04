<template>
  <div class="todolist">
    <li>
      <input type="checkbox" v-model="checked" 
			@click="changestatus"/>
      {{ $store.getters.getList(length-1)}}
    </li>
  </div>
</template>

<script>
export default {
  name: 'todolist',
  data() {
    return {
      checked: false
    }
  },
  methods:{
	changestatus:{
		return this.$store.commit('changeStatus',{length,checked})
	}
  }
}
</script>


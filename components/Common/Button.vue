<template>
    <button v-if="type!='anchor'" @click="handleEv">{{btnText}}</button>
    <NuxtLink v-else class="btnTheme" :to="redirectTo">{{btnText}}</NuxtLink>
</template>
<script>
export default {
  name: 'Button',
  props: ['btnText','redirectTo','type'],
  methods: {
  	handleEv () {
  	  $this.emit('btnClick')
  	}
  }
}
</script>

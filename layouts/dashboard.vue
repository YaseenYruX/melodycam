<template>
  <div :class="bodyCls">
  	<CommonHeader />
    <Nuxt />
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
    
  },
	head () {
		return {
			bodyAttrs: {
			  class: this.bodyCls
			}
		}
	},
	computed: {
	 bodyCls () {
	   return this.$store.state.bodyClass
	 }
	},
}
</script>

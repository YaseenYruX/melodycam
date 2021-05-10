<template>
	<div>
		<b-modal v-model="modalShow" id="side-menu" ref="side-menu" hide-footer>
		  <div class="setting_head">
        <h2>Setting</h2>  
      </div>

      <div class="setting_list">
        <ul>
          <li>
            <select class="custom-select">
              <option selected>Select Country</option>
              <option value="1">Select Country</option>
              <option value="2">Select Country</option>
              <option value="3">Select Country</option>
            </select>
          </li>

          <li>
            <select class="custom-select">
              <option selected>Select Language</option>
              <option value="1">Select Language</option>
              <option value="2">Select Language</option>
              <option value="3">Select Language</option>
            </select>
          </li>

          <li>Enable Dark Theme
              <span>
                <label class="switch">
                  <input type="checkbox" v-model="themeTgl">
                  <span class="slider round"></span>
                </label>
              </span>
            </li>

            <li><a href="#">Help</a></li>
        </ul>
      </div>
		</b-modal>
	</div>
</template>
<script>
export default {
  name: 'SideMenu',
  data () {
    return {
      modalShow: this.status,
      themeTgl: false,
      intializing: false
    }
  },
  props: {
    status: Boolean
  },
  async mounted (){
    this.themeTgl = this.$store.state.bodyClass==='light-theme'?false:true
    await this.$nextTick()
    this.intializing = true
  },
  watch: {
    modalShow () {
      this.$emit('sideMenuStatus',this.modalShow)
    },
    themeTgl () {
      if(this.intializing===true){
        if(this.themeTgl===true){
          this.$store.commit('offLight')
        }else {
          this.$store.commit('openLight')
        }
      }
    }
  }
}
</script>
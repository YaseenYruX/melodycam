<template>
	<div>
		<b-modal id="my-modal" size="lg" ref="my-modal" hide-footer>
		  <div class="login_sec_main in_modal">
          <CommonModalHead />
          <div class="modal_heading_sec">
            <h3>Update</h3>
            <p>You need to be log-in to use the Free Filtering System on Melodycam. We have updated the filtering system which will find the correct match faster</p>
          </div>
          <div class="row">
            <div class="col-md-12">
              <button @click="loginModalStatus=true" class="loginBtn">Ok, thank you</button>
             <!-- <CommonButton redirectTo="dashboard" btnText="Ok, thank you" /> -->
            </div>
          </div>
        </div>
		</b-modal>
    <DashboardLogin @loginModalStatusEv="updateLoginModal" :status="loginModalStatus" />
	</div>
</template>
<script>
export default {
  name: 'Update',
  methods: {
	updateLoginModal (da) {
		this.loginModalStatus=da
	}
  },
  data () {
    return {
	    loginModalStatus: false
    }
  },
}
</script>

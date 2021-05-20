<template>
	<div class="header_sec">
		<div class="row">
			<div class="col-md-4">
				<div class="logo_sec">
					<h2><NuxtLink to="/">MelodyCam</NuxtLink></h2>
				</div>
			</div>

			<div class="col-md-8">
				<div class="user_setting float-right" :class="(modalStatus===true?'pop-up':'')">
					<ul>
						<li><a @click="modalStatus=true" ><img src="~assets/images/setting-icon-01.png"></a></li>
						<li>
							<a class="loginBtn" @click="loginModalStatus=true">
								<!-- <img src="~assets/images/setting-icon-02.png"> -->
								Sign Up
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<CommonSideMenu v-if="modalStatus" :status="modalStatus" @sideMenuStatus="tglCls" />
    	<DashboardLogin @loginModalStatusEv="updateLoginModal" :status="loginModalStatus" />
	</div>
</template>
<script>
export default {
  name: 'Header',
  methods: {
  	tglCls (status) {
  		this.modalStatus=status
  	},
	updateLoginModal (da) {
		this.loginModalStatus=da
	}
  },
  data () {
    return {
      modalStatus: false,
	  loginModalStatus: false
    }
  },
}
</script>

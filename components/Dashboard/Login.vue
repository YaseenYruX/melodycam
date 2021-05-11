<template>
	<div>
		<b-modal v-model="modalShow" id="my-modal1" size="lg" ref="my-modal1" hide-footer>
		  <div class="login_sec_main in_modal">
          <CommonModalHead />
          <div class="modal_heading_sec">
            <h3>Login</h3>
          </div>
          <form>
            <div class="row">
              <div class="col-md-12">
                <b-form-input v-model="email" placeholder="Email"></b-form-input>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <b-form-input v-model="name" placeholder="Name"></b-form-input>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <b-form-input type="password" v-model="password" placeholder="Password"></b-form-input>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <b-form-checkbox v-model="rememberStatus">
                  Remember my data
                </b-form-checkbox>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mt-4">
                <div data-captcha-enable="true"></div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
               <CommonButton btnText="Next" />
              </div>
            </div>

          </form>
        </div>
		</b-modal>
	</div>
</template>
<script>
import { human_verifier_src_script } from "@/config/urls";
export default {
  name: 'LoginModal',
  data () {
    return {
      email:'',
      name: '',
      password: '',
      rememberStatus: false,
      modalShow: false
    }
  },
  props: {
    status: Boolean,
  },
  mounted() {
    
  },
  methods: {
    loadExternalScript() {
      const externalScript = document.createElement("script");
      externalScript.src = human_verifier_src_script;
      externalScript.onload = () => this.$emit("humanverifier:done");
      document.querySelector("body").appendChild(externalScript);
    },
  },
  watch: {
    modalShow () {
      this.$emit('loginModalStatusEv',this.modalShow)
      this.$nextTick(() => {
          this.loadExternalScript();
      });
    },
    status () {
      this.modalShow=this.status
    }
  }
}
</script>

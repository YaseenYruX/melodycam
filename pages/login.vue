<template>
  <div class="container signup">
    <div class="row">
      <div class="col-md-8 mx-auto">
        <div class="login_sec_main">
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
                <b-form-checkbox v-model="status">
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
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { human_verifier_src_script } from "@/config/urls";
export default {
  name: 'Login',
  layout: 'plain',
  components: {
    
  },
  data () {
    return {
      status: false,
      email: '',
      name: '',
      password: ''
    }
  },
  computed: {
    
  },
  methods: {
    loadExternalScript() {
      const externalScript = document.createElement("script");
      externalScript.src = human_verifier_src_script;
      externalScript.onload = () => this.$emit("humanverifier:done");
      document.querySelector("body").appendChild(externalScript);
    },
  },
  mounted() {
    this.$nextTick(() => {
        this.loadExternalScript();
    });
  },
}
</script>

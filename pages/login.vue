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
    
  }
}
</script>

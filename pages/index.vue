<template>
  <div class="container">
    <div class="row">
      <div class="col-md-11">
        <div class="video_chating_sec">
          <h2>MelodyCam</h2>
          <h4>Find new friends by video chatting with  people from all over the world!</h4>
          <p>*All features are free for our user. You will need to be logged to use our cam site.</p>

          <CommonButton redirectTo="dashboard" type="anchor" btnText="Search Now" />
          <!-- <h6>Have an account?</h6>
          <NuxtLink to="/login">Login to your existing Account!</NuxtLink> -->
        </div>
      </div>

      <div class="col-md-1">
        <div class="melocam_right_img">
          <img src="~assets/images/circle_vector_01.png" class="img-responsive show-dek" alt="">
          <img src="~assets/images/home-btm-responsive.png" class="img-responsive show-mobile" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: 'App',
  components: {
    
  },
  data () {
    return {
      
    }
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>

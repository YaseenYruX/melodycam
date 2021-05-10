<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="menu_dashboard_sec">
          <ul>
            <li><a href="#">Female</a></li>
            <li><a href="#">male</a></li>
            <li><a href="#">Couple</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="dashboard_sec_tab">
      <div class="row">
        <div class="col-md-6">
          <div class="left_dashboard_sec">
            <div class="search_btn">
              <a v-b-modal.my-modal ><img src="~assets/images/search_icon.png">Searching for female</a>
            </div>
          </div>

          <div class="left_dashboard_sec">
            <div class="microphone_icon">
              <ul>
                <li><a href="#"><img src="~assets/images/microphone.svg"></a></li>
                <li><a href="#"><img src="~assets/images/video-camera.svg"></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-6 pp0" :class="(chatShowing===true?'p-0':'')">
          <div class="chat_sec_tab"  :class="(chatShowing===true?'show_chat_sec':'')">
            <div @click="showChat" class="chat_head_tab">
              <h3>Chat</h3>
            </div>
            <div class="chat_list_main">
              <div class="chat_list" :class="(chatShowing===true?'show_list':'')">
                <div class="messages sent_msg">
                  <div class="profile_img">
                    <img src="~assets/images/profile_img.png">
                  </div>
                  <div class="message_text">
                    <p>Hi, how are you?</p>
                  </div>
                </div>

                <div class="messages recieve_msg">
                  <div class="message_text text-right">
                    <p>Hi, how are you?</p>
                  </div>
                  <div class="profile_img text-center">
                    <img src="~assets/images/profile_img.png">
                  </div>
                </div>
              </div>
              <div class="sendMsg">
                <input type="text" name="" placeholder="Write to your new friend">
                <ul>
                  <li><a href="#"><img src="~assets/images/happy.png"></a></li>
                  <li><a href="#"><img src="~assets/images/send.png"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DashboardUpdate />
  </div>
</template>

<script lang="js">
export default {
  name: 'App',
  layout: 'dashboard',
  components: {
    
  },
  data () {
    return {
      chatShowing: false
    }
  },
  computed: {
    
  },
  methods: {
    showChat () {
      this.chatShowing = !this.chatShowing
    }
  }
}
</script>

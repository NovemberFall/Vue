<template>
      <div class="background">
          <div class="phone">
              <div class="speaker"></div>
                    <div class="screen">        
                            <div class="welcome container">
                                <div class="card">
                                  <div class="card-content center-align">
                                    <h2 class="teal-text">Welcome</h2>
                                      <form @submit.prevent="enterChat">
                                        <label for="name">Enter your name:</label>
                                          <input class="inputName" type="text" name="name" v-model="name">
                                          <p v-if="feedback" class="hint-text">{{feedback}}</p>
                                        <button class="btn teal">Enter Chat</button>
                                      </form>
                                  </div>
                                </div>
                            </div>         
                    </div>
              <div class="home"></div>   
          </div>
      </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods:{
    enterChat(){
      if (this.name){
        this.$router.push({name: 'Chat', params: {name: this.name}})
      }else{
        this.feedback = 'You must enter a name to join'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../assets/style/welcome.css';
</style>
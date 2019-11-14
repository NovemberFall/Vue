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
      name: null
    }
  },
  methods:{
    enterChat(){
      console.log(this.name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../assets/style/welcome.css';
</style>
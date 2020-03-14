<template>
      <div class="background">
          <div class="phone">
              <div class="speaker"></div>
                    <div class="screen"> 
                            <div class="home">
                                  <player />
                            </div>
                    </div>
              <div class="homeBtn"></div>   
          </div>
      </div>
</template>

<script>
import Player from '../components/Player.vue'
export default {
  components: {
    Player
  }
}
</script>

<style lang="scss">

@import '../assets/style/home.css';


.home {
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  // background-color: #ffedff;
  
}
</style>

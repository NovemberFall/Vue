### materializecss.com
- `https://materializecss.com/getting-started.html`
![](img/2019-11-06-11-25-22.png)
- cdn
```html
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
```

---
- we also need google font
- go to HTML Setup
```html
<!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```
![](img/2019-11-06-11-30-29.png)
---
- update index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
         <!--Import Google Icon Font-->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <title>music-chat</title>
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```
![](img/2019-11-06-11-32-16.png)
---

- rename components/HelloWorld.vue => Welcome.vue
![](img/2019-11-06-11-35-01.png)
---
- change the Helloworld => Welcome in `index.js`
```js
import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    }
  ]
})
```
![](img/2019-11-06-11-37-38.png)
---

### update welcome.vue
```html
<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
          <form @submit.prevent="enterChat">
            <label for="name">Enter your name:</label>
            <input type="text" name="name" v-model="name">
            <button class="btn teal">Enter Chat</button>
          </form>
      </div>
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
.welcome{
  
}
</style>
```
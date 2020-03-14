<template>
    <div class="chat container">
        <h2>{{this.name}}</h2>
        <h2>
            <a href="https://novemberfall.github.io/musicChat/" class="navItemLink">Chat to me</a>
        </h2>
    </div>
</template>


<script>
export default {
    name: 'Chat',
    props: ['name'],
    data(){
        return{

        }
    }    
}
</script>

<style>
h2{
    color: #ffffff;
}
a{
    color: #ffffff;
}

</style>
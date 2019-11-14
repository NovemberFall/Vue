<template>
    <div class="chat container">
        <h2>Chat {{this.name}}</h2>
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

</style>
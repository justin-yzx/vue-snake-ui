<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .block {
        display: block !important;
    }
    .center{
        text-align: center;
        margin: 0 auto;
    }
    .margin-top-20{
        margin-top: 20px;
    }

</style>

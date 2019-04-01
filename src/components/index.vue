<template>
    <div class="container">
        <theFirstScreen></theFirstScreen>
        <div class="index">
            <div class="header"></div>
            <div class="main"></div>
            <div class="footer"></div>
        </div>
    </div>
</template>

<script>
    import theFirstScreen from "./theFirstScreen"

    export default {
        name: "index",
        components:{
            theFirstScreen
        }
    }
</script>

<style scoped>
    .container{width: 100%;position: absolute;left: 0;transition: top 0.5s linear;}
    .main{height:150vh;}
</style>
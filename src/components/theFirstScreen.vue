<template>
    <div class="theFirstScreen">
        <div id="bg"></div>
        <div id="overlay"></div>
        <div class="main">
            <h1>Free your mind</h1>
            <div class="down">
                <p>Scroll Down</p>
                <svg width="42px" height="24px" viewBox="0 0 42 24" data-id="chevron-icon" class="iPUcQm">
                    <path transform="translate(-11.000000, -20.000000)" d="M36.1855,40.6932598 L52.1385,24.9527656 C53.2895,23.8180105 53.2875,21.9799588 52.1345,20.8481059 C50.9825,19.7152856 49.1175,19.7172204 47.9665,20.8519755 L32.0135,36.5924697 L16.0295,20.8819648 C14.8765,19.7491445 13.0105,19.7510793 11.8615,20.884867 C10.7105,22.019622 10.7125,23.8576737 11.8655,24.9895266 L27.8495,40.7009989 L30.6305,43.434859 C31.3995,44.1894276 32.6435,44.1874928 33.4095,43.4319568 L36.1855,40.6932598 Z"></path>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'index',
        data:function(){
            return {
            }
        }
    }
</script>

<style scoped>
    .theFirstScreen{width: 100%;height: 100vh;position: relative;overflow-x: hidden;}
    #bg {
        width: 3600px;
        background-size: 1200px auto;
        animation: bg 60s linear infinite;
        backface-visibility: hidden;
        transform: translate3d(0,0,0);
        background-color: #348cb2;
        background-image: url(../assets/bg.jpg);
        background-position: bottom left;
        background-repeat: repeat-x;
        height: 100%;
        left: 0;
        opacity: 1;
        position: absolute;
        top: 0;
    }
    @-moz-keyframes bg{0%{-moz-transform:translate3d(0,0,0);
        -webkit-transform:translate3d(0,0,0);
        -o-transform:translate3d(0,0,0);
        -ms-transform:translate3d(0,0,0);
        transform:translate3d(0,0,0)}
        100%{-moz-transform:translate3d(-1200px,0,0);
            -webkit-transform:translate3d(-1200px,0,0);
            -o-transform:translate3d(-1200px,0,0);
            -ms-transform:translate3d(-1200px,0,0);
            transform:translate3d(-1200px,0,0)}}
    @-webkit-keyframes bg{0%{-moz-transform:translate3d(0,0,0);
        -webkit-transform:translate3d(0,0,0);
        -o-transform:translate3d(0,0,0);
        -ms-transform:translate3d(0,0,0);
        transform:translate3d(0,0,0)}
        100%{-moz-transform:translate3d(-1200px,0,0);
            -webkit-transform:translate3d(-1200px,0,0);
            -o-transform:translate3d(-1200px,0,0);
            -ms-transform:translate3d(-1200px,0,0);
            transform:translate3d(-1200px,0,0)}}
    @-o-keyframes bg{0%{-moz-transform:translate3d(0,0,0);
        -webkit-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);
        -ms-transform:translate3d(0,0,0);
        transform:translate3d(0,0,0)}
        100%{-moz-transform:translate3d(-1200px,0,0);
            -webkit-transform:translate3d(-1200px,0,0);
            -o-transform:translate3d(-1200px,0,0);
            -ms-transform:translate3d(-1200px,0,0);
            transform:translate3d(-1200px,0,0)}}
    @-ms-keyframes bg{0%{-moz-transform:translate3d(0,0,0);
        -webkit-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);
        -ms-transform:translate3d(0,0,0);
        transform:translate3d(0,0,0)}
        100%{-moz-transform:translate3d(-1200px,0,0);
            -webkit-transform:translate3d(-1200px,0,0);
            -o-transform:translate3d(-1200px,0,0);
            -ms-transform:translate3d(-1200px,0,0);
            transform:translate3d(-1200px,0,0)}}
    @keyframes bg{0%{-moz-transform:translate3d(0,0,0);
        -webkit-transform:translate3d(0,0,0);
        -o-transform:translate3d(0,0,0);
        -ms-transform:translate3d(0,0,0);
        transform:translate3d(0,0,0)}
        100%{-moz-transform:translate3d(-1200px,0,0);
            -webkit-transform:translate3d(-1200px,0,0);
            -o-transform:translate3d(-1200px,0,0);
            -ms-transform:translate3d(-1200px,0,0);
            transform:translate3d(-1200px,0,0)} }

    #overlay {
        animation: overlay 1.5s 1.5s forwards;
        background-attachment: fixed,fixed;
        background-image: url(../assets/overlay-pattern.png),url(../assets/overlay.svg);
        background-position: top left,center center;
        background-repeat: repeat,no-repeat;
        background-size: auto,cover;
        height: 100vh;
        left: 0;
        opacity: 0;
        position:absolute;
        top: 0;
        width: 100%;}

    @-moz-keyframes overlay{0%{opacity:0}100%{opacity:1}}
    @-webkit-keyframes overlay{0%{opacity:0}100%{opacity:1}}
    @-o-keyframes overlay{0%{opacity:0}100%{opacity:1}}
    @-ms-keyframes overlay{0%{opacity:0}100%{opacity:1}}
    @keyframes overlay{0%{opacity:0}100%{opacity:1}}

    .main{height: 100vh;width: 100vw;left: 0;position: absolute;text-align: center;top: 0;}
    .main h1{color: #fff;}
    .main p{color: #fff;}
    .main .iPUcQm {width:30px;fill: rgb(255, 255, 255);}
    .main .down{position:absolute;bottom: 20px;left: 50%;transform: translateX(-50%);cursor:pointer;}
</style>

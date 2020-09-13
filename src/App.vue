<template>
    <div id="app">
        <Top class="top"></Top>
        <div class="main">
            <Nav class="nav"></Nav>
            <!-- 内容区域 -->
            <router-view class="page"></router-view>
        </div>
    </div>
</template>

<script>
import Nav from '@/layout/Nav'
import Top from '@/layout/Top'

export default {
    name: "App",
    components: { Top, Nav }
};
</script>


<style lang="scss">
html, body {
    min-width: 1000px;
    height: 100%;
    overflow: auto;
}
#app {
    height: 100%;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.top {
    height: 50px;
    line-height: 50px;
    // text-align: center;
    background-color: #333;
    box-shadow: 0 2px 10px 1px #999;
    color: #fff;
}
.main {
    display: flex;
    height: calc( 100% - 50px );
}
.nav, .page {
    height: 100%;
    overflow: auto;
}
.page {
    flex: 1;
    padding: 15px;
}
</style>

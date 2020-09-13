<template>
    <div>
        <img alt="Vue logo" src="@/assets/logo.png" />
    </div>
</template>

<script>

export default {
    name: "home",
    created() {
        // console.log("home");
    }
};
</script>

<style scoped>
.page {
    display: flex;
    align-items: center;
    justify-content: center;
}
img {
    /* width: 260px; */
    animation: blur 3s linear 1 forwards;
}
/* .page:hover img {
    animation: blur 2s linear 1 forwards;
} */
@keyframes blur {
    0% {
        filter: blur(10px) invert(50%);
        width: 200px; 
    }
    50% {
        filter: blur(5px) invert(25%);
        width: 230px;
    }
    100% {
        filter: blur(0) invert(0);
        width: 260px;
    }
}
</style>


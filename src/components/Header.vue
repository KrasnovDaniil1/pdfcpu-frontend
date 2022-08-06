<template>
    <nav
        class="vh-100 overflow-auto max-vh-100 d-flex flex-column text-center text-light fs-4 bg-dark py-3"
    >
        <router-link to="/" class="nav-link px-5 py-2 my-1">About</router-link>
        <router-link to="/sd" class="nav-link px-5 py-2 my-1"
            >AddStamp</router-link
        >
        <router-link to="/sd" class="nav-link px-5 py-2 my-1"
            >AddStamp</router-link
        ><router-link to="/sd" class="nav-link px-5 py-2 my-1"
            >AddStamp</router-link
        ><router-link to="/sd" class="nav-link px-5 py-2 my-1"
            >AddStamp</router-link
        ><router-link to="/sd" class="nav-link px-5 py-2 my-1"
            >AddStamp</router-link
        >
    </nav>
</template>
<script>
export default {
    name: 'Header',
};
</script>
<style lang="scss" scoped>
.router-link-active {
    position: relative;
    background: white;
    color: black;
    &:after {
        position: absolute;
        top: 0;
        right: 0;
        transform: translateY(-100%);
        background: white;
        border-radius: 0 0 20px 0;

        content: '';
        background: red;
        width: 20px;
        height: 20px;
    }
}
</style>

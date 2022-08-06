<template>
    <div class="d-flex">
        <Header />
        <router-view />
    </div>
</template>
<script>
import Header from './components/Header.vue';
export default {
    components: {
        Header,
    },
};
</script>

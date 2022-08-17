<template>
    <div class="card my-4 mx-auto text-danger" v-if="err">
        <h5 class="card-header fs-3">Ошибка</h5>
        <div class="card-body d-flex justify-content-center flex-column fs-3">
            <p class="card-text">{{ err }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Error',
    props: {
        err: String,
    },
};
</script>

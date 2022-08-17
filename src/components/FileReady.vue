<template>
    <div class="card my-4 mx-auto" v-if="url">
        <h5 class="card-header fs-3">Файл готов.</h5>
        <div class="card-body d-flex justify-content-center flex-column fs-3">
            <p class="card-text">Ссылка будет действовать 7 дней.</p>
            <a :href="url" target="_blank" class="btn btn-success fs-3"
                >Скачать Файл.</a
            >
        </div>
    </div>
</template>
<script>
export default {
    name: 'FileReady',
    props: { url: String },
};
</script>

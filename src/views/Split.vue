<template>
    <div class="px-lg-5 px-3 d-flex flex-wrap fs-4">
        <form class="col-12 col-xxl-6">
            <div
                class="my-4 d-flex justify-content-between flex-md-row flex-column"
            >
                <span>InFile:</span>
                <label class="form-label">
                    <input class="form-control fs-5" type="file" ref="inFile" />
                </label>
            </div>

            <div
                class="my-4 d-flex justify-content-between flex-md-row flex-column flex-md-row flex-column"
            >
                <span>Snap:</span>
                <label class="form-label">
                    <input
                        class="form-control fs-5"
                        type="number"
                        v-model="span"
                        placeholder="1"
                    />
                </label>
            </div>
            <button class="btn btn-primary fs-4" @click.prevent="SubmitData">
                Отправить
            </button>
        </form>
        <div class="vr d-none d-xxl-block mx-5"></div>
        <div class="card my-4 mx-auto" v-if="urlFiles">
            <h5 class="card-header fs-3">Файл готов.</h5>
            <div
                class="card-body d-flex justify-content-center flex-column fs-3"
            >
                <p class="card-text">Ссылка будет действовать 7 дней.</p>
                <a
                    v-for="(item, index) in urlFiles"
                    :href="url"
                    target="_blank"
                    class="btn btn-success fs-3"
                    :key="index"
                    >Скачать Файл.</a
                >
            </div>
        </div>
        <Error :err="error" />
    </div>
</template>
<script>
import { ref } from 'vue';
import { Split } from '../api/split';

import Error from '../components/Error.vue';
export default {
    name: 'Split',
    components: {
        Error,
    },
    setup() {
        const inFile = ref();
        const span = ref(1);

        const urlFiles = ref();

        const error = ref();

        const SubmitData = async () => {
            let data = await Split(inFile.value, span.value);
            error.value = '';
            if (data.error != undefined) {
                error.value = data.error;
            } else {
                urlFiles.value = data.file;
            }
        };

        return {
            inFile,
            urlFiles,
            error,
            span,
            SubmitData,
        };
    },
};
</script>

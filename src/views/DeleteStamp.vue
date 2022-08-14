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
                <span>SelectedPages:</span>
                <label class="form-label">
                    <input
                        class="form-control fs-5"
                        type="text"
                        v-model="selectedPages"
                        placeholder="all"
                    />
                </label>
            </div>

            <button class="btn btn-primary fs-4" @click.prevent="SubmitData">
                Отправить
            </button>
        </form>
        <div class="vr d-none d-xxl-block mx-5"></div>
        <div class="my-4">
            <span class="text-danger fs-3" v-if="error">{{ error }}</span>
        </div>
        <div class="card my-4 mx-auto" v-if="urlFile">
            <h5 class="card-header fs-3">Файл готов.</h5>
            <div
                class="card-body d-flex justify-content-center flex-column fs-3"
            >
                <p class="card-text">Ссылка будет действовать 7 дней.</p>
                <a :href="urlFile" target="_blank" class="btn btn-success fs-3"
                    >Скачать Файл.</a
                >
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import { DeleteStamp } from '../api/stamp';
export default {
    name: 'AddStamp',
    setup() {
        const selectedPages = ref('all');
        const inFile = ref();
        const urlFile = ref();
        const error = ref();

        const SubmitData = async () => {
            let data = await DeleteStamp(inFile.value, selectedPages.value);
            error.value = '';
            if (data.error != undefined) {
                error.value = data.error;
            } else {
                urlFile.value = data.file;
            }
        };

        return {
            inFile,
            selectedPages,
            SubmitData,
        };
    },
};
</script>

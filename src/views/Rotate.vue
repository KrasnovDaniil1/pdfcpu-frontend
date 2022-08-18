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
            <div
                class="my-4 d-flex justify-content-between flex-md-row flex-column flex-md-row flex-column"
            >
                <span>Rotate:</span>
                <label class="form-label">
                    <input
                        class="form-control fs-5"
                        type="number"
                        v-model="rotate"
                        placeholder="90"
                    />
                </label>
            </div>
            <button class="btn btn-primary fs-4" @click.prevent="SubmitData">
                Отправить
            </button>
        </form>
        <div class="vr d-none d-xxl-block mx-5"></div>
        <FileReady :url="urlFile" />
        <Error :err="error" />
    </div>
</template>
<script>
import { ref } from 'vue';
import { Crop } from '../api/crop';

import Error from '../components/Error.vue';
import FileReady from '../components/FileReady.vue';
export default {
    name: 'Rotate',
    components: {
        Error,
        FileReady,
    },
    setup() {
        const inFile = ref();
        const selectedPages = ref('all');
        const rotate = ref();

        const urlFile = ref();

        const error = ref();

        const SubmitData = async () => {
            let data = await Crop(
                inFile.value,
                selectedPages.value,
                rotate.value
            );
            error.value = '';
            if (data.error != undefined) {
                error.value = data.error;
            } else {
                urlFile.value = data.file;
            }
        };

        return {
            inFile,
            urlFile,
            error,
            selectedPages,
            rotate,
            SubmitData,
        };
    },
};
</script>

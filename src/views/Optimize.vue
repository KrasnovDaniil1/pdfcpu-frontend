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
import { Optimize } from '../api/optimize';

import Error from '../components/Error.vue';
import FileReady from '../components/FileReady.vue';
export default {
    name: 'Collect',
    components: {
        Error,
        FileReady,
    },
    setup() {
        const inFile = ref();
        const urlFile = ref();
        const error = ref();

        const SubmitData = async () => {
            let data = await Optimize(inFile.value);
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
            SubmitData,
        };
    },
};
</script>

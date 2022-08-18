<template>
    <div class="px-lg-5 px-3 d-flex flex-wrap fs-4">
        <form class="col-12 col-xxl-6">
            <div class="my-4 d-flex flex-column">
                <div>
                    InFiles:

                    <button
                        class="icon-btn btn btn-primary mx-4 fs-4"
                        @click.prevent="changeColInput(1)"
                    >
                        +
                    </button>
                    <button
                        class="icon-btn btn btn-danger fs-4"
                        @click.prevent="changeColInput(-1)"
                    >
                        -
                    </button>
                </div>
                <label
                    class="form-label my-3"
                    v-for="(inp, index) in colInput"
                    :key="index"
                >
                    <input
                        class="form-control 1 fs-5"
                        type="file"
                        @change="addFile($event.target)"
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
import { Merge } from '../api/merge';

import Error from '../components/Error.vue';
import FileReady from '../components/FileReady.vue';
export default {
    name: 'Collect',
    components: {
        Error,
        FileReady,
    },
    setup() {
        const inFiles = ref([]);
        const urlFile = ref();
        const colInput = ref(1);
        const error = ref();

        const SubmitData = async () => {
            let data = await Merge(inFiles.value);
            error.value = '';
            if (data.error != undefined) {
                error.value = data.error;
            } else {
                urlFile.value = data.file;
            }
        };

        const changeColInput = (i) => {
            colInput.value += i;
            if (colInput.value == 0) {
                colInput.value = 1;
            }
        };

        const addFile = (e) => {
            inFiles.value.push(e);
        };

        return {
            inFiles,
            urlFile,
            error,
            colInput,
            changeColInput,
            addFile,
            SubmitData,
        };
    },
};
</script>
<style lang="scss" scoped>
.icon-btn {
    width: 50px;
    height: 50px;
}
</style>

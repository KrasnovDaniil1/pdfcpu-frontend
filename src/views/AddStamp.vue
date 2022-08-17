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
                class="my-4 d-flex justify-content-between flex-md-row flex-column"
            >
                <span>Mode:</span>
                <div>
                    <label class="form-label fs-5">
                        text
                        <input
                            class="form-check-input"
                            type="radio"
                            value="text"
                            v-model="mode"
                        />
                    </label>
                    <label class="form-label mx-3 fs-5">
                        img
                        <input
                            class="form-check-input"
                            type="radio"
                            value="img"
                            v-model="mode"
                        />
                    </label>
                    <label class="form-label fs-5">
                        pdf
                        <input
                            class="form-check-input"
                            type="radio"
                            value="pdf"
                            v-model="mode"
                        />
                    </label>
                </div>
            </div>
            <div
                class="my-4 d-flex justify-content-between flex-md-row flex-column"
            >
                <span>OnTop:</span>
                <div>
                    <label class="form-label mx-3 fs-5">
                        stamp
                        <input
                            class="form-check-input"
                            type="radio"
                            value="true"
                            v-model="onTop"
                        />
                    </label>
                    <label class="form-label fs-5">
                        watermark
                        <input
                            class="form-check-input"
                            type="radio"
                            value="false"
                            v-model="onTop"
                        />
                    </label>
                </div>
            </div>
            <div
                class="my-4 d-flex justify-content-between flex-md-row flex-column"
            >
                <span>Update:</span>
                <div>
                    <label class="form-label mx-3 fs-5">
                        true
                        <input
                            class="form-check-input"
                            type="radio"
                            value="true"
                            v-model="update"
                        />
                    </label>
                    <label class="form-label fs-5">
                        false
                        <input
                            class="form-check-input"
                            type="radio"
                            value="false"
                            v-model="update"
                        />
                    </label>
                </div>
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
                v-if="mode == 'pdf'"
            >
                <span>PagePdfMode:</span>
                <label class="form-label">
                    <input
                        class="form-control fs-5"
                        type="text"
                        v-model="pagePdfMode"
                        placeholder="1"
                    />
                </label>
            </div>
            <div class="my-4 form-group" v-if="mode == 'text'">
                <span>TextMode:</span>
                <textarea
                    class="form-control fs-5 my-3"
                    v-model="textMode"
                    rows="4"
                ></textarea>
            </div>
            <div
                class="my-4 d-flex justify-content-between flex-md-row flex-column"
                v-if="mode != 'text'"
            >
                <span>FileMode:</span>
                <label class="form-label">
                    <input
                        class="form-control fs-5"
                        type="file"
                        ref="fileMode"
                    />
                </label>
            </div>
            <div class="my-4 form-group">
                <span>Description:</span>
                <textarea
                    class="form-control fs-5 my-3"
                    v-model="description"
                    rows="4"
                ></textarea>
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
import { AddStamp } from '../api/stamp';
import Error from '../components/Error.vue';
import FileReady from '../components/FileReady.vue';

export default {
    name: 'AddStamp',
    components: {
        Error,
        FileReady,
    },
    setup() {
        const mode = ref('text');
        const onTop = ref('true');
        const selectedPages = ref('all');
        const textMode = ref('Test...');
        const description = ref('');
        const fileMode = ref();
        const inFile = ref();
        const pagePdfMode = ref('1');
        const update = ref(false);

        const urlFile = ref();

        const error = ref();

        const SubmitData = async () => {
            let data = await AddStamp(
                inFile.value,
                mode.value,
                onTop.value,
                update.value,
                selectedPages.value,
                textMode.value,
                fileMode.value,
                pagePdfMode.value,
                description.value
            );
            error.value = '';

            if (data.error != undefined) {
                error.value = data.error;
            } else {
                urlFile.value = data.file;
            }
        };

        return {
            mode,
            onTop,
            inFile,
            selectedPages,
            textMode,
            fileMode,
            description,
            error,
            pagePdfMode,
            urlFile,
            update,
            SubmitData,
        };
    },
};
</script>

<template>
    <div class="px-lg-5 px-3 d-flex flex-wrap fs-4">
        <form class="col-12 col-xxl-6">
            <div
                class="my-4 d-flex justify-content-between flex-md-row flex-column"
            >
                <span>InFile:</span>
                <label class="form-label">
                    <input
                        class="form-control fs-5"
                        type="file"
                        @change="onUploadInFile"
                        ref="inFile"
                    />
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
            <div class="my-4 form-group" v-if="mode == 'text'">
                <span>TextMode:</span>
                <textarea
                    class="form-control fs-5 my-3"
                    v-model="textMode"
                    rows="5"
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
                        @change="onUploadFileMode"
                        ref="fileMode"
                    />
                </label>
            </div>
            <div class="my-4 form-group">
                <span>Description:</span>
                <textarea
                    class="form-control fs-5 my-3"
                    v-model="description"
                    rows="5"
                ></textarea>
            </div>
            <button class="btn btn-primary" @click.prevent="SubmitData">
                Отправить
            </button>
        </form>
        <div class="vr d-none d-xxl-block mx-5"></div>
        <div class="my-4">
            <span class="text-danger fs-3" v-if="error">{{ error }}</span>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import { AddStamp } from '../api/stamp';
export default {
    name: 'AddStamp',
    setup() {
        const mode = ref('text');
        const onTop = ref('true');
        const selectedPages = ref('all');
        const textMode = ref('Test...');
        const description = ref('df...');
        const fileMode = ref();
        const inFile = ref();
        const error = ref('ad');

        const onUploadFileMode = () => {
            console.log(fileMode.value.files);
        };
        const onUploadInFile = () => {
            console.log(inFile.value.files);
        };
        const SubmitData = () => {
            AddStamp(
                inFile.value,
                mode.value,
                onTop.value,
                selectedPages.value,
                textMode.value,
                fileMode.value,
                description.value
            );
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
            onUploadInFile,
            onUploadFileMode,
            SubmitData,
        };
    },
};
</script>
